import fetch from 'isomorphic-fetch';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import config from './config';

export const wrapRootElement = ({ element }) => {
	if (config.dynamicComments) {
		const client = new ApolloClient({
			fetch,
			uri: config.wordPressUrl + '/graphql',
		});

		return <ApolloProvider client={client}>{element}</ApolloProvider>;
	} else {
		return <>{element}</>;
	}
};



export const onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    />,
  ])
  setPreBodyComponents([
    <script
      key="2"
      type="text/javascript"
      src="https://toddlambert.com/jquery.royalslider.min.js"
    />,
  ])
  setPostBodyComponents([
    <script
      key="3"
      type="text/javascript"
      src="https://toddlambert.com/jquery.royalslider.loader.js"
    />,
  ])
}





