import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/6760972b-8f73-4f1c-ba6e-6c1d71e468f5.png",
      title: "Central de Monitoramento",
      description: "Estação de trabalho com múltiplos monitores para controle de segurança"
    },
    {
      src: "/lovable-uploads/4500f187-9c55-4724-8189-2496b533c68a.png", 
      title: "Operador em Ação",
      description: "Profissional da Closs Labory monitorando as câmeras de segurança"
    },
    {
      src: "/lovable-uploads/7c7907b7-4292-4790-bd9a-5c25bfe1e07f.png",
      title: "Ambiente de Trabalho",
      description: "Vista geral da central de monitoramento durante operação"
    },
    {
      src: "/lovable-uploads/6ae7f577-ca51-4dea-96e6-21477c57aa95.png",
      title: "Fachada da Empresa", 
      description: "Entrada principal das instalações da Closs Labory"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary mb-4">
            Nossa Estrutura
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Infraestrutura Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossas instalações e o ambiente de trabalho da nossa equipe especializada 
            em segurança e monitoramento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden shadow-subtle hover:shadow-professional transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer conhecer de perto nossas instalações e sistema de monitoramento?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contato" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Agendar Visita
            </a>
            <a 
              href="tel:19983402688" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;