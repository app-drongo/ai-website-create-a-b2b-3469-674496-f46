'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Shield,
  Users,
  Database,
  BarChart3,
  Brain,
  Clock,
  Target,
  Zap,
} from 'lucide-react';

export default function Features() {
  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    window.location.href = '/demo';
  };

  const features = [
    {
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description:
        'Monitor KPIs and business metrics with live data visualization that updates every second across all your data sources.',
      badge: 'Live Data',
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description:
        'AI-powered forecasting models that predict trends, identify opportunities, and prevent issues before they impact your business.',
      badge: 'AI-Powered',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Share insights, create collaborative workspaces, and enable data-driven decision making across your entire organization.',
      badge: 'Collaboration',
    },
    {
      icon: Database,
      title: 'Enterprise Data Integration',
      description:
        'Connect to 200+ data sources including Salesforce, SAP, Oracle, and custom APIs with zero-code integration.',
      badge: 'Integration',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 Type II certified with role-based access control, data encryption, and compliance with GDPR and HIPAA.',
      badge: 'Security',
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics Engine',
      description:
        'Statistical modeling, cohort analysis, and custom metrics calculation with sub-second query performance.',
      badge: 'Performance',
    },
    {
      icon: Clock,
      title: 'Automated Reporting',
      description:
        'Schedule and distribute executive reports, alerts, and insights automatically to stakeholders via email or Slack.',
      badge: 'Automation',
    },
    {
      icon: Target,
      title: 'Goal Tracking & KPIs',
      description:
        'Set business objectives, track progress against targets, and get intelligent recommendations to hit your goals.',
      badge: 'Strategy',
    },
    {
      icon: Zap,
      title: 'Self-Service Analytics',
      description:
        'Empower business users to create their own reports and dashboards without requiring technical expertise.',
      badge: 'Self-Service',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Enterprise Analytics Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Data Into
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Strategic Advantage
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Acumen Analytics delivers enterprise-grade business intelligence with real-time
            insights, predictive modeling, and collaborative analytics that scale with your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              Start 30-Day Free Trial
            </button>
            <button
              onClick={handleViewDemo}
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors text-lg"
            >
              Watch Live Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10TB+</div>
              <div className="text-muted-foreground">Data Processed Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-muted-foreground">Faster Decision Making</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Unlock Your Data's Potential?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join Fortune 500 companies using Acumen Analytics to drive data-driven decisions and
            accelerate business growth with enterprise-grade analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => (window.location.href = '/contact')}
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
