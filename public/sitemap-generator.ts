// This file is a reference for generating dynamic sitemaps
// In production, you'd want to run this on your server or build process

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export async function generateSitemap(blogPosts: any[]): Promise<string> {
  const baseUrl = 'https://maylinkai.lovable.app';
  
  const urls: SitemapUrl[] = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.9,
    },
    // Add blog posts dynamically
    ...blogPosts.map(post => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.updated_at.split('T')[0],
      changefreq: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
}

// Example usage:
// const posts = await supabase.from('blog_posts').select('slug, updated_at').eq('published', true);
// const sitemap = await generateSitemap(posts.data || []);
// Write sitemap to public/sitemap.xml
