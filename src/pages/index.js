import React from "react";
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialMedia from '../components/social-media';
import Gallery from '../components/gallery';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div id="home" className="h-screen">
        <div className="flex flex-wrap">
          <div className="flex-initial lg:w-1/2 w-full">
            <h1 className="pl-6 font-title">Toronto Ice Skate Group</h1>
            <div className="bg-background-primary w-2/3">
              <h2 className="pl-6 py-4">Check Us Out</h2>
            </div>
            <div className="m-6">
              <SocialMedia />
            </div>
          </div>
          <img className="flex-initial lg:w-1/2 w-full" src="icebreaker-03.jpg" alt="Ice Breaking" />
        </div>
      </div>
      <div id="about">
        <div className="flex flex-wrap">
          <div className="flex-initial lg:w-1/2 w-full">
            <img className="h-screen float-right" src="icebreaker-02.jpg" alt="Ice Breaking" />
          </div>
          <div className="flex-initial lg:w-1/2 w-full">
            <div className="bg-background-primary mt-12">
              <h2 className="py-4 mx-6">Origin Story</h2>
            </div>
            <p className="m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et erat ante. Praesent ut ex quis quam ornare condimentum. Proin ipsum sem, pretium efficitur sapien et, dapibus posuere lectus. Aliquam ut erat fermentum, sagittis erat ac, aliquam sapien. Suspendisse vestibulum sit amet magna a rhoncus. Fusce rhoncus, nisl sed dignissim porttitor, risus lacus mollis arcu, sed rutrum quam velit eu ante. Vivamus rhoncus ornare massa, at egestas nibh auctor ut. Maecenas non aliquet erat, ac dignissim lectus.</p>
          </div>
        </div>
        <div className="py-12"></div>
        <div className="flex flex-wrap">
          <div className="flex-initial lg:w-2/5 w-full">
            <div className="bg-background-primary mt-12">
              <h2 className="py-4 mx-6">What is Ice Breaking?</h2>
            </div>
            <p className="m-6">Cras commodo mi bibendum, finibus metus at, sollicitudin sem. Fusce ligula justo, laoreet non faucibus elementum, porttitor in lectus. Aenean molestie ac nisi vitae rutrum. Curabitur sit amet consectetur leo. Proin fermentum vitae augue sit amet fermentum. Duis arcu lectus, sagittis sodales quam vel, egestas semper lorem. Proin eget sem consectetur, semper justo a, accumsan arcu. Integer posuere fringilla pretium. Nam id ornare nulla. Praesent eu consequat tellus. Nulla commodo nec eros ut interdum.</p>
          </div>
          <div className="flex-initial lg:w-3/5 w-full">
            <div className="iframe-container">
              <iframe src="https://www.youtube.com/embed/R5hUMhUFwJU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12"></div>
      <div id="media">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              <div className="w-2/3"></div>
              <div className="w-1/3 bg-background-primary py-4">
                <h2 className="pl-12 text-left">Photos</h2>
              </div>
            </div>
            <div className="flex items-center text-copy-primary my-4">
              <div className="flex-initial w-4/6 inline-block border-2"></div>
              <h4 className="flex-initial w-1/6 inline-block text-center">2020</h4>
              <div className="flex-initial w-1/6 inline-block border-2"></div>
            </div>
            <div className="w-5/6 mx-auto">
              <Gallery title='Videos' items={data.photosGalleryJson.gallery} reverse={''} />
            </div>
          </div>
        </div>
        <div className="py-12"></div>
        <div>
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              <div className="w-1/3 bg-background-primary py-4">
                <h2 className="pr-12 text-right">Videos</h2>
              </div>
              <div className="w-2/3"></div>
            </div>
            <div className="flex items-center text-copy-primary my-4">
              <div className="flex-initial w-1/6 inline-block border-2"></div>
              <h4 className="flex-initial w-1/6 inline-block text-center">2020</h4>
              <div className="flex-initial w-4/6 inline-block border-2"></div>
            </div>
            <div className="w-5/6 mx-auto">
              <Gallery title='Videos' items={data.videosGalleryJson.gallery} reverse={'reverse'} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-12"></div>
      <div id="contact" className="bg-background-primary py-12">
        <div className="w-full text-center">
          <h2 className="my-2">Join the Team</h2>
          <p className="text-lg text-copy-secondary">Hit us up we will let you know how you can be a part of the team!</p>
        </div>
        <div className="flex my-6 text-white">
          <div className="w-3/5 h-screen mx-auto">
            <img className="float-right clear-both" src="tisg_group_collab.jpg" alt="teamup" />
          </div>
          <div className="w-2/5">
            <div className="uppercase px-12">
              <h3 className="text-xl">Connect with Us</h3>
              <form>
                <label className="block my-4" htmlFor="name">
                  <h5 className="my-2">Name</h5>
                  <input className="w-full text-sm p-2" id="name" name="name" type="text" placeholder="John Doe" />
                </label>
                <label className="block my-4" htmlFor="subject">
                  <h5 className="my-2">Subject</h5>
                  <input className="w-full text-sm p-2" id="subject" name="subject" type="text" placeholder="TISG Fan" />
                </label>
                <label className="block my-4" htmlFor="email">
                  <h5 className="my-2">Email</h5>
                  <input className="w-full text-sm p-2" id="email" name="email" type="email" placeholder="johndoe@example.com" />
                </label>
                <label className="block my-4" htmlFor="message">
                  <h5 className="my-2">Message</h5>
                  <textarea className="w-full text-sm p-2" id="message" name="message" rows="4" cols="45" placeholder="Place your message here"></textarea>
                </label>
                <input type="submit" name="Submit" className="bg-white text-black p-2 cursor-pointer" />
              </form>
            </div>
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
