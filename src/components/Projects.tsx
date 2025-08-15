import { ExternalLink, Github, Globe, Database, Smartphone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

    const Projects = () => {
      const projects = [
        {
          title: "Anu Viagens ERP",
          description: "ERP completo desenvolvido para otimizar processos administrativos e financeiros de empresas de médio porte.",
          icon: Database,
          technologies: ["C#", "MySQL", "ASP.NET", "Bootstrap"],
          github:"https://github.com/TCC-ETEC-01/E-Commerce",
          category: "ERP",
          image: "🏢"
        },
        {
          title: "Vegalume E-commerce",
          description: "Plataforma de vendas online com sistema de pagamentos integrado e painel administrativo completo.",
          icon: ShoppingCart,
          technologies: ["C#", "MySQL", "Asp.NET", "BootStrap"],
          github: "https://github.com/LoopstackTechSolutions/vegalume",
          category: "E-commerce",
          image: "🛒"
        }
      ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-primary bg-clip-text ">Projetos</span>
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
              {project.github && (
                <Button 
                  variant="ghost" 
                  size="sm"
                 onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                >     
               <Github className="h-4 w-4" />
              </Button>
             )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;