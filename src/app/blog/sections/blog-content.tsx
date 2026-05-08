"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

interface BlogPost {
    _id: string;
    title: string;
    bannerDescription: string;
    imageUrl: string;
    slug: string;
    category?: string;
    author?: string;
    readTime?: string;
}

interface BlogContentProps {
    posts: BlogPost[];
}

function BlogCard({ post }: { post: BlogPost }) {
    const postLink = `/blog/${post.slug}`;
    return (
        <div className="group space-y-6">
            {/* Image Link Container */}
            <Link href={postLink} className="relative block aspect-[16/10] overflow-hidden border border-border/40 bg-card">
                {/* HUD Detail - Top Left */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/40 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <Image
                    src={post.imageUrl || '/blog/placeholder.png'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Center Link Icon (Visual) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20">
                    <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center">
                        <ArrowUpRight size={20} className="text-white" />
                    </div>
                </div>
            </Link>


            {/* Content Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-playfair font-medium text-primary">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-primary/60">{post.readTime}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-playfair font-medium text-foreground leading-tight transition-colors duration-300 group-hover:text-primary">
                    <Link href={postLink}>{post.title}</Link>
                </h3>

                <p className="text-sm md:text-base text-foreground/60 font-poppins leading-relaxed line-clamp-3">
                    {post.bannerDescription}
                </p>

                <div className="pt-2">
                    <Link
                        href={postLink}
                        className="inline-flex items-center gap-2 text-sm font-playfair font-medium text-primary hover:underline transition-all"
                    >
                        Read more
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function BlogContent({ posts }: BlogContentProps) {
    if (!posts || posts.length === 0) {
        return (
            <section className="px-6 md:px-12 lg:px-24 bg-background py-20 text-center">
                <p className="text-primary font-playfair text-base font-medium">No blog posts found</p>
            </section>
        );
    }

    return (
        <section className="px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {posts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>

                {/* Pagination Placeholder (Premium style) */}
                {/* <div className="mt-32 flex items-center justify-center gap-4">
                    <div className="h-px flex-1 bg-border/20 max-w-[100px]" />
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-foreground/40">
                        <span className="text-primary font-bold">01</span>
                        <span>/</span>
                        <span>04</span>
                    </div>
                    <div className="h-px flex-1 bg-border/20 max-w-[100px]" />
                </div> */}
            </div>
        </section>
    );
}