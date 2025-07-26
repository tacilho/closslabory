import { Shield, CheckCircle, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-hero-gradient text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Segurança e Controle de Acesso Profissional
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A Closs Labory oferece soluções completas em portaria e controle de acesso, 
                garantindo a segurança e organização do seu ambiente empresarial.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
                <span>Controle de Funcionários</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
                <span>Gestão de Visitantes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
                <span>Controle de Veículos</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
                <span>Gestão de Documentos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-primary"
                onClick={() => window.open("https://wa.me/5519983402688?text=Olá,%20tudo%20bem?%20Gostaria%20de%20saber%20sobre%20os%20serviços!", "_blank")}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Serviços
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-primary-foreground/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium">Segurança</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-foreground/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium">Controle</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-foreground/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium">Agilidade</p>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <h3 className="text-xl font-semibold mb-2">Monitoramento 24/7</h3>
                <p className="text-primary-foreground/80">
                  Sistema integrado de controle e monitoramento para máxima eficiência
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;