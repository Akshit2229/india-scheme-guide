import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
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
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back to Home Button */}
        <Link to="/">
          <Button 
            variant="ghost" 
            className="mb-6 text-primary hover:bg-primary/10"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about government schemes? Our support team is here to help you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Our dedicated support team is available to assist you with any questions about government schemes, eligibility criteria, or application processes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Call Us</h3>
                  <p className="text-muted-foreground mb-2">1800-XXX-XXXX (Toll Free)</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for emergency support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email Support</h3>
                  <p className="text-muted-foreground mb-2">support@myscheme.gov.in</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
                  <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Office Address</h3>
                  <p className="text-muted-foreground mb-2">MyScheme Portal Office</p>
                  <p className="text-sm text-muted-foreground">
                    Ministry of Electronics & IT<br />
                    Electronics Niketan, 6 CGO Complex<br />
                    Lodhi Road, New Delhi - 110003
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address *</label>
                  <Input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="Enter your email address"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    placeholder="What is this regarding?"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Please provide details about your inquiry..."
                    className="border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;