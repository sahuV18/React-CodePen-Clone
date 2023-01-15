import React from "react";
import { Link } from "react-router-dom";

function NewTab(props) {
  return (
    <div>
      <div className="bpane">
        <div className='output'>
          <div>
            <h3>Output</h3>
          </div>
          <Link to="/" >
            <button>Close Screen</button>
          </Link>
        </div>
        <iframe
            srcDoc={props.srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
        />
      </div>
    </div>
  );
}
export default NewTab;
