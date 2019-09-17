import React from 'react';
import { Link } from 'gatsby';

import LayoutFull from '../../components/LayoutFull';
import PostEntryMeta from '../../components/PostEntryMeta';
import PostEntryTitle from '../../components/PostEntryTitle';
import PostEntryMedia from '../../components/PostEntryMedia';
import EngagementBar from '../../components/EngagementBar';
import SEO from '../../components/SEO';
import BlogOptin from "../../components/BlogOptin";
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import { Helmet } from "react-helmet";

const renderTermNodes = (nodes, termType) => (
  <span className="taxonomy-links text-xs">
    {nodes.map(term => (
      <Link key={term.id} className="mr-2 p-2 mr-2 rounded bg-gray-100" to={`/${termType}/${term.slug}`}>
        {term.name}
      </Link>
    ))}
  </span>
);

const syntaxHighlighter = content => {

  var regex = /\[javascript\]|\[php\]|\[html\]|\[css\]/g;

  var regex2 = /\[\/javascript\]|\[\/php\]|\[\/html\]|\[\/css\]/gi;

  return {__html: content.replace(regex, '<pre class="bg-gray-900 text-gray-100 text-wrap overflow-scroll rounded p-4 font-mono">').replace(regex2, '</pre>') }
}

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <>
    {categoryNodes ? renderTermNodes(categoryNodes, 'category') : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, 'tag') : null}
  </>
);


const Post = ({ pageContext: post }) => {
  return (
    <LayoutFull>
    
    
    
    
	  
	  <br />
    {post.featuredImage && <PostEntryMedia post={post} location="single" classes="mb-20" />}
      <SEO title={`${post.title}`} />
      <Helmet>
          <meta property="og:image" content="https://urbanfetish.com/static/e1dfe299fa2cbf3d8b30ba1fc8e8e468/16981/urban-fetish-button.jpg" data-react-helmet="true" />
	</Helmet>
      <div className="post-wrapper single-post">
        <header className="entry-header max-w-2xl m-auto mb-6 mt-8">
          <PostEntryTitle
            location="single"
            post={post}
            titleClass="entry-title h1 mb-6"
          />
	
          <PostEntryMeta post={post} />
        </header>
        

        <div
          className="entry-content max-w-2xl m-auto"
          dangerouslySetInnerHTML={syntaxHighlighter(post.content)}
        />
        <footer className="entry-footer max-w-2xl m-auto">
          <BlogOptin />
          <div>Tags:</div>
          <div className="entry-footer__taxonomy justify-end self-center items-center">
          
            {post.categories.nodes.length || post.tags.nodes.length
              ? renderTerms(post.categories.nodes, post.tags.nodes)
              : null}
          </div>

          <EngagementBar post={post} />

          <CommentList postId={post.postId} />

          <CommentForm postID={post.postId} />
        </footer>

      </div>
      
    </LayoutFull>
  );
};

export default Post;
