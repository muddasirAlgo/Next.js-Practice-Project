
import CardMetric from '@/components/Dashboard/main/CardMetric'
import DonutChart from '@/components/Dashboard/main/DonutChart'
import { Folder, ShoppingCart, LineChart, Users, ShoppingBag } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import dynamic from 'next/dynamic'

const BarSummaryChart = dynamic(() => import('@/components/Dashboard/main/BarSummaryChart'), {
  ssr: false,
})

export default function DashboardPage() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {/* Sales + Volume */}
      <CardMetric
        icon={<LineChart className="h-5 w-5 text-primaryColor" />}
        title="Sales"
        subtitle="Volume"
        stat="₦34.00"
        secondaryStat="0"
        growth="+22.00%"
        time="This Week"
      />

      {/* Customers */}
      <CardMetric
        icon={<Users className="h-5 w-5 text-orange-500" />}
        title="Customers"
        subtitle="Active"
        stat="0"
        secondaryStat="0"
        growth="+0.00%"
        time="This Week "
      />

      {/* Products */}
      <CardMetric
        icon={<ShoppingBag className="h-5 w-5 text-orange-500" />}
        title="All Orders"
        subtitle="Delivered"
        stat="0"
        secondaryStat="0"
        growth="+0.00%"
        time="This Week"
      />

     
        {/* Donut Chart - Marketing */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 max-h-[500px]">
          <div className="flex justify-between items-center">
            <h2 className="font-light text-[16px]">Marketing</h2>
            <span className="text-[12px] text-gray-400 font-light font-poppins">This Week</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-primaryColor font-light font-poppins">● Acquisition</span>
            <span className="text-indigo-300 font-light font-poppins">● Purchase</span>
            <span className="text-yellow-400 font-light font-poppins">● Retention</span>
          </div>
          <div className="h-48 flex items-center justify-center">
            <DonutChart />
          </div>
        </div>

        {/* Two stacked metrics */}
        <div className="flex flex-col gap-4">
          <CardMetric
            icon={<Folder className="h-5 w-5 text-white" />}
            title="All Products"
            subtitle="Active"
            stat="0"
            secondaryStat="0"
            growth="+0.00%"
            bg="bg-indigo-500 text-white"
            isBold={true}
          />
          <CardMetric
            icon={<ShoppingCart className="h-5 w-5 text-black" />}
            title="Abandoned Cart"
            subtitle="Customers"
            stat="0%"
            secondaryStat="0"
            growth="+0.00%"
            time="This Week"
            danger
          />
        </div>

        {/* Recent Orders - Flexible height */}
        <Card className="p-0 row-span-3 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-poppins font-light">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4 overflow-auto">
            {Array.from({ length: 8 }).map((_, index) => {
              const status = index % 2 === 0 ? "Completed" : "Pending";
              const statusColor =
                status === "Completed" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600";

              return (
                <div key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://images.unsplash.com/photo-1529653762956-b0a27278529c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                      alt="iPhone"
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">iPhone 13</p>
                      <p className="text-sm text-gray-500">₦730,000.00 × 1</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">12 Sept 2022</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                      {status}
                    </span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Summary - Bar Chart */}
        <Card className="col-span-1 md:col-span-2 p-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-md font-poppins font-light">Summary</CardTitle>
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="w-[100px] h-8 text-sm font-poppins font-light bg-indigo-50 text-primaryColor border-none">
                  <SelectValue placeholder="Sales" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[110px] h-8 text-sm font-poppins  font-light border border-gray-200">
                  <SelectValue placeholder="Last 7 Days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>

          <CardContent className="h-[280px]">
            <BarSummaryChart />
          </CardContent>
        </Card>
      </div>


  );
}
