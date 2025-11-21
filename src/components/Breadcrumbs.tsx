import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  // Generate JSON-LD structured data for breadcrumbs (SEO enhancement)
  useEffect(() => {
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://maylinkai.lovable.app/"
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          ...(item.href && { "item": `https://maylinkai.lovable.app${item.href}` })
        }))
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbList);
    script.id = 'breadcrumb-schema';
    
    // Remove existing breadcrumb schema if present
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById('breadcrumb-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [items]);

  return (
    <Breadcrumb className="bg-secondary/30 rounded-lg px-4 py-3">
      <BreadcrumbList>
        {/* Home icon as first breadcrumb */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" aria-label="Inicio">
              <Home className="w-4 h-4" />
            </Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight className="w-4 h-4" />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index < items.length - 1 ? (
              <>
                <BreadcrumbLink asChild>
                  <Link to={item.href || "/"}>{item.label}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
              </>
            ) : (
              <BreadcrumbPage className="font-medium">{item.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
