import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <div style={{ marginTop: 100}}>hi there</div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
