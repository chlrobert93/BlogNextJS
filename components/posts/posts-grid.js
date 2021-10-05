import PostItem from './posts-item';
import classes from './posts-grid.module.css';


function PostsGrid(props) {
  const { posts } = props;
  console.log(posts)

  return (
      <ul className={classes.grid}>
          {posts.map(post => <PostItem />)}
      </ul>
  )
}

export default PostsGrid;
