import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  author_name: string;
  reading_time: number;
  seo_keywords: string[];
}

export const useBlogPosts = (limit?: number) => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ["blog-posts", language, limit],
    queryFn: async () => {
      let query = supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Map to language-specific fields
      return (data || []).map((post) => ({
        id: post.id,
        slug: post.slug,
        title: language === "es" ? post.title_es : post.title_en,
        excerpt: language === "es" ? post.excerpt_es : post.excerpt_en,
        content: language === "es" ? post.content_es : post.content_en,
        cover_image: post.cover_image,
        category: post.category,
        published_at: post.published_at,
        created_at: post.created_at,
        updated_at: post.updated_at,
        author_name: post.author_name,
        reading_time: post.reading_time,
        seo_keywords: post.seo_keywords || [],
      })) as BlogPost[];
    },
  });
};

export const useBlogPost = (slug: string) => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ["blog-post", slug, language],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error) throw error;
      if (!data) return null;

      // Map to language-specific fields
      return {
        id: data.id,
        slug: data.slug,
        title: language === "es" ? data.title_es : data.title_en,
        excerpt: language === "es" ? data.excerpt_es : data.excerpt_en,
        content: language === "es" ? data.content_es : data.content_en,
        cover_image: data.cover_image,
        category: data.category,
        published_at: data.published_at,
        created_at: data.created_at,
        updated_at: data.updated_at,
        author_name: data.author_name,
        reading_time: data.reading_time,
        seo_keywords: data.seo_keywords || [],
      } as BlogPost;
    },
  });
};
