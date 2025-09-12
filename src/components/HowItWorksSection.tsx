import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, FileText, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
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
  );
};

export default HowItWorksSection;