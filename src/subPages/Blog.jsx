import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "../components/Container";
import { easeIn, easeOut, motion } from "framer-motion";

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
    </article>
  );
};

export default function BlogSection({ id }) {
  return (
    <section id={id} className="w-full bg-black pt-20 pb-15">
      <Container>
        <div className=" 2xl:mb-14 xl:mb-14 lg:mb-10 md:mb-18 mb-8 relative flex justify-between items-end">
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOut }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-white text-[56px] font-anton uppercase"
            >
              Latest
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: easeIn }}
              viewport={{ once: true, amount: 0.2 }}
              className="absolute left-10 top-6 text-redd font-patung italic text-[50px] whitespace-nowrap"
            >
              Insights
            </motion.span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeIn }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
