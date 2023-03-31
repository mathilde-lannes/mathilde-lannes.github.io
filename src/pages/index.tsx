import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Jobs from "../components/sections/Jobs";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
        <Hero />
        <About />
        <Jobs />
        {/*<Featured />*/}
        {/*<Projects />*/}
        <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Mathilde Lannes</title>
