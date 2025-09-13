import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-morphism border-b border-ayur-sage/20 shadow-nature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative p-2 bg-nature-gradient rounded-xl group-hover:scale-105 transition-transform animate-leaf-float">
              <Leaf className="w-6 h-6 text-white" />
              <div className="absolute inset-0 bg-nature-gradient rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-ayur-primary font-serif">AyurDiet</h1>
              <p className="text-xs text-ayur-sage -mt-1">Ayurvedic Nutrition</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/') ? 'text-ayur-primary border-b-2 border-ayur-sage pb-1' : 'text-ayur-secondary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/features') ? 'text-ayur-primary border-b-2 border-ayur-sage pb-1' : 'text-ayur-secondary'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/services') ? 'text-ayur-primary border-b-2 border-ayur-sage pb-1' : 'text-ayur-secondary'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/pricing') ? 'text-ayur-primary border-b-2 border-ayur-sage pb-1' : 'text-ayur-secondary'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/about') ? 'text-ayur-primary border-b-2 border-ayur-sage pb-1' : 'text-ayur-secondary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/blog') ? 'text-ayur-primary border-b-2 border-ayur-sage pb-1' : 'text-ayur-secondary'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                isActive('/contact') ? 'text-ayur-primary border-b-2 border-ayur-sage pb-1' : 'text-ayur-secondary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/patient/login" 
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-ayur-secondary hover:text-ayur-primary transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link 
              to="/dietician/signup" 
              className="btn-ayur-primary flex items-center space-x-2 text-sm rounded-full shadow-nature"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-ayur-sage hover:text-ayur-primary hover:bg-ayur-cream/50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-ayur-sage/20 bg-ayur-cream/30 backdrop-blur-sm">
            <Link to="/" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">Home</Link>
            <Link to="/features" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">Features</Link>
            <Link to="/services" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">Services</Link>
            <Link to="/pricing" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">Pricing</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">About</Link>
            <Link to="/blog" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">Blog</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">Contact</Link>
            <div className="pt-4 border-t border-ayur-sage/20">
              <Link to="/patient/login" className="block px-4 py-2 text-sm text-ayur-secondary hover:bg-ayur-sage/10 hover:text-ayur-primary rounded-md">Login</Link>
              <Link to="/dietician/signup" className="block px-4 py-2 text-sm text-white bg-nature-gradient rounded-md mx-4">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;