export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-sans font-bold text-foreground text-lg">
              Portfólio
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Artista e Quadrinista
            </p>
          </div>

          <nav className="flex gap-8">
            <a
              href="#portfolio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfólio
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
