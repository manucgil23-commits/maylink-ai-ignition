import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading } = useBlogPost(slug || "");
  const { t } = useLanguage();

  useEffect(() => {
    if (post) {
      // Set page title and meta description
      document.title = `${post.title} | Maylink AI Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = post.excerpt;
        document.head.appendChild(meta);
      }

      // Set keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", post.seo_keywords.join(", "));
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = post.seo_keywords.join(", ");
        document.head.appendChild(meta);
      }
    }
  }, [post]);

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-20">
          <article className="max-w-4xl mx-auto px-4 py-12">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-96 w-full mb-8 rounded-lg" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />
          </article>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-20">
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">{t.blog.postNotFound}</h1>
            <p className="text-muted-foreground mb-8">
              {t.blog.postNotFoundDesc}
            </p>
            <Button onClick={() => navigate("/blog")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.blog.backToBlog}
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-purple transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.blog.backToBlog}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            {/* Category Badge */}
            <span className="inline-block bg-brand-purple text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-purple via-brand-purple-light to-brand-purple bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.published_at).toLocaleDateString(
                    t.blog.locale,
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>
                  {post.reading_time} {t.blog.minRead}
                </span>
              </div>
              <div className="font-medium text-foreground">
                {post.author_name}
              </div>
            </div>
          </motion.header>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-12 rounded-lg overflow-hidden"
          >
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border-t border-border pt-12 mt-12"
          >
            <div className="bg-gradient-card border border-border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-purple via-brand-purple-light to-brand-purple bg-clip-text text-transparent">
                {t.blog.ctaTitle}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t.blog.ctaDescription}
              </p>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://cal.com/maylinkai/sesiondeestrategia",
                    "_blank"
                  )
                }
                className="bg-brand-purple hover:bg-brand-purple-dark text-primary-foreground"
              >
                {t.blog.ctaButton}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Keywords */}
          {post.seo_keywords.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-8 border-t border-border"
            >
              <div className="flex flex-wrap gap-2">
                {post.seo_keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
