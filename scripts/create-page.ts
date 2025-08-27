import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

interface PageData {
  title: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
}

function createPage(pageData: PageData) {
  const pagesDirectory = join(process.cwd(), 'content/pages');
  
  // Ensure directory exists
  try {
    mkdirSync(pagesDirectory, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
  
  const slug = pageData.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  const content = `---
title: "${pageData.title}"
description: "${pageData.description}"
category: "${pageData.category}"
tags: ${JSON.stringify(pageData.tags)}
publishedAt: "${new Date().toISOString()}"
updatedAt: "${new Date().toISOString()}"
author: "Utah Water Gardens"
---

${pageData.content}

## Contact Us

Ready to get started with your ${pageData.category.replace('-', ' ')} needs?

- 📞 Call: 801-590-8516
- 📧 Email: contact@utahwatergardens.com
- 📍 Visit: 5911 S 1300 E, Salt Lake City, Utah, 84121

**Utah Water Gardens** - Your trusted partner for all pond and water garden services.
`;

  const filePath = join(pagesDirectory, `${slug}.md`);
  writeFileSync(filePath, content);
  
  console.log(`✅ Created: ${slug}.md`);
  console.log(`📁 Location: ${filePath}`);
  console.log(`🔗 URL: /${pageData.category}/${slug}`);
  
  return slug;
}

// Example usage
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: npm run create:page "Page Title"');
    console.log('Example: npm run create:page "New Pond Service"');
    process.exit(1);
  }
  
  const title = args[0];
  const description = args[1] || `Professional ${title.toLowerCase()} services and information.`;
  const category = args[2] || 'pond-services';
  const tags = args[3] ? args[3].split(',') : ['utah', 'pond services'];
  
  const pageData: PageData = {
    title,
    description,
    category,
    tags,
    content: `# ${title}

Add your content here...

## Why Choose Professional ${title}?

- Expert service and guidance
- Quality materials and equipment
- Professional installation
- Ongoing support and maintenance

## Our Process

1. **Consultation** - We assess your needs
2. **Planning** - Create a custom solution
3. **Implementation** - Professional execution
4. **Follow-up** - Ensure satisfaction

Contact us today to learn more about our ${title.toLowerCase()} services!`
  };
  
  createPage(pageData);
}

export { createPage };
export type { PageData };
