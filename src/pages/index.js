import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Toronto Ice Skate Group</h1>
      <h2>Check Us Out</h2>
      <ul>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"  />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
          </a>
        </li>
      </ul>
      <img src="icebreaker-03.jpg" alt="Ice Breaking" />
    </div>
    <main>
      <div>
        <h2>Origin Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et erat ante. Praesent ut ex quis quam ornare condimentum. Proin ipsum sem, pretium efficitur sapien et, dapibus posuere lectus. Aliquam ut erat fermentum, sagittis erat ac, aliquam sapien. Suspendisse vestibulum sit amet magna a rhoncus. Fusce rhoncus, nisl sed dignissim porttitor, risus lacus mollis arcu, sed rutrum quam velit eu ante. Vivamus rhoncus ornare massa, at egestas nibh auctor ut. Maecenas non aliquet erat, ac dignissim lectus.</p>
        <img src="icebreaker-02.jpg" alt="Ice Breaking" />
      </div>
      <div>
        <h2>What is Ice Breaking?</h2>
        <p>Cras commodo mi bibendum, finibus metus at, sollicitudin sem. Fusce ligula justo, laoreet non faucibus elementum, porttitor in lectus. Aenean molestie ac nisi vitae rutrum. Curabitur sit amet consectetur leo. Proin fermentum vitae augue sit amet fermentum. Duis arcu lectus, sagittis sodales quam vel, egestas semper lorem. Proin eget sem consectetur, semper justo a, accumsan arcu. Integer posuere fringilla pretium. Nam id ornare nulla. Praesent eu consequat tellus. Nulla commodo nec eros ut interdum.</p>
      </div>
    </main>
    <div>
      <h2>Join the Team</h2>
      <p>Hit us up and we will let you know how you can be a part of the team!</p>
    </div>
  </Layout>
);

export default IndexPage;
