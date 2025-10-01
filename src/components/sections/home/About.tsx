'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  BarChart3,
  Brain,
  Shield,
  Clock,
  Database,
  Zap,
} from 'lucide-react';

export default function About() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/');
  };

  const values = [
    {
      icon: Target,
      title: 'Data-Driven Excellence',
      description:
        'We transform complex enterprise data into actionable insights that drive strategic decision-making and measurable business outcomes.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Innovation',
      description:
        'Our advanced machine learning algorithms and predictive analytics capabilities help enterprises stay ahead of market trends and opportunities.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security First',
      description:
        'SOC 2, GDPR, and HIPAA compliant infrastructure ensures your sensitive business data remains protected at the highest industry standards.',
    },
    {
      icon: Users,
      title: 'Collaborative Intelligence',
      description:
        'Built for enterprise teams, our platform enables seamless collaboration across departments with real-time data sharing and insights.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Founded', icon: Award },
    { value: '500+', label: 'Enterprise Clients', icon: Users },
    { value: '99.9%', label: 'Platform Uptime', icon: TrendingUp },
    { value: '10TB+', label: 'Daily Data Processing', icon: Database },
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'SC',
      bio: 'Former McKinsey Partner and MIT PhD. 20+ years in enterprise analytics and business intelligence.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'MR',
      bio: 'Ex-Google Principal Engineer. Expert in distributed systems and real-time data processing at scale.',
    },
    {
      name: 'Jennifer Park',
      role: 'VP of Product Strategy',
      image: 'JP',
      bio: 'Former Tableau product leader. Specializes in enterprise data visualization and user experience.',
    },
    {
      name: 'Robert Kim',
      role: 'Chief Data Scientist',
      image: 'RK',
      bio: 'PhD Stanford AI Lab. Pioneer in predictive analytics and machine learning for enterprise applications.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Acumen Analytics
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pioneering Enterprise
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Analytics Intelligence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're the trusted analytics partner for Fortune 500 companies, transforming enterprise
            data into strategic competitive advantages through advanced AI and real-time business
            intelligence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Enterprise Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by former McKinsey consultants and Google engineers, Acumen
                Analytics emerged from a critical need: enterprise leaders were drowning in data but
                starving for actionable insights.
              </p>
              <p>
                After witnessing countless Fortune 500 companies struggle with fragmented analytics
                tools and delayed reporting cycles, we built the first truly integrated enterprise
                analytics platform that delivers real-time predictive insights at scale.
              </p>
              <p>
                Today, we process over 10TB of enterprise data daily for 500+ clients worldwide,
                enabling data-driven decisions that drive billions in business value.
              </p>
            </div>
            <Button onClick={handleNavigation} className="group">
              Explore Our Enterprise Solutions
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Enterprise analytics should empower strategic decisions, not overwhelm
                      decision-makers with complexity."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Dr. Sarah Chen, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Enterprise Values</h3>
            <p className="text-muted-foreground">
              The principles that drive our commitment to enterprise analytics excellence and client
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Executive Leadership</h3>
            <p className="text-muted-foreground">
              Industry veterans and thought leaders driving enterprise analytics innovation at
              global scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leadership.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleNavigation} variant="outline" className="group">
              Meet Our Full Leadership Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Enterprise Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Acumen Analytics transformed our decision-making process. Real-time dashboards and
                predictive insights helped us identify market opportunities 6 months ahead of
                competitors, resulting in $50M additional revenue."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MT
                </div>
                <div className="text-left">
                  <div className="font-semibold">Michael Thompson</div>
                  <div className="text-sm text-muted-foreground">
                    Chief Strategy Officer, Global Manufacturing Corp
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="size-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Transform Your Enterprise Analytics?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join 500+ enterprise clients who trust Acumen Analytics to deliver real-time
                  insights, predictive analytics, and collaborative intelligence at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleNavigation} size="lg" className="group">
                    Schedule Strategic Demo
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button onClick={handleNavigation} variant="outline" size="lg">
                    Start 30-Day Enterprise Trial
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
