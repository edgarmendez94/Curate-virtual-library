const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const fileUpload = require('express-fileupload');
const {Image} = require('./models');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(fileUpload());

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


