import React from "react";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-content">
        <div className="nav-logo">
          <h1>Demo </h1>
          <h1>weather</h1>
        </div>
        <div>
          <form action="#">
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Nav;
