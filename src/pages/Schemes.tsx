import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ArrowRight } from "lucide-react";
import schemesData from "@/data/schemes.json";

const Schemes = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [schemes, setSchemes] = useState(schemesData.schemes);
  const [filteredSchemes, setFilteredSchemes] = useState(schemesData.schemes);
  const [searchTerm, setSearchTerm] = useState(searchParam || "");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");

  const categories = [
    "Agriculture", "Education", "Healthcare", "Women & Child", 
    "Employment", "Housing", "Senior Citizens", "Disability"
  ];

  useEffect(() => {
    filterSchemes();
  }, [searchTerm, selectedCategory]);

  const filterSchemes = () => {
    let filtered = schemes;

    if (searchTerm) {
      filtered = filtered.filter(scheme =>
        scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(scheme => scheme.category === selectedCategory);
    }

    setFilteredSchemes(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Government Schemes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and explore various government schemes and benefits available for citizens
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search schemes by name, category, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredSchemes.length} scheme{filteredSchemes.length !== 1 ? 's' : ''}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-lg transition-shadow border-primary/10">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-primary">
                    {scheme.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {scheme.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-primary line-clamp-2">
                  {scheme.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {scheme.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Department:</span> {scheme.department}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Launched:</span> {scheme.launchYear}
                  </div>
                  <Link to={`/scheme/${scheme.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary-hover group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-medium mb-2">No schemes found</h3>
              <p>Try adjusting your search criteria or browse all schemes</p>
            </div>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schemes;