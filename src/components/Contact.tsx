import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.telefone || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e mensagem.",
        variant: "destructive",
      });
      return;
    }

    // Formatação da mensagem para WhatsApp
    const mensagemWhatsApp = encodeURIComponent(
      `Olá, tudo bem? Gostaria de saber sobre os serviços!

📋 *SOLICITAÇÃO DE ORÇAMENTO*

👤 *Nome:* ${formData.nome}
🏢 *Empresa:* ${formData.empresa || 'Não informado'}
📞 *Telefone:* ${formData.telefone}
📧 *Email:* ${formData.email || 'Não informado'}
🔧 *Serviço de Interesse:* ${formData.servico || 'Não especificado'}

💬 *Mensagem:*
${formData.mensagem}

_Enviado através do site da Closs Labory_`
    );

    // Abrir WhatsApp com a mensagem formatada
    window.open(`https://wa.me/5519983402688?text=${mensagemWhatsApp}`, '_blank');
    
    // Limpar formulário
    setFormData({
      nome: '',
      empresa: '',
      telefone: '',
      email: '',
      servico: '',
      mensagem: ''
    });

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Sua mensagem foi formatada e será enviada pelo WhatsApp.",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefones",
      details: [
        "(19) 98340-2688",
        "(19) 99103-5715"
      ],
      action: "tel:19983402688"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "WhatsApp",
      details: [
        "Atendimento rápido",
        "Suporte técnico"
      ],
      action: "https://wa.me/5519983402688?text=Olá,%20tudo%20bem?%20Gostaria%20de%20saber%20sobre%20os%20serviços!"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horário de Atendimento",
      details: [
        "Segunda a Sexta: 8h às 18h",
        "Emergências: 24h"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Localização",
      details: [
        "Atendemos toda região",
        "de Campinas e interior"
      ]
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite um orçamento personalizado ou tire suas dúvidas sobre nossos serviços. 
            Nossa equipe está pronta para atender você.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Solicitar Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nome Completo *
                      </label>
                      <Input 
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Empresa
                      </label>
                      <Input 
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Telefone *
                      </label>
                      <Input 
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(19) 99999-9999" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email" 
                        placeholder="seu@email.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Serviço de Interesse
                    </label>
                    <select 
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Portaria 1 - Controle de Acesso">Portaria 1 - Controle de Acesso</option>
                      <option value="Portaria 2 - Controle Fiscal">Portaria 2 - Controle Fiscal</option>
                      <option value="Ambos os serviços">Ambos os serviços</option>
                      <option value="Consultoria personalizada">Consultoria personalizada</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensagem *
                    </label>
                    <Textarea 
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva suas necessidades, localização e qualquer informação relevante..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-subtle hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-3"
                          onClick={() => window.open(info.action, '_blank')}
                        >
                          {info.title === "Telefones" ? "Ligar" : "Abrir WhatsApp"}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="bg-primary text-primary-foreground shadow-professional">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Emergência 24h</h3>
                <p className="text-sm mb-4 text-primary-foreground/90">
                  Para situações urgentes, nossa equipe está disponível 24 horas por dia
                </p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="text-primary"
                  onClick={() => window.open("tel:19983402688", "_self")}
                >
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;