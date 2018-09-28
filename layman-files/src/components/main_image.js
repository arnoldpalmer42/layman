import React, { Component } from "react";
import "../App.css";

class MainImage extends Component {
  render() {
    return (
      <div className="main-image-area">
        <img
          className="main-image"
          src={
            "https://4.bp.blogspot.com/-TjNaM6izVNQ/UU4fPwXky9I/AAAAAAAAAJY/wW5UB7tlIWQ/s790/layma3.jpg"
          }
        />
      </div>
    );
  }
}

export default MainImage;
