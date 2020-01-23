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
import Job from "../components/Job"

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
      <Job
        title={"ReactJs - Front End Developer"}
        description={"New Delhi, Delhi"}
      />
      <Job
        title={"NodeJS - Back End Developer"}
        description={"New Delhi, Delhi"}
      />
      <Job
        title={"React Native - Mobile Developer"}
        description={"New Delhi, Delhi"}
      />
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
