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
          <span>freedom</span> when it comes to creating <span>artwork. </span>
          Artists should <span>create</span> irrespective of clients, money, &
          time limits.
        </h1>
        <p style={{ display: fullView ? "block" : "none" }}>
          The world needs more art which is not bound to any of these limits.
          Let art be a result love and passion towards your work. We are
          building products that help us solve these problems. They will help
          artists create, showcase and monetize their work better.
          <br /> <br /> We started our journey with an android app{" "}
          <a href="https://play.google.com/store/apps/details?id=wedding.invitation.videos">
            Bulaava
          </a>{" "}
          . It's changing the way people invite guests to their special events
          of life. Motion graphics artists all around India can showcase
          invitation videos on our platform. They also earn a direct royalty for
          every sale. Bulaava gave birth to a vision of providing a platform to
          deserving artists. That vision today has evolved into spiring. <br />
          <br />
          Currently, we are focusing on building a team strong developers to
          help us realize our vision. The products currently in our pipelne are
          being built using javascript and its frameworks. Although our plan is
          to build products using a diverse set of technologies as required.
          People that relate with our vision and are familiar with javascript
          can connect with us at{" "}
          <a href="mailto: careers@spiring.co">careers@spiring.co</a> or visit
          the <a href="/jobs">jobs</a> page.
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
