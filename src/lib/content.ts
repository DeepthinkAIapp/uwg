import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface PageContent {
  title: string;
  description: string;
  content: string;
  slug: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  author?: string;
}

export function getAllPages(): PageContent[] {
  const pagesDirectory = join(process.cwd(), 'content/pages');
  
  try {
    const filenames = readdirSync(pagesDirectory);
    
    const pages = filenames
      .filter(filename => filename.endsWith('.md'))
      .map((filename) => {
        const filePath = join(pagesDirectory, filename);
        const fileContents = readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug: filename.replace(/\.md$/, ''),
          title: data.title || '',
          description: data.description || '',
          content,
          category: data.category || '',
          tags: data.tags || [],
          publishedAt: data.publishedAt || new Date().toISOString(),
          updatedAt: data.updatedAt || new Date().toISOString(),
          featuredImage: data.featuredImage,
          author: data.author,
        };
      });
    
    return pages.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch (_error) {
    console.warn('No content pages found yet. Create some markdown files in content/pages/');
    return [];
  }
}

export function getPageBySlug(slug: string): PageContent | null {
  try {
    const filePath = join(process.cwd(), 'content/pages', `${slug}.md`);
    const fileContents = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      content,
      category: data.category || '',
      tags: data.tags || [],
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
      featuredImage: data.featuredImage,
      author: data.author,
    };
  } catch {
    return null;
  }
}

export function getPagesByCategory(category: string): PageContent[] {
  return getAllPages().filter(page => page.category === category);
}

export function getPagesByTag(tag: string): PageContent[] {
  return getAllPages().filter(page => page.tags.includes(tag));
}

export function searchPages(query: string): PageContent[] {
  const pages = getAllPages();
  const lowercaseQuery = query.toLowerCase();
  
  return pages.filter((page) =>
    page.title.toLowerCase().includes(lowercaseQuery) ||
    page.description.toLowerCase().includes(lowercaseQuery) ||
    page.content.toLowerCase().includes(lowercaseQuery) ||
    page.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
