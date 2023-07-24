import { getAllFilesFrontMatter } from '@/lib/mdx';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { PageSEO } from '@/components/SEO';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ComponentProps } from 'react';
import { POSTS_PER_PAGE } from 'config';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  const initialPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return { props: { initialPosts, posts, pagination } };
}

export default function Blog({
  posts,
  initialPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={posts}
        initialPosts={initialPosts}
        pagination={pagination}
        title='Blog'
      />
    </>
  );
}
