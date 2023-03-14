import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

class Social extends Component {
  render() {
    return (
      <div className="social-container">
        <a
          href="https://www.facebook.com/COMPPEC/"
          className="facebook"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/COMPPEC"
          className="instagram"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/company/comppec"
          className="linkedin"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    );
  }
}

export default Social;
