import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    authorImage: {
      type: 'string',
      required: false,
    },
    category: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
  },
}));

// Define rehype pretty code options
const rehypePrettyCodeOptions = {
  theme: 'github-dark',
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['word--highlighted'];
  },
};

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // Apply rehypePrettyCode with type casting to avoid TypeScript issues
      // @ts-ignore - Force compatibility between different vfile versions
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});