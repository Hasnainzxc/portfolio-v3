import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '@/components/Form';
import Link from '@/components/Link';
import Pagination from '@/components/Pagination';
import Tag from '@/components/Tag';
import formatDate from '@/lib/utils/formatDate';
import { ComponentProps } from 'react';
import { BsFilterLeft as FilterIcon } from 'react-icons/bs';
import { PostFrontMatter } from 'types/PostFrontMatter';

interface Props {
  posts: PostFrontMatter[];
  title: string;
  initialDisplayPosts?: PostFrontMatter[];
  pagination?: ComponentProps<typeof Pagination>;
}

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  categories: string[];
  description: string;
  posts: PostFrontMatter[];
  
  initialDisplayPosts?: PostFrontMatter[];
  pagination?: ComponentProps<typeof Pagination>;
}

export default function ListLayout({ title, pagination }: Props) {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  
 
  useEffect(() => {
    // Fetch data from your Medium blog URL
    axios
      .get('https://api.rss2json.com/v1/api.json?rss_url=https://hasnainzxc.medium.com/feed')
      .then(response => {
        if (response.data.status === 'ok') {
          setPosts(response.data.items);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);



  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title={title}>
          <div className='relative max-w-lg'>
            {/* ... (existing code) ... */}
            
          </div>
        </Header>

        <ul>
          {!posts.length && <p className='mt-8 text-center'>No posts found</p>}
          {posts.map(post => {
            const { title, pubDate, link, categories, description } = post;
            const date = formatDate(pubDate);
            const tags = categories.map((category: string) => category.trim());

            return (
              <li key={link} className='py-4'>
                <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                      <time dateTime={date}>{date}</time>
                    </dd>
                  </dl>
                  <div className='space-y-3 xl:col-span-3'>
                    <div>
                      <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                        <Link
                          href={link}
                          className='text-gray-900 dark:text-gray-100'
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className='flex flex-wrap'>
                        {tags.map(tag => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div
                      className='prose max-w-none text-gray-500 dark:text-gray-400'
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {/* ... (existing code) ... */}
    </>
  );
}
