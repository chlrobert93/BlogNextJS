import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeacturePosts from '../components/home-page/feacture-posts';
import { getFeacturedPosts } from '../lib/posts-util';

function HomePage(props) {

  /* const DUMMY_POSTS = [
    {
      slug: 'empezando-con-nextjs1',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    },
    {
      slug: 'empezando-con-nextjs2',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    },
    {
      slug: 'empezando-con-nextjs3',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    },
    {
      slug: 'empezando-con-nextjs4',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    }
]
 */
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
