
import CardMetric from '@/components/Dashboard/main/CardMetric'
import DonutChart from '@/components/Dashboard/main/DonutChart'
import { Folder, ShoppingCart, LineChart, Users, ShoppingBag } from 'lucide-react'

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
        title="Customers"
        subtitle="Active"
        stat="0"
        secondaryStat="0"
        growth="+0.00%"
        time="This Week"
      />

      {/* Donut Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4 col-span-1 md:col-span-1">
        <div className="flex justify-between items-center">
          <h2 className="font-light text-[16px]">Marketing</h2>
          <span className="text-[12px] text-gray-400 font-light font-poppins">This Week</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-primaryColor font-light font-poppins">● Acquisition</span>
          <span className="text-indigo-300 font-light font-poppins">● Purchase</span>
          <span className="text-yellow-400 font-light font-poppins">● Retention</span>
        </div>
        <DonutChart />
      </div>

      <div className='gap-4 flex flex-col'>
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

        {/* Abandoned Cart */}
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


    </div>
  )
}
