import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/layout/site-layout";
import { formatDate } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

async function getBlogFromParams(params: BlogPostProps["params"]) {
  const slug = params?.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    null;
  }

  return blog;
}

export async function generateMetadata({ params }: BlogPostProps) {
  const blog = await getBlogFromParams(params);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export async function generateStaticParams(): Promise<BlogPostProps["params"][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const blog = await getBlogFromParams(params);

  if (!blog) {
    notFound();
  }

  return (
    <SiteLayout>
      <article className="py-20 pt-32 md:pt-40 relative">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-muted-foreground hover:text-accent mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <h1 className="gradient-text text-glow mb-6">{blog.title}</h1>
              
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-3">
                    {blog.author[0]}
                  </div>
                  <div>
                    <div className="font-heading text-sm">{blog.author}</div>
                    <div className="text-xs">
                      <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-secondary/20 text-xs">
                  {blog.category}
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden relative mb-10">
              <Image
                src={blog.image}
                alt={`${blog.title} feature image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Mdx code={blog.body.code} />
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 rounded-full bg-secondary/20 text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}