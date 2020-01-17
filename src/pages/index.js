import React, { useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import Layout from "components/Layout"

const Hero = styled("div")`
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  p {
    color: #616161;
    font-weight: 600;
    letter-spacing: 0.6px;
    font-size: 17px;
    display: block;
    line-height: 1.6;
    text-align: justify;
  }

  h1 {
    margin-bottom: 1em;
    font-family: poppins;
    span {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const RenderBody = ({ home, projects, meta }) => {
  let [fullView, setFullView] = useState(false)

  return (
    <>
      <Helmet
        title={meta.title}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: meta.title,
          },
          {
            property: `og:description`,
            content: meta.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: meta.author,
          },
          {
            name: `twitter:title`,
            content: meta.title,
          },
          {
            name: `twitter:description`,
            content: meta.description,
          },
        ].concat(meta)}
      />
      <Hero>
        <h1>
          We have always felt that <span>artists</span> need more{" "}
          <span>freedom</span> when it comes to creating <span>artwork</span>.
          The art should be created irrespective of <span>clients</span>, money,
          time limit.
        </h1>
        <p style={{ display: fullView ? "block" : "none" }}>
          It should be created with love and passion towards your work. We need
          to see more of art which is not bind with any of these limits. thats
          why, we are creating an independent platforms in various channels that
          reaches directly to the end customer. So that the artist work can be
          monetised and they can earn their living from it. Here, we need{" "}
          <span>developers</span> to create this perfect environment and tools
          that enable artist to perform better.
          <br />
          <br />
          Bulaava is one of our successful product in this voyage. we can
          honestly say that Bulaava has given birth to this idea, where we
          actually found the hardship in the artist work.
          <br />
          <br />
          Now, we are starting the platform where independent artists can sign
          up and submit their artwork and earn royalty from it. Lot of other
          product is in the line up as Renderfarms video automation API's Logo
          redesign app Art-Hackathon The Designer Palette (Artist Blogs) We need
          awesome people to help us realise this dream.
        </p>
        <p
          style={{ fontWeight: "bold", color: colors.purple500 }}
          onClick={() => {
            setFullView(!fullView)
          }}
        >
          {fullView ? " less" : " more"}
        </p>
        {/* <a target="_blank" rel="noopener noreferrer">
          <Button>Clickable</Button>
        </a> */}
      </Hero>
    </>
  )
}
export default ({ data }) => {
  //Required check for no data being returned
  const meta = data.site.siteMetadata

  return (
    <Layout>
      <RenderBody meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
