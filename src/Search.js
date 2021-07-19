import React from "react";
import "./Search.css";

export default function Search() {

  return (
    <div className="Search">
      <div className="row">
        <div className="col-9">
          <form>
            <input type="text" placeholder="Enter name of the city" className="Enter" />
            <input type="Submit" value="Search" className="btn-btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}