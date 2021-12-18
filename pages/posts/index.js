import { Fragment } from 'react';
import Head from 'next/Head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

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