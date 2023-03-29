import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
        <Hero />
        <About />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
