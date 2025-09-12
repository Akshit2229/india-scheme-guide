import { Card, CardContent } from "@/components/ui/card";

const CategoriesSection = () => {
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

  return (
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
  );
};

export default CategoriesSection;