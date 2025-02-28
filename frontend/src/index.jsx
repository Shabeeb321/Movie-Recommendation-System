import React from "react";
import ReactDOM from "react-dom";
import ImageCarousel from "./ImageCarousel";

ReactDOM.render(
  <React.StrictMode>
    <ImageCarousel
      args={window.STREAMLIT_COMPONENT_OPTIONS}
    />
  </React.StrictMode>,
  document.getElementById("root")
);