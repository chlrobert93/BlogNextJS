
import React from 'react';
import ReactMarkdown from 'react-markdown'
import Image from 'next/image';

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
 // console.log(post.slug);
  
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
 

  /* const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`; */
  //markdown llamará a este método
  //este método, obtenemos datos sobre la imagen que se encontro
  const customRenderers = {
    /* img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    }, */
    //Revisar los parrafos

    p(paragraph) {
      //extraer el nodo real que sería renderizado por react-markdown
      const { node } = paragraph;
      //Solo renderizar la imgagens

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return(
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>;
    },
  };


 

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;