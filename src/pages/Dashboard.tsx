import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Dumbbell, 
  Calendar, 
  TrendingUp, 
  UserPlus, 
  Activity,
  DollarSign,
  Building,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const gymStats = {
    totalMembers: 245,
    activeMembers: 198,
    trainers: 12,
    equipment: 45,
    monthlyRevenue: 18500,
    workPlans: 89
  };

  const recentActivities = [
    { id: 1, type: 'member', action: 'New member joined', name: 'Sarah Johnson', time: '2 hours ago' },
    { id: 2, type: 'payment', action: 'Payment received', name: 'Monthly membership', time: '4 hours ago' },
    { id: 3, type: 'trainer', action: 'Work plan created', name: 'HIIT Training Session', time: '6 hours ago' },
    { id: 4, type: 'equipment', action: 'Equipment maintenance', name: 'Treadmill #3', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-xl font-bold text-primary">
                <Dumbbell className="h-6 w-6 mr-2" />
                FlexForge
              </Link>
              <Badge variant="secondary">
                <Building className="h-3 w-3 mr-1" />
                PowerFit Gym
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening at your gym today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">{gymStats.totalMembers}</div>
                <Users className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                <span className="text-success">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-secondary">{gymStats.activeMembers}</div>
                <Activity className="h-5 w-5 text-secondary" />
              </div>
              <Progress value={(gymStats.activeMembers / gymStats.totalMembers) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-accent">${gymStats.monthlyRevenue.toLocaleString()}</div>
                <DollarSign className="h-5 w-5 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                <span className="text-success">+8%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Work Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-success">{gymStats.workPlans}</div>
                <Calendar className="h-5 w-5 text-success" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Active this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Manage your gym operations efficiently
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/members">
                  <Button variant="outline" className="w-full h-20 flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    <span>Members</span>
                  </Button>
                </Link>
                
                <Link to="/trainers">
                  <Button variant="outline" className="w-full h-20 flex-col">
                    <UserPlus className="h-6 w-6 mb-2" />
                    <span>Trainers</span>
                  </Button>
                </Link>
                
                <Link to="/equipment">
                  <Button variant="outline" className="w-full h-20 flex-col">
                    <Dumbbell className="h-6 w-6 mb-2" />
                    <span>Equipment</span>
                  </Button>
                </Link>
                
                <Link to="/workplans">
                  <Button variant="outline" className="w-full h-20 flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span>Work Plans</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest updates from your gym
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'member' ? 'bg-primary/10 text-primary' :
                      activity.type === 'payment' ? 'bg-success/10 text-success' :
                      activity.type === 'trainer' ? 'bg-accent/10 text-accent' :
                      'bg-secondary/10 text-secondary'
                    }`}>
                      {activity.type === 'member' && <Users className="h-4 w-4" />}
                      {activity.type === 'payment' && <DollarSign className="h-4 w-4" />}
                      {activity.type === 'trainer' && <Calendar className="h-4 w-4" />}
                      {activity.type === 'equipment' && <Dumbbell className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;