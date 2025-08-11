import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const testimonials = [
    {
      name: "João Silva",
      company: "TechCorp Brasil",
      role: "CEO",
      content: "A LoopStack transformou completamente nossa operação. O sistema desenvolvido aumentou nossa produtividade em 40% e reduziu custos operacionais significativamente.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Mariana Souza",
      company: "E-commerce Plus",
      role: "Diretora de TI",
      content: "Profissionais extremamente competentes e comprometidos. Entregaram um e-commerce robusto que superou todas nossas expectativas em performance e usabilidade.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Roberto Lima",
      company: "Logística Express",
      role: "Gerente de Operações",
      content: "O app de delivery desenvolvido pela LoopStack revolucionou nossa operação. Interface intuitiva e funcionalidades que realmente fazem a diferença no dia a dia.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "E-commerce Plus", logo: "🛍️" },
    { name: "Logística Express", logo: "🚚" },
    { name: "FinTech Solutions", logo: "💳" },
    { name: "HealthCare Pro", logo: "🏥" },
    { name: "EduTech", logo: "📚" },
    { name: "AgriTech", logo: "🌱" },
    { name: "StartupX", logo: "🚀" }
  ];

  return (
    <section id="clientes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas que confiam na LoopStack para transformar seus processos e impulsionar seus resultados.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Empresas que confiam em nós
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{client.logo}</div>
                <span className="text-xs text-muted-foreground text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "30+", label: "Clientes Ativos" },
            { number: "5+", label: "Projetos Entregues" },
            { number: "98%", label: "Satisfação" },
            { number: "24/7", label: "Suporte" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;