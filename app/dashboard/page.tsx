import Card from '@/components/dashboard/SingleCard'
import DonutChart from '@/components/dashboard/DonutChart'
import React from 'react'
import ChartPie from '@/components/dashboard/ChartPie'
import TableView from '@/components/dashboard/TableView'
import ChartBar from '@/components/dashboard/ChartBar'

const Dashboard = () => {
  return (
    <div className="py-4 h-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
        </div>
        <ChartPie />
      </div>
      <div>
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