import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, GraduationCap, Award, Target } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 founder-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading innovation in sustainable technology and data-driven solutions for a better tomorrow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/2cb86b0c-d950-44ee-b846-cae4753faea1.png"
                  alt="Raj Gupta - Founder of JouleForge Lab"
                  className="w-80 h-80 object-cover rounded-full mx-auto lg:mx-0 shadow-2xl border-4 border-primary/20"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Raj Gupta</h3>
                <p className="text-xl text-primary font-semibold mb-4">Founder & CEO, JouleForge Lab</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Raj is a Research scholar passionate about sustainable technology and climate solutions. 
                  With deep expertise in energy modeling, building performance analysis, and data science, 
                  he founded JouleForge Lab to bridge the gap between academic research and practical applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  His vision is to democratize access to advanced climate and energy analytics, making 
                  complex environmental data actionable for professionals, researchers, and policymakers worldwide.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid gap-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Research Scholar</h4>
                    <p className="text-sm text-muted-foreground"></p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Industry Expert</h4>
                    <p className="text-sm text-muted-foreground">Energy modeling & building performance analysis</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/50 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visionary Leader</h4>
                    <p className="text-sm text-muted-foreground">Democratizing climate & energy analytics</p>
                  </div>
                </div>
              </div>

              {/* Connect Button */}
              <div className="pt-6">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a 
                    href="https://www.linkedin.com/in/raj-gupta-8b8503113/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;