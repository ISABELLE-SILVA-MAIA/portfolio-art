import { Mail, Linkedin, Instagram, Github } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:seu-email@exemplo.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2 text-foreground mb-6">Vamos Conversar</h2>
          <p className="subtitle mb-12">
            Estou aberto a novas oportunidades, colaborações e projetos interessantes.
            Sinta-se livre para entrar em contato!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-md"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Email CTA */}
          <a
            href="mailto:seu-email@exemplo.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-sans font-medium rounded-lg transition-smooth hover:shadow-lg"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}
