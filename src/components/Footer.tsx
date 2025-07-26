import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-security-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Closs Labory</h3>
                <p className="text-sm text-primary-foreground/80">Segurança Empresarial</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Especialistas em soluções de portaria e controle de acesso, 
              oferecendo segurança e eficiência para seu negócio.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Portaria 1 - Controle de Acesso</li>
              <li>Portaria 2 - Controle Fiscal</li>
              <li>Monitoramento 24/7</li>
              <li>Gestão de Documentos</li>
              <li>Controle Veicular</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>(19) 98340-2688</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>(19) 99103-5715</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Campinas - SP e Região</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atendimento</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="text-sm">8h às 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p>Emergências</p>
                  <p className="text-sm">24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Closs Labory. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;