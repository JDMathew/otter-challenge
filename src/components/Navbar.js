import React from "react";

const Navbar = () => {
  return (
    <div style={styles.container}>
      <nav className="nav wrapper transparent">
        <div className="container">
          <a className="brand-logo">Otter</a>
          <ul className="right">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100 px",
    width: "100%",
    backgroundColor: "#0773c6",
  },
};

export default Navbar;
