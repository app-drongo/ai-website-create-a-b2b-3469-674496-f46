'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  BarChart3,
  TrendingUp,
  Shield,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleEnterpriseDemo = () => {
    router.push('/');
  };
  const handleConsultation = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    handleEnterpriseDemo();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Enterprise Sales',
      description: 'Speak with our analytics specialists',
      contact: '+1 (555) 847-2638',
      action: 'Schedule Call',
    },
    {
      icon: Mail,
      title: 'Technical Support',
      description: 'Get help with platform integration',
      contact: 'support@acumenanalytics.com',
      action: 'Send Technical Query',
    },
    {
      icon: MessageSquare,
      title: 'Live Demo',
      description: 'See real-time dashboards in action',
      contact: 'Available during business hours',
      action: 'Request Demo',
    },
  ];

  const offices = [
    {
      city: 'San Francisco HQ',
      address: '2847 Data Drive, Analytics District',
      timezone: 'PST (UTC-8)',
      specialization: 'AI & Machine Learning',
    },
    {
      city: 'New York',
      address: '1205 Enterprise Plaza, Financial District',
      timezone: 'EST (UTC-5)',
      specialization: 'Financial Analytics',
    },
    {
      city: 'Austin',
      address: '3401 Innovation Blvd, Tech Corridor',
      timezone: 'CST (UTC-6)',
      specialization: 'Healthcare Analytics',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <BarChart3 className="size-4 mr-2" />
            Enterprise Analytics Support
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Data Strategy?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with our analytics experts to discuss your enterprise needs. Get personalized
            recommendations for real-time dashboards, predictive analytics, and team collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enterprise Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Request Enterprise Consultation
              </CardTitle>
              <CardDescription>
                Tell us about your analytics needs and we'll schedule a personalized demo within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@enterprise.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Fortune 500 Corporation"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Analytics Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your data volume, current analytics challenges, and specific requirements for real-time dashboards or predictive modeling..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button type="submit" className="text-base py-6 group">
                    Request Enterprise Demo
                    <TrendingUp className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleConsultation}
                    className="text-base py-6"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Enterprise Contact Information */}
          <div className="space-y-8">
            {/* Specialized Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Enterprise Support Channels
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                      onClick={handleEnterpriseDemo}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Analytics Centers */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Analytics Centers of Excellence
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {office.specialization}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Support Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Enterprise Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business Hours (All Zones)</span>
                    <span>6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weekend Support</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Critical Issues</span>
                    <span className="text-primary">24/7 Response</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="size-4" />
                    99.9% uptime SLA with dedicated account management
                  </p>
                </div>
                <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    500+ enterprise clients trust Acumen Analytics
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
