import React from "react";
import { Link } from "gatsby";

//TODO: Make the page links dynamic
const PageLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </li>
      <li>
        <Link to="/page-3/">Go to page 3</Link> <br />
      </li>
      <li>
        <Link to="/page-4/">Go to page 4</Link> <br />
      </li>
      <li>
        <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
      </li>
    </ul>
  );
};

export default PageLinks;
