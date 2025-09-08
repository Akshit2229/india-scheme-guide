import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, FileText, Users, Calendar, Building, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import schemesData from "@/data/schemes.json";

const SchemeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const scheme = schemesData.schemes.find(s => s.id === id);

  if (!scheme) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Scheme Not Found</h1>
          <p className="text-muted-foreground mb-4">The scheme you're looking for doesn't exist.</p>
          <Link to="/schemes">
            <Button>Browse All Schemes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleApplyNow = () => {
    toast({
      title: "Application Started",
      description: `Application process initiated for ${scheme.title}. You will be redirected to the official portal.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Schemes
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-white">{scheme.category}</Badge>
                  <Badge variant="outline">{scheme.status}</Badge>
                  <Badge variant="secondary">Launched {scheme.launchYear}</Badge>
                </div>
                <CardTitle className="text-2xl lg:text-3xl text-primary">
                  {scheme.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {scheme.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {scheme.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {scheme.eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {scheme.documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {scheme.applicationProcess}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Building className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Department</p>
                      <p className="text-sm text-muted-foreground">{scheme.department}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Launch Year</p>
                      <p className="text-sm text-muted-foreground">{scheme.launchYear}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Benefits</p>
                      <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <Button 
                  onClick={handleApplyNow}
                  className="w-full bg-primary hover:bg-primary-hover"
                  size="lg"
                >
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>

                <Link to="/schemes">
                  <Button variant="outline" className="w-full">
                    Browse More Schemes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Related Schemes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">Related Schemes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schemesData.schemes
                    .filter(s => s.category === scheme.category && s.id !== scheme.id)
                    .slice(0, 3)
                    .map((relatedScheme) => (
                      <Link 
                        key={relatedScheme.id} 
                        to={`/scheme/${relatedScheme.id}`}
                        className="block"
                      >
                        <div className="p-3 border border-primary/10 rounded-lg hover:bg-primary/5 transition-colors">
                          <p className="text-sm font-medium text-primary line-clamp-2">
                            {relatedScheme.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {relatedScheme.category}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetails;