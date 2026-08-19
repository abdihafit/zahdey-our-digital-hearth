import { type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormCardProps = {
  formData: ContactForm;
  onChange: (field: keyof ContactForm, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const ContactFormCard = ({
  formData,
  onChange,
  onSubmit,
}: ContactFormCardProps) => {
  return (
    <Card className="border-border/60 bg-card shadow-[var(--shadow-soft)]">
      <CardContent className="p-6">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(event) => onChange("name", event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(event) => onChange("email", event.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={(event) => onChange("subject", event.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              rows={6}
              value={formData.message}
              onChange={(event) => onChange("message", event.target.value)}
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full gap-2">
            <Send className="h-4 w-4" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactFormCard;
