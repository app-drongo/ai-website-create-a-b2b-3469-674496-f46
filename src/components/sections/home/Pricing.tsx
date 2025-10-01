'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, BarChart3, Users, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalTrial = () => {
    router.push('/');
  };
  const handleEnterpriseSales = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Analytics Starter',
      description: 'Essential business intelligence for growing teams',
      price: 'Free',
      period: '',
      badge: null,
      icon: <BarChart3 className="size-6 text-primary" />,
      features: [
        'Up to 5 data sources',
        'Pre-built dashboard templates',
        'Basic data visualization',
        '10GB data storage',
        'Standard reporting',
        'Email support',
      ],
      cta: 'Start Analytics Journey',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Enterprise Pro',
      description: 'Advanced analytics with AI-powered insights for scaling businesses',
      price: '$149',
      period: '/month per user',
      badge: 'Most Popular',
      icon: <Brain className="size-6 text-primary" />,
      features: [
        'Unlimited data sources & connectors',
        'Real-time dashboard automation',
        'Predictive analytics engine',
        '500GB secure data warehouse',
        'Advanced ML algorithms',
        'Custom domain & white-labeling',
        'Team collaboration workspace',
        'REST API & webhook integrations',
      ],
      cta: 'Start 30-Day Enterprise Trial',
      popular: true,
      action: handleProfessionalTrial,
    },
    {
      name: 'Enterprise Scale',
      description: 'Complete analytics platform for large organizations',
      price: 'Custom',
      period: '',
      badge: 'Enterprise Ready',
      icon: <Users className="size-6 text-primary" />,
      features: [
        'Everything in Enterprise Pro',
        'Unlimited data storage & processing',
        '24/7 dedicated success manager',
        'Custom AI model development',
        'Enterprise-grade security & compliance',
        '99.99% uptime SLA guarantee',
        'On-premise deployment options',
        'Executive training & onboarding',
      ],
      cta: 'Schedule Enterprise Demo',
      popular: false,
      action: handleEnterpriseSales,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Analytics Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Data Intelligence
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Investment
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Transform your business decisions with enterprise-grade analytics. Transparent pricing,
            no data limits, complete ROI visibility.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly Billing
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Contract
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <div className="flex justify-center mb-4">{plan.icon}</div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1 text-sm">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Enterprise Pro' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day enterprise trial • Full feature access • No setup fees
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Data Strategy?</h3>
          <p className="text-muted-foreground mb-6">
            Join 500+ enterprises already using Acumen Analytics to drive data-driven decisions. Our
            analytics experts will design a custom implementation roadmap for your organization.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            Schedule Strategic Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
