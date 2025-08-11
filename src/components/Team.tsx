import { Linkedin, Github, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Vinicius Cavequi",
      role: "CEO & Lider de Desenvolvimento",
      avatar: "👨‍💼",
      skills: ["C#", ".NET", "HTML", "CSS", "JavaScript", "Leadership", "Java"],
      social: {
        linkedin: "#",
        github: "https://github.com/cavequi",
        email: "vinicavequi@gmail.com",
        website: "https://www.linkedin.com/in/vinicius-cavequi-207bb8353/"
      }
    },
    {
      name: "Débora Monique",
      role: "Database Developer",
      avatar: "👩‍💻",
      skills: ["C#", "JavaScript", "MySQL", "SQL Server", "Git", "Github", "React", "CSS", "HTML"],
      social: {
        linkedin: "https://www.linkedin.com/in/debora-monique-silva-45b982353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Unic0rna",
        email: "ds336756@gmail.com",
      }
    },
    {
      name: "Cauã Raphael",
      role: "Backend Developer",
      avatar: "👨‍💻",
      skills: ["Node.js", "Java", "JavaScript", "MySQL", "MongoDB", "GraphQL", "Restful", "PHP", "PostgreSQL", "Docker", "CI/CD", "AWS", "Azure", "GCP"],
      social: {
        linkedin: "https://www.linkedin.com/in/devcauaraphael/",
        github: "https://github.com/devCauaRaphael",
        email: "dev.cauaraphael@gmail.com",
        website: "https://devcauaraphael.github.io/Site_Portfolio/?fbclid=PAZXh0bgNhZW0CMTEAAaeu2zSW75w7H9qJxUyzR4mJK0_mK9bzeo31_wIG8A_ojZxffOpcZBX3tHDnzg_aem_5T4MIU_0H-FDsPvlOfeqhA"
      }
    },
    {
      name: "Otávio Santos",
      role: "Frontend Developer",
      avatar: "👩‍🔧",
      skills: ["SASS", "Dart", "JavaScript", "Flutter", "Git", "Github", "HTML", "CSS", "C#", "MySQL"],
      social: {
        linkedin: "https://br.linkedin.com/in/otavio-santos-andrigo-74bbb7353",
        github: "Https://github.com/Tavinzn",
        email: "Otaviosantosandrigo08@gmail.com",
      }
    },
    {
      name: "Matheus Torsani",
      role: "Mobile Developer",
      avatar: "👩‍🔧",
  skills: ["CSS", "SASS", "JavaScript", "Node.Js", "Dart", "Flutter", "Git", "Github", "Vue.Js", "React", "React Native", "TypeScript", "MongoDB"],
      social: {
        github: "https://github.com/matheustorsani",
        email: "matheustorsani001@hotmail.com ",
        website: "https://urldemetrius.space/"
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
                    <a href={member.social.website} target="_blank" rel="noopener noreferrer" aria-label={`Portfólio de ${member.name}`}>
                      <Globe className="h-4 w-4" />
                    </a>
                  </Button>
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
        </div>
    </section>
  );
};

export default Team;