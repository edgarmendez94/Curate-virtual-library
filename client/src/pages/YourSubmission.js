import React from "react";
import FileUpload from "../components/ImageUpload";

export default function HIW() {
  return (
    <div className="container mt-4" id="submissions">
      <h4 className="display-4 text-center mb-4">
        <i className="fab fa-react" /> Submit a pic
      </h4>

      <FileUpload />
    </div>
  );
}
