import { useState } from "react";
import { Menu, X, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Closs Labory</h1>
              <p className="text-sm text-muted-foreground">Segurança Empresarial</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">(19) 98340-2688</span>
            </div>
            <Button variant="default" size="sm">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <div className="pt-3 border-t border-border">
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-foreground">(19) 98340-2688</span>
                </div>
                <Button variant="default" size="sm" className="w-full">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;