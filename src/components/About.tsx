import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Entregamos soluções que geram valor real para o seu negócio"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes e dedicados ao sucesso do projeto"
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Sempre atualizados com as tecnologias mais modernas"
    }
  ];

  const achievements = [
    { number: "5+", label: "Projetos Concluídos" },
    { number: "30+", label: "Clientes Satisfeitos" },
    { number: "1+", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Satisfação" }
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre a <span className="bg-gradient-primary bg-clip-text text-transparent">LoopStack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em desenvolvimento de sistemas personalizados, 
            comprometida em transformar desafios tecnológicos em oportunidades de crescimento.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Desenvolvemos soluções tecnológicas inovadoras que automatizam processos, 
              otimizam operações e impulsionam o crescimento dos nossos clientes.
            </p>
            
            <div className="space-y-4">
              {[
                "Análise detalhada das necessidades do cliente",
                "Desenvolvimento com tecnologias modernas",
                "Testes rigorosos de qualidade",
                "Suporte contínuo e manutenção"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;