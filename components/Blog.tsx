import { blogPosts } from "@/data/blog";
import { personalInfo } from "@/data/content";
import SectionLabel from "./ui/SectionLabel";
import BlogCard from "./blog/BlogCard";
import MagneticButton from "./ui/MagneticButton";

export default function Blog() {
  const track = [...blogPosts, ...blogPosts];

  return (
    <section id="blog" className="relative bg-background border-t border-border py-20 md:py-28 overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <SectionLabel number="05">Writing</SectionLabel>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white">
            From the Blog
          </h2>
        </div>
        {personalInfo.medium && (
          <MagneticButton strength={0.2}>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono tracking-widest uppercase px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors whitespace-nowrap"
            >
              View all on Medium
            </a>
          </MagneticButton>
        )}
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {track.map((post, i) => (
            <BlogCard key={`${post.id}-${i}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
