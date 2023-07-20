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
