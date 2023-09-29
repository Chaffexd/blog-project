import Head from "next/head";
import FeaturedPosts from "../components/homepage/FeaturedPosts";
import Hero from "../components/homepage/Hero";
import { getFeaturedPosts } from "../helpers/posts-util";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Shane's Blog</title>
        <meta name="description" content="I post about stuff" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
