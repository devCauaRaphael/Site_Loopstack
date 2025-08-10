import { ExternalLink, Github, Globe, Database, Smartphone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestão Empresarial",
      description: "ERP completo desenvolvido para otimizar processos administrativos e financeiros de empresas de médio porte.",
      icon: Database,
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Web Application",
      image: "🏢"
    },
    {
      title: "E-commerce Personalizado",
      description: "Plataforma de vendas online com sistema de pagamentos integrado e painel administrativo completo.",
      icon: ShoppingCart,
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      category: "E-commerce",
      image: "🛒"
    },
    {
      title: "App Mobile de Delivery",
      description: "Aplicativo móvel para delivery de comida com geolocalização, pagamentos e notificações push.",
      icon: Smartphone,
      technologies: ["React Native", "Firebase", "Redux", "Maps API"],
      category: "Mobile App",
      image: "📱"
    },
    {
      title: "Portal Corporativo",
      description: "Intranet corporativa com gestão de documentos, comunicação interna e controle de acesso.",
      icon: Globe,
      technologies: ["Vue.js", "Express", "MySQL", "Docker"],
      category: "Web Portal",
      image: "🌐"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos soluções sob medida que transformam a forma como nossos clientes conduzem seus negócios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="text-4xl">{project.image}</div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Detalhes
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;