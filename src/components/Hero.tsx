
import { ArrowRight, Zap, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg section-overlay relative min-h-screen flex items-center justify-center backdrop-blur-sm">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full animate-bounce">
              <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full animate-bounce delay-100">
              <Brain className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full animate-bounce delay-200">
              <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2">
              JouleForge Lab
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Turning Complexity into Clarity
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-300">
            with Data, Energy, and Intelligence
          </p>
          
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in delay-500">
              An independent R&D and software innovation lab working at the intersection of 
              <span className="font-semibold text-blue-600"> energy</span>, 
              <span className="font-semibold text-green-600"> climate</span>, and 
              <span className="font-semibold text-purple-600"> building intelligence</span>. 
              We build tools, simulations, and solutions that transform complex data into actionable insights.
            </p>
          </div>
          
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero;
