import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Dados de exemplo com imagens geradas
  const galleryItems = [
    {
      id: "1",
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030997185/ZB44LbALyjx9sPxJpcMj24/portfolio-illustration-1-EhTCeS3uyfxJZpo5vY3RwC.webp",
      alt: "Ilustração de Personagem Fantasy",
      title: "Personagem Fantasy",
      category: "Ilustração Digital",
      width: 1,
      height: 1,
    },
    {
      id: "2",
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030997185/ZB44LbALyjx9sPxJpcMj24/portfolio-comic-1-BceRtNptCitu9R6J8qZJu9.webp",
      alt: "Página de Quadrinho com Ação",
      title: "Cena de Ação - Heróis",
      category: "Quadrinho",
      width: 2,
      height: 1,
    },
    {
      id: "3",
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030997185/ZB44LbALyjx9sPxJpcMj24/portfolio-character-design-P2J6uzxQxgUFqHdSzzYUNh.webp",
      alt: "Character Design Sheet",
      title: "Character Design - Lyra",
      category: "Design de Personagem",
      width: 1,
      height: 1,
    },
    {
      id: "4",
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030997185/ZB44LbALyjx9sPxJpcMj24/portfolio-comic-2-VfF3GKgyS8WAgkiHtHDLLZ.webp",
      alt: "Página de Quadrinho - Narrativa",
      title: "Página de Quadrinho - Ironvale",
      category: "Quadrinho",
      width: 2,
      height: 1,
    },
    {
      id: "5",
      src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030997185/ZB44LbALyjx9sPxJpcMj24/portfolio-illustration-2-F4ZU7nayi2otCynENzusuA.webp",
      alt: "Ilustração Atmosférica - Cidade",
      title: "Conceito de Ambiente",
      category: "Concept Art",
      width: 1,
      height: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />

        {/* Seção de Portfólio */}
        <section id="portfolio" className="py-20 md:py-32 bg-background border-t border-border">
          <div className="container">
            <div className="mb-12">
              <h2 className="h2 text-foreground mb-3">Portfólio</h2>
              <p className="subtitle">
                Uma seleção de meus trabalhos mais recentes em ilustração, quadrinhos e design.
              </p>
            </div>
            <Gallery items={galleryItems} />
          </div>
        </section>

        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
