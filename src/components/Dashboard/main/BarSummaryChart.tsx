'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts'

const data = [
  { date: "Sept 10", sales: 88000 },
  { date: "Sept 11", sales: 39000 },
  { date: "Sept 12", sales: 67000 },
  { date: "Sept 13", sales: 23000 },
  { date: "Sept 14", sales: 82000 },
  { date: "Sept 15", sales: 45000 },
  { date: "Sept 16", sales: 83000 },
]

export default function BarSummaryChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barSize={28}>
        <XAxis className='font-light text-[11px]' dataKey="date" axisLine={false} tickLine={false} />
        <YAxis className='font-light text-[11px]' tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
        <Bar dataKey="sales" radius={[10, 10, 0, 0]} fill="#5570F1" background={{ fill: "#E5E7EB" }} />
      </BarChart>
    </ResponsiveContainer>
  )
}
