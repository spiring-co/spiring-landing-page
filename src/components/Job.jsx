import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Container = styled("div")`
  -webkit-box-shadow: 1px 1px 10px -10px rgba(33, 33, 33, 1);
  -moz-box-shadow: 1px 1px 10px -10px rgba(33, 33, 33, 1);
  box-shadow: 2px 2px 10px -10px rgba(33, 33, 33, 1);
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-top: 10px;
  margin-bottom: 50px;
`
const Button = styled("span")`
  font-weight: 700;
  color: #5393fb;
  cursor: pointer;
`

const Job = ({ title, description }) => (
  <Container>
    <h3>{title}</h3>
    <p>{description}</p>
    <Button
      onClick={() => {
        window.open("mailto:careers@spiring.co", "_blank")
      }}
    >
      APPLY
    </Button>
  </Container>
)

export default Job

Job.propTypes = {
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
}
