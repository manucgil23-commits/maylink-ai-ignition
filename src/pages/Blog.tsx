import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/blog/BlogList";
import ConnectedParticles from "@/components/ConnectedParticles";
import { useEffect } from "react";

const Blog = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Set page title and meta description
    document.title = `${t.blog.pageTitle} | Maylink AI`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.blog.pageDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = t.blog.pageDescription;
      document.head.appendChild(meta);
    }
  }, [t]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20 relative">
        <ConnectedParticles />
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 via-transparent to-transparent" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-purple via-brand-purple-light to-brand-purple bg-clip-text text-transparent"
            >
              {t.blog.pageTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              {t.blog.pageDescription}
            </motion.p>
          </div>
        </section>

        {/* Blog Posts */}
        <BlogList />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
