'use client'

import { Pie, PieChart, Cell } from 'recharts'

const data = [
  { name: 'Acquisition', value: 40 },
  { name: 'Purchase', value: 30 },
  { name: 'Retention', value: 30 },
]

const COLORS = ['#6366f1', '#c7d2fe', '#facc15']

export default function DonutChart() {
  return (
    <div className="flex justify-center">
      <PieChart width={200} height={200} >
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell className='drop-shadow-lg' key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}
