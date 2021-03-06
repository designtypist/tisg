import React from "react";
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialMedia from '../components/social-media';
import Gallery from '../components/gallery';
import ContactForm from '../components/contact-form';
function IndexPage({ data }){
  return (
    <Layout>
    <SEO title="Home" />
    <section id="home" className="lg:h-screen">
      <div className="flex flex-wrap">
        <div className="flex-initial lg:w-1/2 w-full">
          <h1 className="lg:text-9xl text-5xl lg:text-left text-center uppercase font-title lg:pl-6 pl-0">Toronto Ice Skate Group</h1>
          <div className="bg-background-primary w-2/3">
            <h2 className="lg:block hidden lg:text-3xl text-xl font-extrabold text-white uppercase pl-6 py-4">Check Us Out</h2>
          </div>
          <div className="lg:text-left text-center m-6">
            <SocialMedia />
          </div>
        </div>
        <div className="flex-initial lg:w-1/2 w-full">
          {data.allImageSharp.edges.map((edge) => {
            if(edge.node.fluid.src.includes('splash-photo.jpg')) {
              return <Img fluid={edge.node.fluid} />
            }
          })}
        </div>
      </div>
    </section>
    <section id="about">
      <div className="flex flex-wrap lg:flex-row flex-col-reverse">
        <div className="flex-initial lg:w-1/2 w-full">
          <div className="lg:h-screen lg:px-0 px-12">
            {data.allImageSharp.edges.map((edge) => {
              if(edge.node.fluid.src.includes('icebreaker-01.jpg')) {
                return <Img fluid={edge.node.fluid} />
              }
            })}
          </div>
        </div>
        <div className="flex-initial lg:w-1/2 w-full">
          <div className="bg-background-primary mt-12">
            <h2 className="lg:text-3xl text-xl lg:text-left text-center font-extrabold uppercase text-white py-4 mx-6">Origin Story</h2>
          </div>
          <p className="m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et erat ante. Praesent ut ex quis quam ornare condimentum. Proin ipsum sem, pretium efficitur sapien et, dapibus posuere lectus. Aliquam ut erat fermentum, sagittis erat ac, aliquam sapien. Suspendisse vestibulum sit amet magna a rhoncus. Fusce rhoncus, nisl sed dignissim porttitor, risus lacus mollis arcu, sed rutrum quam velit eu ante. Vivamus rhoncus ornare massa, at egestas nibh auctor ut. Maecenas non aliquet erat, ac dignissim lectus.</p>
        </div>
      </div>
      <div className="py-12"></div>
      <div className="flex flex-wrap">
        <div className="flex-initial lg:w-2/5 w-full">
          <div className="bg-background-primary mt-12">
            <h2 className="lg:text-3xl text-xl lg:text-left text-center font-extrabold uppercase text-white py-4 mx-6">What is Ice Breaking?</h2>
          </div>
          <p className="m-6">Cras commodo mi bibendum, finibus metus at, sollicitudin sem. Fusce ligula justo, laoreet non faucibus elementum, porttitor in lectus. Aenean molestie ac nisi vitae rutrum. Curabitur sit amet consectetur leo. Proin fermentum vitae augue sit amet fermentum. Duis arcu lectus, sagittis sodales quam vel, egestas semper lorem. Proin eget sem consectetur, semper justo a, accumsan arcu. Integer posuere fringilla pretium. Nam id ornare nulla. Praesent eu consequat tellus. Nulla commodo nec eros ut interdum.</p>
        </div>
        <div className="flex-initial lg:w-3/5 w-full">
          <div className="iframe-container">
            <iframe src="https://www.youtube.com/embed/R5hUMhUFwJU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
    <div className="py-12"></div>
    <section id="media">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <div className="lg:w-2/3 w-1/2"></div>
          <div className="lg:w-1/3 w-1/2 bg-background-primary py-4">
            <h2 className="lg:text-3xl text-xl font-extrabold uppercase text-white text-left pl-12">Photos</h2>
          </div>
        </div>
        <div className="flex items-center text-copy-primary my-4">
          <div className="flex-initial w-4/6 inline-block border-2"></div>
          <h4 className="flex-initial w-1/6 inline-block text-center">2020</h4>
          <div className="flex-initial w-1/6 inline-block border-2"></div>
        </div>
        <div className="lg:w-3/5 w-5/6 mx-auto">
          <Gallery title='Videos' items={data.photosGalleryJson.gallery} flex_row={'flex-row'} />
        </div>
      </div>
      <div className="py-12"></div>
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <div className="lg:w-1/3 w-1/2 bg-background-primary py-4">
            <h2 className="lg:text-3xl text-xl font-extrabold uppercase text-white text-right pr-12">Videos</h2>
          </div>
          <div className="lg:w-2/3 w-1/2"></div>
        </div>
        <div className="flex items-center text-copy-primary my-4">
          <div className="flex-initial w-1/6 inline-block border-2"></div>
          <h4 className="flex-initial w-1/6 inline-block text-center">2020</h4>
          <div className="flex-initial w-4/6 inline-block border-2"></div>
        </div>
        <div className="lg:w-3/5 w-5/6 mx-auto">
          <Gallery title='Videos' items={data.videosGalleryJson.gallery} flex_row={'flex-row-reverse'} />
        </div>
      </div>
    </section>
    <div className="py-12"></div>
    <section id="contact" className="bg-background-primary py-12">
      <div className="w-full text-center">
        <h2 className="lg:text-3xl text-xl font-extrabold uppercase text-center text-white my-2">Join the Team</h2>
        <p className="text-lg text-copy-secondary">Hit us up we will let you know how you can be a part of the team!</p>
      </div>
      <div className="flex flex-wrap my-6 text-white">
        <div className="lg:w-3/5 w-full mx-auto">
          {data.allImageSharp.edges.map((edge) => {
            if(edge.node.fluid.src.includes('group-photo.jpg')) {
              return <Img fluid={edge.node.fluid} />
            }
          })}
        </div>
        <div className="lg:w-2/5 w-full">
          <div className="lg:px-12 xl:px-20 px-6 lg:py-0 py-6">
            <h3 className="text-xl uppercase">Get in Touch</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid(maxHeight: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    },
    photosGalleryJson {
      title
      year
      gallery {
        description
        title
        image {
          childImageSharp {
            fluid(quality: 90, maxHeight: 500) {
              ...GatsbyImageSharpFluid
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
