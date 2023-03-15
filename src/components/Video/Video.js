import React, { Component } from "react";
import "./Video.css";

class Video extends Component {
  render() {
    return (
      <div className="vid-loop">
        <div className="wrapper">
          <video autoPlay muted loop playsinline className="background-video">
            <source
              src={process.env.PUBLIC_URL + "/bg_vid.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
  }
}

export default Video;
