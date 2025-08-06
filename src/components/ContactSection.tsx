
import { Mail, Github, Linkedin, Send, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 contact-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate? Let's discuss how we can help transform your 
              complex challenges into clear, actionable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a 
                      href="mailto:admin@jouleforgelab.com" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      admin@jouleforgelab.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/raj-gupta-8b8503113/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a 
                      href="tel:+917696871346" 
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      +91 76968 71346
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a 
                      href="https://wa.me/+917696871346" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-600 rounded-lg">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">GitHub</p>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                      @jouleforgelab
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Let's Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you're looking for research collaboration, custom tool development, 
                  or consultation on sustainability projects, we'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-foreground mb-2">Research Partnerships</h4>
                    <p className="text-sm text-muted-foreground">
                      Collaborate on cutting-edge research in energy and climate
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-900/50 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-foreground mb-2">Custom Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored tools and simulations for your specific needs
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/50 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-foreground mb-2">Consulting Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on sustainability and energy efficiency
                    </p>
                  </div>
                </div>

                <Button className="w-full mt-6 group/btn">
                  <Send className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  Send a Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
