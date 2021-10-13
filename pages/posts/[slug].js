import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
  return  <PostContent post={props.posts} />
     
}

export function getStaticProps(context){
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

//Obtener rutas estáticas para avisar a NextJS qué valores deneríamos pregenerar
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