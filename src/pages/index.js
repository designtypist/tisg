import React from "react";
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from '../components/gallery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div id="home">
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
      <div id="about">
        <div>
          <h2>Origin Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et erat ante. Praesent ut ex quis quam ornare condimentum. Proin ipsum sem, pretium efficitur sapien et, dapibus posuere lectus. Aliquam ut erat fermentum, sagittis erat ac, aliquam sapien. Suspendisse vestibulum sit amet magna a rhoncus. Fusce rhoncus, nisl sed dignissim porttitor, risus lacus mollis arcu, sed rutrum quam velit eu ante. Vivamus rhoncus ornare massa, at egestas nibh auctor ut. Maecenas non aliquet erat, ac dignissim lectus.</p>
          <img src="icebreaker-02.jpg" alt="Ice Breaking" />
        </div>
        <div>
          <h2>What is Ice Breaking?</h2>
          <p>Cras commodo mi bibendum, finibus metus at, sollicitudin sem. Fusce ligula justo, laoreet non faucibus elementum, porttitor in lectus. Aenean molestie ac nisi vitae rutrum. Curabitur sit amet consectetur leo. Proin fermentum vitae augue sit amet fermentum. Duis arcu lectus, sagittis sodales quam vel, egestas semper lorem. Proin eget sem consectetur, semper justo a, accumsan arcu. Integer posuere fringilla pretium. Nam id ornare nulla. Praesent eu consequat tellus. Nulla commodo nec eros ut interdum.</p>
        </div>
      </div>
      <div id="media">
        <div>
          <div className="flex flex-col">
            <div className="w-1/3">
              <h2 className="text-5xl font-bold bg-black text-white">Photos</h2>
              <h4 className="text-3xl mt-6">2020</h4>
            </div>
            <div className="w-2/3">
              <Gallery title='Videos' items={data.photosGalleryJson.gallery} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="w-1/3">
              <h2 className="text-5xl font-bold bg-black text-white">Videos</h2>
              <h4 className="text-3xl mt-6">2020</h4>
            </div>
            <div className="w-2/3">
              <Gallery title='Videos' items={data.videosGalleryJson.gallery} />
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="flex flex-wrap bg-black text-white py-12">
        <div className="w-full text-center">
          <h2 className="font-bold mb-6">Join the Team</h2>
          <p className="my-6 px-12">Hit us up we will let you know how you can be a part of the team!</p>
        </div>
        <div className="md:w-1/2 w-4/5 md:h-screen mx-auto">
          <img className="md:h-full float-right clear-both" src="icebreaker-01.jpg" alt="teamup" />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="uppercase px-12">
            <h3>Connect with Us</h3>
            <form>
              <label className="block my-4" htmlFor="name">
                <h5 className="my-2">Name</h5>
                <input className="w-full p-1 text-sm" id="name" name="name" type="text" placeholder="John Doe" />
              </label>
              <label className="block my-4" htmlFor="subject">
                <h5 className="my-2">Subject</h5>
                <input className="w-full p-1 text-sm" id="subject" name="subject" type="text" placeholder="TISG Fan" />
              </label>
              <label className="block my-4" htmlFor="email">
                <h5 className="my-2">Email</h5>
                <input className="w-full p-1 text-sm" id="email" name="email" type="email" placeholder="johndoe@example.com" />
              </label>
              <label className="block my-4" htmlFor="message">
                <h5 className="my-2">Message</h5>
                <textarea className="w-full p-1 text-sm" id="message" name="message" rows="4" cols="45" placeholder="Place your message here"></textarea>
              </label>
              <input type="submit" name="Submit" className="bg-white text-black p-2 cursor-pointer" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    photosGalleryJson {
      title
      year
      gallery {
        description
        title
        image {
          childImageSharp {
            fluid(quality: 90, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    videosGalleryJson {
      title
      year
      gallery {
        description
        title
        image {
          childImageSharp {
            fluid(quality: 90, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
