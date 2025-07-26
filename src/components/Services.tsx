import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Car, 
  Scale, 
  UserCheck, 
  Shield,
  ClipboardCheck,
  Building2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Portaria 1",
      description: "Controle completo de acesso de funcionários, visitantes e fornecedores",
      icon: <Users className="h-8 w-8 text-primary" />,
      features: [
        "Controle de funcionários",
        "Recebimento de visitas",
        "Gestão de clientes e fornecedores", 
        "Controle de saída de veículos",
        "Controle de revisão dos veículos"
      ],
      badge: "Acesso Principal"
    },
    {
      title: "Portaria 2", 
      description: "Gestão especializada em documentação fiscal e controle de cargas",
      icon: <FileText className="h-8 w-8 text-primary" />,
      features: [
        "Recebimento de notas fiscais",
        "Pesagem de matérias primas",
        "Controle de saída de notas fiscais",
        "Auxiliar na conferência de carga",
        "Gestão de documentação"
      ],
      badge: "Controle Fiscal"
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Monitoramento",
      description: "Sistema de câmeras e monitoramento em tempo real"
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
      title: "Relatórios",
      description: "Relatórios detalhados de movimentação e controle"
    },
    {
      icon: <Car className="h-6 w-6 text-primary" />,
      title: "Controle Veicular",
      description: "Gestão completa da frota e veículos de terceiros"
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Gestão Predial",
      description: "Controle integrado de todas as áreas da empresa"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em controle de acesso e segurança empresarial, 
            adaptadas às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-professional hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {service.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">Serviços inclusos:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <UserCheck className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-subtle transition-all duration-300 border-border">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;