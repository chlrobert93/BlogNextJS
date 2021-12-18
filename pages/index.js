import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeacturePosts from '../components/home-page/feacture-posts';
import { getFeacturedPosts } from '../lib/posts-util';

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>Eder Blog</title>
        <meta
          name='descripcion'
          content='Publicaciones sobre programación y desarrollo web.'
        />
      </Head>
      <Hero />
      <FeacturePosts posts={props.posts} />
    </Fragment>
  );
}


export function getStaticProps(){
  const feacturedPosts = getFeacturedPosts();

  return{
    props:{
      posts: feacturedPosts,
    },
    revalidate: 60,
  }
}
export default HomePage;
