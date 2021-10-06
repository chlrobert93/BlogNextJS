import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'empezando-con-nextjs1',
  title: 'Empezando con NextJS',
  image: 'Empezando-NextJS.png',
  date: '2022-02-10',
  content: '# This is a first post',
};




function PostContent() {
    
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;