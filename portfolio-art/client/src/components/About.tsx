export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Texto */}
          <div>
            <h2 className="h2 text-foreground mb-6">Sobre Mim</h2>
            <div className="space-y-4 text-foreground/80 font-sans leading-relaxed">
              <p>
                Sou um artista apaixonado por contar histórias através de desenhos e quadrinhos.
                Com experiência em ilustração digital e tradicional, trabalho para criar narrativas
                visuais que engajam e inspiram.
              </p>
              <p>
                Meu trabalho combina técnica refinada com criatividade sem limites, explorando
                diferentes estilos e temas que variam desde fantasia até realismo.
              </p>
              <p>
                Estou sempre buscando novos desafios e oportunidades para colaborar com equipes
                criativas e levar minhas habilidades para o próximo nível.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="h3 text-foreground mb-8">Habilidades</h3>
            <div className="space-y-4">
              {[
                { skill: "Ilustração Digital", level: 90 },
                { skill: "Quadrinhos e Narrativas", level: 85 },
                { skill: "Desenho Tradicional", level: 88 },
                { skill: "Design de Personagens", level: 92 },
                { skill: "Concept Art", level: 87 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="font-sans text-sm font-medium text-foreground">
                      {item.skill}
                    </span>
                    <span className="font-sans text-sm text-muted-foreground">
                      {item.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
