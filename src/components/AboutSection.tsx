
import { Target, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 about-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A research-rooted, tech-forward lab initiated by a PhD scholar, under expert 
              academic mentorship, on a mission to simplify sustainability and forge data into impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From advanced climate classification and energy modelling to BIPV façade 
                simulations and energy analysis tools, we bridge the gap between environmental 
                complexity and human clarity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our work spans research-grade analytics, intuitive SaaS platforms, and real-world 
                consultancy, rooted in science, powered by code, and driven by purpose.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Purpose-Driven</h4>
                  <p className="text-muted-foreground">
                    Every solution we build aims to make sustainability more accessible and actionable.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Collaborative</h4>
                  <p className="text-muted-foreground">
                    We work with professionals, researchers, and policymakers to maximize impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Innovation-First</h4>
                  <p className="text-muted-foreground">
                    We combine cutting-edge research with practical software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
