import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';

export default function BlogListPageWrapper(props) {
  const { items } = props;

  // Reordena: featured primeiro
  const sortedItems = [...items].sort((a, b) => {
    const aFeatured = a.content.frontMatter.featured ? 1 : 0;
    const bFeatured = b.content.frontMatter.featured ? 1 : 0;
    return bFeatured - aFeatured; // featured vem antes
  });

  return <BlogListPage {...props} items={sortedItems} />;
}
