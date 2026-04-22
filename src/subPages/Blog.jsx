import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "../components/Container";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Mastering the Art of Color Grading for Cinematic Impact",
    excerpt:
      "Discover how subtle color shifts can drastically alter the mood of your narrative and keep your audience emotionally invested.",
    category: "Color Grading",
    date: "April 18, 2026",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Hooking Viewers in 3 Seconds: Short-form Content Strategy",
    excerpt:
      "A breakdown of pacing, sound design, and visual hooks needed to dominate TikTok and Instagram Reels algorithms.",
    category: "Content Strategy",
    date: "April 12, 2026",
    image:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Beyond the Cut: Building Narrative with Audio Sync",
    excerpt:
      "Why sound design is 50% of the video. Learn how to use Adobe Premiere Pro to seamlessly blend Foley and music.",
    category: "Sound Design",
    date: "April 05, 2026",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
  },
];

const BlogCard = ({ post }) => {
  return (
    <article className="group cursor-pointer flex flex-col gap-4">
      {/* Image Container with Hover Effect */}
      <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-neutral-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-xs font-satoshi uppercase tracking-wider px-3 py-1 border-l-2 border-redd">
          {post.category}
        </div>
      </div>

      <div className="flex flex-col gap-2 py-2">
        <span className="text-neutral-500 text-sm font-satoshi">
          {post.date}
        </span>
        <h3 className="text-white text-xl md:text-2xl font-satoshi leading-tight transition-colors duration-300 group-hover:text-redd">
          {post.title}
        </h3>
        <p className="text-neutral-400 text-sm font-satoshi md:text-base line-clamp-2 mt-1">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center text-white font-satoshi text-sm uppercase tracking-widest mt-auto group-hover:text-redd transition-colors duration-300">
        Read Article
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </article>
  );
};

export default function BlogSection({ id }) {
  return (
    <section id={id} className="w-full bg-black pt-10 pb-15">
      <Container>
        <div className="mb-16 md:mb-24 relative flex justify-between items-end">
          <div className="relative">
            <h2 className="text-white text-[56px] font-anton uppercase">
              Latest
            </h2>
            <span className="absolute left-8 top-4 text-redd font-patung text-[60px] -rotate-6 whitespace-nowrap">
              Insights
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <button className="border border-neutral-800 text-white px-8 py-3 text-sm font-satoshi uppercase tracking-widest hover:bg-redd hover:border-redd transition-all">
            View All Posts
          </button>
        </div>
      </Container>
    </section>
  );
}
