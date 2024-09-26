"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from '@/components/ui/chart'
import { Activity, Shield, AlertTriangle } from 'lucide-react'

export function CyberDashboardComponent() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="matrix-bg"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-blue-500">
          <div className="text-2xl font-bold text-blue-500">
            <span className="text-green-400">Cyber</span>Shield
          </div>
          <nav>
            <Button
              variant="ghost"
              className="text-blue-500 hover:text-green-400 hover:bg-blue-900/50 transition-colors mr-2"
              onClick={() => setActiveTab('home')}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="text-blue-500 hover:text-green-400 hover:bg-blue-900/50 transition-colors mr-2"
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </Button>
            <Button
              variant="ghost"
              className="text-blue-500 hover:text-green-400 hover:bg-blue-900/50 transition-colors"
              onClick={() => setActiveTab('incidents')}
            >
              Cyber Incident Portal
            </Button>
          </nav>
        </header>

        {/* Main content area */}
        <main className="p-4">
          <Tabs value={activeTab} className="space-y-4">
            <TabsContent value="home" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
                    <Shield className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Incidents Resolved</CardTitle>
                    <Activity className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">132</div>
                    <p className="text-xs text-muted-foreground">+4% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">-2% from last month</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Incident Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* <BarChart
                      data={[
                        { name: 'Malware', value: 45 },
                        { name: 'Phishing', value: 30 },
                        { name: 'DDoS', value: 15 },
                        { name: 'Data Breach', value: 10 },
                      ]}
                      index="name"
                      categories={['value']}
                      colors={['#22c55e']}
                      valueFormatter={(value) => `${value}%`}
                      className="aspect-[4/3]"
                    /> */}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Incident Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* <LineChart
                      data={[
                        { date: '2023-01-01', incidents: 10 },
                        { date: '2023-02-01', incidents: 20 },
                        { date: '2023-03-01', incidents: 15 },
                        { date: '2023-04-01', incidents: 25 },
                        { date: '2023-05-01', incidents: 30 },
                      ]}
                      index="date"
                      categories={['incidents']}
                      colors={['#3b82f6']}
                      valueFormatter={(value) => `${value} incidents`}
                      className="aspect-[4/3]"
                    /> */}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Detailed analytics information would go here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="incidents">
              <Card>
                <CardHeader>
                  <CardTitle>Cyber Incident Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cyber incident reporting and management interface would go here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}