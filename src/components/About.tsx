import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Users, 
  Clock,
  Target,
  Heart,
  Building2
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      number: "24/7",
      label: "Monitoramento"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "100+",
      label: "Clientes Atendidos"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      number: "10+", 
      label: "Anos de Experiência"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      number: "99%",
      label: "Disponibilidade"
    }
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Segurança",
      description: "Proteção e controle rigoroso em todos os processos"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Eficiência",
      description: "Soluções otimizadas para máxima produtividade"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Confiança",
      description: "Relacionamento baseado na transparência e qualidade"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                Sobre a Closs Labory
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Especialistas em Segurança e Controle de Acesso
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Closs Labory é uma empresa especializada em soluções de segurança empresarial, 
                oferecendo serviços de portaria e controle de acesso com tecnologia avançada e 
                profissionais altamente qualificados.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Proporcionar segurança, controle e tranquilidade para empresas através de 
                soluções integradas de portaria, garantindo eficiência operacional e proteção patrimonial.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Nossos Valores</h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-2 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-subtle hover:shadow-professional transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Company Image Placeholder */}
            <Card className="shadow-professional">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Building2 className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground font-medium">
                      Instalações da Closs Labory
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Centro de Monitoramento e Controle
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;