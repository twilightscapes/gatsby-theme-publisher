import React from 'react';
import LayoutFull from '../../components/LayoutFull';
import PostEntry from '../../components/PostEntry';
import HeaderArchive from '../../components/HeaderArchive';
import SEO from '../../components/SEO';


const SingleTag = props => {
  const {
    pageContext: { name, posts },
  } = props;

  return (
    <LayoutFull>
      <SEO
        title={`Tag - ${name}`}
        description={`A collection of posts from the ${name} tag.`}
      />
      <HeaderArchive name={"Tag: " + name} />
	  <div className="grid">
      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />;
        })}</div>
    </LayoutFull>
  );
};

export default SingleTag;
