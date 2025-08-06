
import { Cpu, Database, Eye, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Cpu,
      title: "Smart Energy Tools",
      description: "Develop software for climate-responsive building design.",
      color: "blue"
    },
    {
      icon: Database,
      title: "Data-Driven Research",
      description: "Lead original research in climate zoning, passive strategies, net-zero planning, and building simulation workflows.",
      color: "green"
    },
    {
      icon: BarChart,
      title: "Simulation Services",
      description: "Offer specialized simulation support using EQuest, DesignBuilder, EnergyPlus, and COMSOL for industry and academia.",
      color: "purple"
    },
    {
      icon: Eye,
      title: "Visual Intelligence",
      description: "Transform raw datasets into dynamic visualizations, dashboards, and interactive maps for better decision-making.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      purple: "bg-purple-500 text-white",
      orange: "bg-orange-500 text-white"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="services" className="services-bg section-overlay py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We empower professionals, researchers, and policymakers to design for efficiency, 
              sustainability, and impact through innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/50">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-4 shadow-lg`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
