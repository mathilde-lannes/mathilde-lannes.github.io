import React from 'react';
import {graphql, useStaticQuery} from "gatsby";

const Head = () => {

    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
          }
        }
      }
    `,
    );

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
    } = site.siteMetadata;

    const seo = {
        title: defaultTitle,
        description: defaultDescription,
        image: `${siteUrl}${defaultImage}`,
        url: `${siteUrl}`,
    };
    return (
        <>
            <title>{ seo.title }</title>

            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </>
    );
};

export default Head;
