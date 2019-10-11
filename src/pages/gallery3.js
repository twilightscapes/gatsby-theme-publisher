
import Layout from '../components/LayoutFull';

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'




import Gallery from '../components/Gallery'


const gal3Query = graphql`
  query gal3Query {
    allFile(filter: { relativeDirectory: { eq: "gallery3" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal3Page = () => {
  const data = useStaticQuery(gal3Query)
  return (
    <Layout>
      
      <Gallery
        photos={data.allFile.edges}
      />
    </Layout>
  )
}

export default Gal3Page
