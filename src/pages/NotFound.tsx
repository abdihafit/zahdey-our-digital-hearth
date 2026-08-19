import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Seo
        title="Page Not Found | ZAHDEY TECH"
        description="The page you requested could not be found. Return to the ZAHDEY TECH homepage."
      />
      <div className="max-w-xl rounded-[2rem] border border-border/60 bg-card p-10 text-center shadow-[var(--shadow-medium)]">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-secondary">
          404 Error
        </p>
        <h1 className="mt-4 text-5xl font-bold text-foreground">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The link may be outdated, or the page may have moved. The homepage is the best
          place to jump back into the site.
        </p>
        <Button asChild className="mt-8 gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Return home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
