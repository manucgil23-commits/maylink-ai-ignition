import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";

const BlogList = () => {
  const { data: posts, isLoading } = useBlogPosts();
  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-[400px] rounded-lg overflow-hidden bg-card border border-border">
              <div className="h-48 bg-muted/20 skeleton-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-muted/20 rounded skeleton-pulse w-3/4" />
                <div className="h-4 bg-muted/20 rounded skeleton-pulse w-full" />
                <div className="h-4 bg-muted/20 rounded skeleton-pulse w-5/6" />
                <div className="h-10 bg-muted/20 rounded skeleton-pulse w-1/2 mt-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">{t.blog.noPosts}</h2>
        <p className="text-muted-foreground mb-8">{t.blog.noPostsDesc}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple-light font-medium"
        >
          {t.blog.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group block h-full bg-card border border-border rounded-lg overflow-hidden hover:border-brand-purple transition-all duration-300 hover:shadow-purple hover-lift hover-glow focus-visible:ring-2 focus-visible:ring-brand-purple"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.cover_image}
                  alt={`${post.title} - Artículo sobre ${post.category}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="240"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-purple text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.published_at).toLocaleDateString(
                        t.blog.locale,
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>
                      {post.reading_time} {t.blog.minRead}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-brand-purple font-medium group-hover:gap-3 transition-all">
                  <span>{t.blog.readMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
