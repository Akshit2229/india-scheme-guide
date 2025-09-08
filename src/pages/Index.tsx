import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, MapPin, CheckCircle, ArrowRight, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setContactForm({ name: "", phone: "", email: "", message: "" });
  };
  const categories = [
    { name: "Agriculture", count: 245, icon: "🌾" },
    { name: "Education", count: 189, icon: "📚" },
    { name: "Healthcare", count: 156, icon: "🏥" },
    { name: "Women & Child", count: 143, icon: "👶" },
    { name: "Employment", count: 98, icon: "💼" },
    { name: "Housing", count: 87, icon: "🏠" },
    { name: "Senior Citizens", count: 76, icon: "👴" },
    { name: "Disability", count: 65, icon: "♿" }
  ];

  const steps = [
    {
      step: "01",
      title: "Enter Details",
      description: "Provide your basic information and eligibility criteria",
      icon: <Users className="h-8 w-8" />
    },
    {
      step: "02", 
      title: "Find Schemes",
      description: "Get personalized scheme recommendations based on your profile",
      icon: <FileText className="h-8 w-8" />
    },
    {
      step: "03",
      title: "Apply Online",
      description: "Submit applications directly through our portal",
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Easy steps to apply for Government Schemes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative text-center group hover:shadow-lg transition-shadow border-primary/10">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <Badge variant="secondary" className="mx-auto w-fit text-primary font-bold">
                    Step {step.step}
                  </Badge>
                  <CardTitle className="text-xl text-primary">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-primary/30" />
                )}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => window.location.href = '/schemes'}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 text-lg"
            >
              Find Schemes For You
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Browse by Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore schemes across different sectors and departments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-md transition-shadow cursor-pointer group border-primary/10"
                onClick={() => window.location.href = `/schemes?category=${encodeURIComponent(category.name)}`}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-primary group-hover:text-primary-hover mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} schemes
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Need Help?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our support team is here to help you navigate through government schemes and benefits.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-muted-foreground">1800-XXX-XXXX (Toll Free)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-muted-foreground">support@myscheme.gov.in</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-muted-foreground">Mon - Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-primary">Quick Contact</CardTitle>
                <CardDescription>Send us a message and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Name *</label>
                      <input 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="w-full p-2 border border-primary/20 rounded focus:outline-none focus:border-primary" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Phone</label>
                      <input 
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        className="w-full p-2 border border-primary/20 rounded focus:outline-none focus:border-primary" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full p-2 border border-primary/20 rounded focus:outline-none focus:border-primary" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Message *</label>
                    <textarea 
                      rows={4} 
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="w-full p-2 border border-primary/20 rounded focus:outline-none focus:border-primary resize-none" 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gov-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MyScheme</h3>
              <p className="text-white/80 text-sm">
                Government of India's official portal for accessing and applying to various government schemes and benefits.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/schemes" className="hover:text-white">Find Schemes</a></li>
                <li><a href="/#how-it-works" className="hover:text-white">How it Works</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white">Agriculture</a></li>
                <li><a href="#" className="hover:text-white">Education</a></li>
                <li><a href="#" className="hover:text-white">Healthcare</a></li>
                <li><a href="#" className="hover:text-white">Employment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Accessibility</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
            <p>&copy; 2024 Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
