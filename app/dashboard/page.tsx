import { ScrollArea } from "@/components/ui/scroll-area"

import Card from '@/components/dashboard/SingleCard'
import DonutChart from '@/components/dashboard/DonutChart'
import ChartPie from '@/components/dashboard/ChartPie'
import TableView from '@/components/dashboard/TableView'
import ChartBar from '@/components/dashboard/ChartBar'
import ChartBarHorizontal from '@/components/dashboard/ChartBarHorizontal'
import ChartMixed from "@/components/dashboard/ChartMixed"

const Dashboard = () => {
  return (
    <div className="py-4 h-full flex flex-col gap-8 overflow-y-scroll scrollbar-hide pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <ChartBarHorizontal />
            <ChartMixed />
          </div>
          <ChartPie />
        </div>
        <div className="my-1">
          <TableView />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DonutChart />
          <ChartBar />
        </div>
      </div>
  )
}

export default Dashboard