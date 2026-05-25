export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="h1 text-foreground mb-6">
            Artista e Quadrinista
          </h1>
          <p className="subtitle mb-8">
            Explorando narrativas visuais através de desenhos e quadrinhos.
            Criatividade, técnica e imaginação em cada traço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-sans font-medium rounded-lg transition-smooth hover:shadow-lg"
            >
              Ver Portfólio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-sans font-medium rounded-lg transition-smooth hover:bg-secondary"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
