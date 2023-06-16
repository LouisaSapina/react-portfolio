import React, { Component } from 'react';
import Pdf from '../header/cv.pdf';
import "./style.css";

class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank" className='download'>Download CV</a>
        </div>
    );
  }
}

export default Download;