import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming stuffs" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
