
import { Calculator, Palette, TrendingUp, Map, Thermometer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ToolsSection = () => {
  const handleEvapCalDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1fNIr46rP7dCHmYSizbd4AUA3lzTGXadI';
    link.download = 'EvapCal-Tool.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const tools = [
    {
      icon: Thermometer,
      name: "EvapCal Tool",
      description: "Advanced evapotranspiration calculations for climate analysis",
      isDownloadable: true,
      onClick: handleEvapCalDownload
    },
    {
      icon: Calculator,
      name: "Passive Design Consultant",
      description: "Optimize building design for energy efficiency"
    },
    {
      icon: Calculator,
      name: "Psychrometric Calculator",
      description: "Precise psychrometric calculations for HVAC design"
    },
    {
      icon: Palette,
      name: "Psychrometric Chart Creator",
      description: "Generate custom psychrometric charts for analysis"
    },
    {
      icon: Map,
      name: "Interactive Indian Weather Analysis Tool",
      description: "Comprehensive weather data visualization for India"
    }
  ];

  return (
    <section id="tools" className="tools-bg section-overlay py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade tools designed to simplify complex calculations and 
              provide actionable insights for sustainable design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/50 border-primary/20">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-lg">
                    <tool.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={tool.onClick}
                  >
                    {tool.isDownloadable ? 'Download Tool' : 'Learn More'}
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

export default ToolsSection;
