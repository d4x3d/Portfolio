import React from "react";
import "./BlobsAnimation.css";

function BlobsBc() {
  return (
    <div className="body">
      <section>
        {/* BACKGROUND BLOBS */}
        <div className="bc-blobs"></div>

        {/* ORANGE BLOBS */}
        <div className="orange orange-bg"></div>
        <div className="orange orange-md"></div>
        <div className="orange orange-md bottom"></div>
        <div className="orange orange-sm"></div>

        {/* BLUE BLOBS */}
        <div className="blue blue-bg"></div>
        <div className="blue blue-sm middle"></div>
        {/* <div className="blue blue-sm right"></div> */}
        <div className="blue blue-sm left"></div>
        {/* <div className="blue blue-xsm"></div> */}
        <div className="blue blue-md"></div>

        {/* PURPLE BLOBS */}
        <div className="purple purple-left"></div>
        <div className="purple purple-righ"></div>

        {/* GREEN BLOBS */}
        <div className="green green-left"></div>
        <div className="green green-righ"></div>
        <div className="green green-bottom"></div>
      </section>
    </div>
  );
}

export default BlobsBc;
