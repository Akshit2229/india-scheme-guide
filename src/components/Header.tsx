import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, LogIn, UserPlus, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/schemes?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-gov-blue text-white py-1">
        <div className="container mx-auto px-4 text-sm">
          <div className="flex justify-between items-center">
            <span>Government of India | भारत सरकार</span>
            <div className="flex items-center gap-4">
              <button className="text-xs hover:underline">हिंदी</button>
              <button className="text-xs hover:underline">English</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Government Logo" className="h-12" />
            <div>
              <h1 className="text-2xl font-bold text-primary">
                my<span className="text-gov-orange">Scheme</span>
              </h1>
              <p className="text-xs text-muted-foreground">
                Government Schemes Portal
              </p>
            </div>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative flex-1">
              <Input
                placeholder="Enter scheme name to search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border-primary/20 focus:border-primary"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </button>
            </form>
          </div>

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={signOut} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm" className="gap-2">
                    <UserPlus className="h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="space-y-4">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  placeholder="Enter scheme name to search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </button>
              </form>
              
              {/* Auth buttons - Mobile */}
              <div className="flex flex-col gap-2 pt-2">
                {user ? (
                  <>
                    <Link to="/profile" className="w-full">
                      <Button variant="ghost" size="sm" className="gap-2 w-full justify-start">
                        <User className="h-4 w-4" />
                        Profile
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" onClick={signOut} className="gap-2 w-full justify-start">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="w-full">
                      <Button variant="ghost" size="sm" className="gap-2 w-full justify-start">
                        <LogIn className="h-4 w-4" />
                        Login
                      </Button>
                    </Link>
                    <Link to="/register" className="w-full">
                      <Button variant="default" size="sm" className="gap-2 w-full justify-start">
                        <UserPlus className="h-4 w-4" />
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;