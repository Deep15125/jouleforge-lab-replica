
import { MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "India's District Level Climate Map",
      description: "Comprehensive climate classification mapping for all districts across India, providing detailed insights for regional planning and policy making.",
      tags: ["Climate Analysis", "GIS", "Data Visualization"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects-bg section-overlay py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our impactful research and development projects that are 
              driving sustainable innovation across industries.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/50 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      <MapPin className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="group/btn">
                    View Project 
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
