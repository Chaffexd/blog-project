import FeaturedPosts from '../components/homepage/FeaturedPosts';
import Hero from '../components/homepage/Hero'

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting started with Next JS',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next JS is the React framework for production - it makes building apps ez.',
        date: '2023-02-10'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting started with Next JS',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next JS is the React framework for production - it makes building apps ez.',
        date: '2023-02-10'
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting started with Next JS',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next JS is the React framework for production - it makes building apps ez.',
        date: '2023-02-10'
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting started with Next JS',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next JS is the React framework for production - it makes building apps ez.',
        date: '2023-02-10'
    },
]

const HomePage = () => {
  return (
    <>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
