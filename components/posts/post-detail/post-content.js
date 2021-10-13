
import React from 'react';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';
/* 
const DUMMY_POST = {
  slug: 'empezando-con-nextjs1',
  title: 'Empezando con NextJS',
  image: 'Empezando-NextJS.png',
  date: '2022-02-10',
  content: '# Este es un primer post',
};
 */



function PostContent(props) {
   
  const { post } = props;
  
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  /* const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`; */



  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;