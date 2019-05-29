import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface ISEOPropTypes {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
}

function SEO({ description, lang, meta, keywords, title }: ISEOPropTypes) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            /*   
               <!-- Facebook Card -->
               <meta property="og:image" content="http://www.thomastellsastory.com/card-ttas.jpg" />
               <meta property="og:title" content="Thomas Tells a Story">
               <!--<meta property="og:url" content="...">-->
               <meta property="og:description" content="a long-form narrative podcast inspired by ancient traditions of storytelling" />
               <!-- Twitter Card -->
               <meta name="twitter:card" content="summary_large_image">
               <meta name="twitter:creator" content="@thomascmost">
               <meta name="twitter:title" content="Thomas Tells a Story">
               <meta name="twitter:description" content="a long-form narrative podcast inspired by ancient traditions of storytelling">
               <meta name="twitter:image" content="http://www.thomastellsastory.com/img/card-elan.jpg" >

            */
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:image`,
                content: `https://www.thomastellsastory.com/card-ttas.jpg`
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              },
              {
                property: `twitter:image`,
                content: `https://www.thomastellsastory.com/card-ttas.jpg`
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
