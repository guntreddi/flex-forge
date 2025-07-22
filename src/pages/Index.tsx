import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Users, Calendar, BarChart3, Shield, Zap } from 'lucide-react';
import gymHero from '@/assets/gym-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gymHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent/80 to-primary/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              FlexForge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              The Ultimate Gym Management Platform
            </p>
            <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
              Streamline your gym operations, manage members, trainers, and equipment with our comprehensive management system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Zap className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Everything You Need to Manage Your Gym
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From member management to equipment tracking, FlexForge provides all the tools you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Member Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Effortlessly manage member registrations, plans, and track their fitness journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Trainer & Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Manage your trainers' schedules and keep track of all your gym equipment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Work Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Create and schedule workout plans for your members with our intuitive system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-xl">Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Get insights into your gym's performance with detailed analytics and reports.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-warning" />
                </div>
                <CardTitle className="text-xl">Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Secure payment processing with Stripe integration for memberships and plans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Multi-Gym Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Manage multiple gym locations from a single, unified dashboard.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Gym Management?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of gym owners who trust FlexForge to streamline their operations.
            </p>
            <Link to="/auth">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Dumbbell className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">FlexForge</span>
          </div>
          <p className="text-background/80">
            © 2024 FlexForge. All rights reserved. Built with ❤️ for gym owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;