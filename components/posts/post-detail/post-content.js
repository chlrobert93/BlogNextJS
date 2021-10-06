
import React from 'react';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'empezando-con-nextjs1',
  title: 'Empezando con NextJS',
  image: 'Empezando-NextJS.png',
  date: '2022-02-10',
  content: '# Este es un primer post',
};




function PostContent() {
    
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  console.log(imagePath);

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;