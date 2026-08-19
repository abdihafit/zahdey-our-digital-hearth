import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/siteContent";

const ContactDetails = () => {
  return (
    <div className="space-y-6 rounded-[2rem] border border-border/60 bg-card p-8 shadow-[var(--shadow-soft)]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
          Reach Us
        </p>
        <h3 className="mt-3 text-3xl font-bold text-foreground">Talk to the team</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Whether you are validating an idea, improving an existing system, or planning
          a bigger operational shift, we are happy to start with a practical conversation.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-foreground">Email</p>
            <a
              href={`mailto:${company.email}`}
              className="block text-sm text-muted-foreground transition-colors hover:text-secondary"
            >
              {company.email}
            </a>
            <a
              href={`mailto:${company.secondaryEmail}`}
              className="block text-sm text-muted-foreground transition-colors hover:text-secondary"
            >
              {company.secondaryEmail}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-foreground">Phone</p>
            <a
              href={company.phoneHref}
              className="text-sm text-muted-foreground transition-colors hover:text-secondary"
            >
              {company.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-foreground">Location</p>
            <p className="text-sm text-muted-foreground">{company.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
