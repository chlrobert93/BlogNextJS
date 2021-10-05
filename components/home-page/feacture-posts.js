import PostsGrid from '../posts/posts-grid';
import classes from './feacture-posts.module.css';

function FeacturePosts(props) {

  return (
    <section className={classes.latest}>
      <h2>publicaciones destacadas</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default FeacturePosts;
