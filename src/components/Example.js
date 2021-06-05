import React from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

export default function Example() {
  return (
    <Router>
      <div style={{ color: "#fff" }}>
        <p>This is example page</p>
        <nav>
          <ul>
            <li>
              <Link>Feed</Link>
            </li>
            <li>
              <Link>Explore</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}
