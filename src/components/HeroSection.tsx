import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/schemes?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/schemes');
    }
  };
  return (
    <section className="relative bg-gradient-to-r from-primary via-primary-hover to-success min-h-[500px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white/25 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Find the Right
                <span className="block text-gov-orange">Government Schemes</span>
                <span className="block">For You</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mt-4">
                Discover 3810+ government schemes and subsidies designed to empower Indian citizens
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">#GOVERNMENTSCHEMES</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">#SCHEMESFORYOU</span>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleHeroSearch} className="bg-white rounded-lg p-2 flex gap-2 max-w-md">
              <div className="relative flex-1">
                <Input
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-0 bg-transparent focus:ring-0 text-gray-700"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button type="submit" className="bg-primary hover:bg-primary-hover">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">3810+</div>
                <div className="text-sm text-white/80">Total Schemes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">550+</div>
                <div className="text-sm text-white/80">Central Schemes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">3260+</div>
                <div className="text-sm text-white/80">State Schemes</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-1">
              <img
                src={heroBanner}
                alt="Government Schemes for Indian Families"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gov-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;