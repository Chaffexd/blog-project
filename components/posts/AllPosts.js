import PostGrid from './PostGrid';
import classes from './allposts.module.css';

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
