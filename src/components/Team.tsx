import { Linkedin, Github, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "CEO & Lead Developer",
      bio: "10+ anos de experiência em desenvolvimento de sistemas corporativos e liderança de equipes técnicas.",
      avatar: "👨‍💼",
      skills: ["React", "Node.js", "AWS", "Leadership"],
      social: {
        linkedin: "#",
        github: "#",
        email: "carlos@loopstack.com.br"
      }
    },
    {
      name: "Ana Santos",
      role: "Frontend Developer",
      bio: "Especialista em interfaces modernas e experiência do usuário, com foco em React e design systems.",
      avatar: "👩‍💻",
      skills: ["React", "TypeScript", "UI/UX", "Figma"],
      social: {
        linkedin: "#",
        github: "#",
        email: "ana@loopstack.com.br"
      }
    },
    {
      name: "Pedro Oliveira",
      role: "Backend Developer",
      bio: "Expert em arquitetura de sistemas, APIs RESTful e bancos de dados escaláveis.",
      avatar: "👨‍💻",
      skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
      social: {
        linkedin: "#",
        github: "#",
        email: "pedro@loopstack.com.br"
      }
    },
    {
      name: "Maria Costa",
      role: "DevOps Engineer",
      bio: "Responsável pela infraestrutura e deploy de aplicações, com expertise em cloud computing.",
      avatar: "👩‍🔧",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      social: {
        linkedin: "#",
        github: "#",
        email: "maria@loopstack.com.br"
      }
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="bg-gradient-primary bg-clip-text text-transparent">Equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais talentosos que fazem a diferença em cada projeto da LoopStack.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="text-6xl mb-4">{member.avatar}</div>
                
                {/* Info */}
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`mailto:${member.social.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interessado em fazer parte da nossa equipe?
          </p>
          <Button 
            variant="outline" 
            size="lg"
          >
            Ver Vagas Abertas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;