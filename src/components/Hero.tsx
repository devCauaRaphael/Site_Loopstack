import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const features = [
    {
      icon: Code,
      title: "Desenvolvimento Personalizado",
      description: "Soluções sob medida para sua empresa"
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Sistemas rápidos e eficientes"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Proteção máxima dos seus dados"
    }
  ];

  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Desenvolvemos
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Sistemas Inovadores
              </span>
              para sua Empresa
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transformamos ideias em soluções digitais robustas e escaláveis. 
              Com expertise em tecnologias modernas, criamos sistemas que impulsionam o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow group"
              >
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Botão GitHub */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://github.com/LoopstackTechSolutions", "_blank", "noopener,noreferrer")}
              >
                Ver Portfólio
              </Button>
            </div>
          </div>

          {/* Right Content - Features Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-glow transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
