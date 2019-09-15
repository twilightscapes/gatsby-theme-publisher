import React from 'react';
import {StaticQuery, graphql } from 'gatsby';


class ComponentName extends React.Component {
	

		

  <StaticQuery
    query={graphql`
      {
        wpgraphql {
          menus(where: {location: SOCIAL}) {
            nodes {
              menuItems {
                nodes {
                  url
                  label
                }
              }
            }
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>


}

export default ComponentName