import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
