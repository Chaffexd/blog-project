import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';

import classes from './postcontent.module.css';

const DUMMY_POST = {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with Next JS",
    image: "getting-started-nextjs.png",
    date: "2023-02-10",
    content: '# This is a first post '
};

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />  
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent