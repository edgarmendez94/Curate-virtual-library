const express = require('express');
const fs = require("fs")
// const utils = require("utils")
// const unlinkFile = utils.promisify(fs.unlink)
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const fileUpload = require('express-fileupload');
const { Image } = require('./models');
const multer = require("multer")
const { uploadFile, getFileStream } = require("./S3")

const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const upload = multer({ dest: "uploads/" })

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(upload.any());

// app.use(fileUpload());

// from youtube video:https://www.youtube.com/watch?v=NZElg91l_ms&t=288s&ab_channel=SamMeech-Ward
app.post('/images', upload.single("file"), async (req, res) => {
  console.log(req.file)
  const file = req.file
  console.log("this is the file", file)
  const result = await uploadFile(file)
  // await unlinkFile(file.path)
  console.log(result)
  const description = req.body.description
  res.send({ imagePath: `images/${result.Key}` })
})

// getting an image
app.get("/images/:key", (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`../client/public/uploads/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    const image = await Image.create({
      fileName: file.name
    })

    console.log(image)
    res.json({ fileName: image.fileName, filePath: `/uploads/${image.fileName}` });
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  })
}

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);


