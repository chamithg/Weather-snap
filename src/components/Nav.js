import React, { useRef } from "react";
import { useGlobalContext } from "../context";

function Nav() {
  const { setSearchTerm } = useGlobalContext();
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(refContainer.current.value);
  };

  return (
    <div className="nav">
      <div className="nav-content">
        <div className="nav-logo">
          <h1>Demo </h1>
          <h1>weather</h1>
        </div>
        <div>
          <form action="#" className="form " onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="city"
              id="city"
              ref={refContainer}
            />
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
