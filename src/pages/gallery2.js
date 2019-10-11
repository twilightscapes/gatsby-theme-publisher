
import Layout from '../components/LayoutFull';

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'




import Gallery from '../components/Gallery'


const gal2Query = graphql`
  query gal2Query {
    allFile(filter: { relativeDirectory: { eq: "gallery2" } }) {
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

const Gal2Page = () => {
  const data = useStaticQuery(gal2Query)
  return (
    <Layout>
      
      <Gallery
        photos={data.allFile.edges}
      />
    </Layout>
  )
}

export default Gal2Page
