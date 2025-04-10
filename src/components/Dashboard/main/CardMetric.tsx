import { cn } from '@/lib/utils'

interface CardMetricProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  stat: string
  secondaryStat: string
  growth: string
  time?: string
  bg?: string
  danger?: boolean
  isBold?:boolean
}

export default function CardMetric({
  icon,
  title,
  subtitle,
  stat,
  secondaryStat,
  growth,
  time,
  bg = 'bg-white',
  danger = false,
  isBold = false
}: CardMetricProps) {
  return (
    <div className={cn('rounded-2xl p-6 shadow-sm flex flex-col justify-between', bg)}>
      <div className="flex justify-between items-center mb-4">
        <div className={isBold ? "bg-[#ffffff3c] p-2 rounded-lg" :"bg-muted p-2 rounded-lg"}>{icon}</div>
        {time && <span className="text-[12px] text-gray-400 font-light font-poppins">{time}</span>}
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className={isBold ? cn('text-sm font-poppins text-white font-light text-[14px]', danger ? 'text-red-500' : '') : cn('text-sm font-poppins font-light text-[14px]', danger ? 'text-red-500' : 'text-muted-foreground')}>{title}</div>
          <div className="flex items-center">
            <div className={isBold? "text-[20px] text-white font-light":"text-[20px] font-light"}>{stat} </div>
            <div className="text-sm font-light font-poppins text-green-500 ml-2">{growth}</div>
          </div>
        </div>
        <div className="text-right">
          <div className={isBold ? "text-sm text-white font-poppins font-light text-muted-foreground" : "text-sm font-poppins font-light text-muted-foreground"}>{subtitle}</div>
          <div className="text-xl font-poppins  font-light">{secondaryStat}</div>
        </div>
      </div>
    </div>
  )
}
