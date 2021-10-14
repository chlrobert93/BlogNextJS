import { Fragment } from 'react';
import Head from 'next/Head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
/* const DUMMY_POSTS = [
    {
      slug: 'empezando-con-nextjs1',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    },
];

 */


function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta 
          name='descripcion'
          content='Una lista de todas las publicaciones con la progrmación!'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){

const allPosts =  getAllPosts();

  return{
    props:{
      posts: allPosts,
    }
  };
}




export default AllPostsPage;