// blog.tsx
import { getAllFilesFrontMatter } from '@/lib/mdx';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { PageSEO } from '@/components/SEO';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ComponentProps } from 'react';
import { POSTS_PER_PAGE } from 'config';
import axios from 'axios';

export const getStaticProps: GetStaticProps<{
  posts: ComponentProps<typeof ListLayout>['posts'];
  initialDisplayPosts: ComponentProps<typeof ListLayout>['initialDisplayPosts'];
  pagination: ComponentProps<typeof ListLayout>['pagination'];
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  try {
    // Fetch Medium posts
    const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://hasnainzxc.medium.com/feed');
    if (response.data.status === 'ok') {
      const mediumPosts = response.data.items;

      // Convert Medium posts to the required format (PostFrontMatter)
      const formattedMediumPosts = mediumPosts.map((post) => ({
        title: post.title,
        date: post.pubDate,
        slug: post.link,
        tags: post.categories,
        summary: post.description,
      }));

      // Combine Medium posts with the existing posts
      const combinedPosts = [...posts, ...formattedMediumPosts];

      return {
        props: {
          initialDisplayPosts,
          posts: combinedPosts,
          pagination,
        },
      };
    } else {
      throw new Error('Error fetching Medium posts');
    }
  } catch (error) {
    console.error('Error fetching Medium posts:', error);

    // Return only the existing posts if there was an error fetching Medium posts
    return {
      props: {
        initialDisplayPosts,
        posts,
        pagination,
      },
    };
  }
};

export default function Blog({
  posts,
  initialDisplayPosts,
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
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title='Blog'
      />
    </>
  );
}
