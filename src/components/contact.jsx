import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card } from "@/components/ui/card";

const CONTACT_ITEMS = [
  {
    Icon: Mail,
    label: "Email",
    value: "andizogaj000@gmail.com",
    href: "mailto:andizogaj000@gmail.com",
  },
  { Icon: FaGithub, label: "GitHub", value: "@AndiZogaj22", href: "https://github.com/AndiZogaj22/" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    value: "Andi Zogaj",
    href: "https://www.linkedin.com/in/andi-zogaj-20a8a2242/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground">
          Interested in working together or have a question? Reach out any of these ways.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
          {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
            <Card key={label} className="min-w-0 items-center gap-2 p-3 text-center sm:p-4">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                <Icon className="size-4 text-primary" />
              </span>
              <div className="min-w-0 w-full">
                <p className="text-xs text-muted-foreground">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block text-sm font-medium break-words hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="block text-sm font-medium break-words">{value}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
