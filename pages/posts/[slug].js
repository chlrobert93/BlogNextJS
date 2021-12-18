import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';


//Para publicaciones de blog individual
function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.posts.title}</title>
        <meta name="description" content={props.posts.excerpt} />
      </Head>
      <PostContent post={props.posts} />
    </Fragment>
  );
}

export  function getStaticProps(context){
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return{
    props: {
      posts: postData
    },

    revalidate: 600
  };
}

//Obtener rutas estáticas para avisar a NextJS qué valores deberíamos pregenerar
export function getStaticPaths(){

  //Todos los nombres de archivos de las publicaciones
  const postFilenames =  getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/,''));

  return{
    paths: slugs.map(slug => ({ params: {slug : slug}})),
    fallback: false
  };
}

export default PostDetailPage;