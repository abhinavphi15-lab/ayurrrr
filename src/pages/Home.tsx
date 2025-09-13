import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Users, Database, Brain, TrendingUp, Shield, 
  Star, ArrowRight, CheckCircle, Play, Download, UserCheck,
  Leaf, Heart, Target, Award
} from 'lucide-react';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-teal-500 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 px-4 sm:px-6 lg:px-8 leaf-decoration">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-ayur-sage/20 text-ayur-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  <span>India's First Ayurvedic Nutrition Platform</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ayur-primary leading-tight font-serif">
                  Ayurveda + Nutrition,{' '}
                  <span className="bg-nature-gradient bg-clip-text text-transparent">
                    Digitally Simplified
                  </span>
                </h1>
                <p className="text-xl text-ayur-secondary leading-relaxed">
                  Transform your practice with AI-powered Ayurvedic nutrition planning. 
                  Complete patient management, dosha analysis, and personalized diet charts 
                  backed by ancient wisdom and modern technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/dietician/signup" 
                  className="btn-ayur-primary flex items-center justify-center space-x-2 px-8 py-4 text-lg shadow-nature-lg"
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Get Started (Dieticians)</span>
                </Link>
                <Link 
                  to="/patient/signup" 
                  className="btn-ayur-secondary flex items-center justify-center space-x-2 px-8 py-4 text-lg shadow-nature-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App (Patients)</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-ayur-primary">500+</div>
                  <div className="text-sm text-ayur-secondary">Foods Digitized</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ayur-primary">1000+</div>
                  <div className="text-sm text-ayur-secondary">Patients Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ayur-primary">95%</div>
                  <div className="text-sm text-ayur-secondary">Dosha Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="relative animate-scale-in">
              <div className="ayur-card nature-shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-nature-gradient rounded-full flex items-center justify-center animate-leaf-float">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ayur-primary font-serif">AyurDiet Dashboard</h3>
                        <p className="text-sm text-ayur-sage">Dietician Portal</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-ayur-terracotta rounded-full"></div>
                      <div className="w-3 h-3 bg-ayur-gold rounded-full"></div>
                      <div className="w-3 h-3 bg-ayur-sage rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-ayur-sage/10 p-4 rounded-lg border border-ayur-sage/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-ayur-secondary">Active Patients</p>
                          <p className="text-2xl font-bold text-ayur-primary">24</p>
                        </div>
                        <Users className="w-8 h-8 text-ayur-sage" />
                      </div>
                    </div>
                    <div className="bg-ayur-accent/10 p-4 rounded-lg border border-ayur-accent/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-ayur-secondary">Compliance</p>
                          <p className="text-2xl font-bold text-ayur-accent">89%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-ayur-accent" />
                      </div>
                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="bg-gradient-to-r from-ayur-gold/10 to-ayur-terracotta/10 p-4 rounded-lg border border-ayur-gold/20">
                    <div className="flex items-start space-x-3">
                      <Brain className="w-5 h-5 text-ayur-gold mt-1" />
                      <div>
                        <p className="text-sm font-medium text-ayur-primary">AI Insight</p>
                        <p className="text-sm text-ayur-secondary mt-1">
                          Patients with Vata imbalance show 23% better results with warm food recommendations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-ayur-primary">Recent Activity</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 bg-ayur-cream/50 rounded-lg">
                        <div className="w-2 h-2 bg-ayur-sage rounded-full"></div>
                        <span className="text-sm text-ayur-secondary">Diet plan sent to Priya Sharma</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-ayur-cream/50 rounded-lg">
                        <div className="w-2 h-2 bg-ayur-accent rounded-full"></div>
                        <span className="text-sm text-ayur-secondary">New patient consultation scheduled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ayur-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ayur-primary font-serif">
              Why Choose AyurDiet?
            </h2>
            <p className="text-xl text-ayur-secondary max-w-2xl mx-auto">
              Revolutionary features that bridge ancient Ayurvedic wisdom with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Ayurvedic Food Database",
                description: "India's first digital database with 500+ foods mapped with dosha properties, rasa, virya, and vipaka",
                color: "bg-nature-gradient"
              },
              {
                icon: Brain,
                title: "AI Diet Personalization",
                description: "Smart algorithms consider prakriti, lifestyle, symptoms, and seasonal variations for perfect meal plans",
                color: "bg-earth-gradient"
              },
              {
                icon: Shield,
                title: "Validation Engine",
                description: "Track diet compliance against symptom improvement with scientific validation and insights",
                color: "bg-sage-gradient"
              },
              {
                icon: Heart,
                title: "Holistic Care Team",
                description: "Connect with dieticians, yoga trainers, fitness coaches, and homeopathy doctors in one platform",
                color: "bg-gradient-to-br from-ayur-gold to-ayur-terracotta"
              }
            ].map((feature, index) => (
              <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="ayur-card nature-shadow-lg">
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-leaf-float`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-ayur-primary mb-3 font-serif">{feature.title}</h3>
                  <p className="text-ayur-secondary leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ayur-primary font-serif">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-ayur-secondary">
              See what dieticians and patients are saying about AyurDiet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "AyurDiet has transformed my practice. The AI recommendations are incredibly accurate, and patients love the personalized approach.",
                name: "Dr. Meera Krishnan",
                title: "Ayurvedic Dietician, Mumbai",
                type: "Dietician"
              },
              {
                quote: "Finally, a platform that understands Ayurveda! The food database is comprehensive and the dosha analysis is spot-on.",
                name: "Dr. Rajesh Gupta",
                title: "BAMS, Delhi",
                type: "Dietician"
              },
              {
                quote: "The app makes it so easy to follow my diet plan. I can see my progress and chat with my dietician anytime. Highly recommend!",
                name: "Priya Sharma",
                title: "Patient, Bangalore",
                type: "Patient"
              }
            ].map((testimonial, index) => (
              <div key={index} className="ayur-card nature-shadow-lg animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-ayur-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-ayur-secondary mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-nature-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-ayur-primary">{testimonial.name}</p>
                    <p className="text-sm text-ayur-secondary">{testimonial.title}</p>
                    <div className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                      testimonial.type === 'Dietician' 
                        ? 'bg-ayur-sage/20 text-ayur-primary' 
                        : 'bg-ayur-accent/20 text-ayur-accent'
                    }`}>
                      {testimonial.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nature-gradient">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Join hundreds of Ayurvedic practitioners who are already using AyurDiet to provide 
            better patient care and grow their practice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/dietician/signup" 
              className="inline-flex items-center space-x-2 bg-white text-ayur-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-ayur-cream transition-all transform hover:scale-105 shadow-nature-xl"
            >
              <UserCheck className="w-5 h-5" />
              <span>Start Free Trial</span>
            </Link>
            <Link 
              to="/features" 
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;