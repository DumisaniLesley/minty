import Card from '@/components/dashboard/Card'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-4 h-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
          <Card title="Orders" number={100} icon="copy" iconn='up' text="text" Percent="10%" />
        </div>
        <div>charts</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>charts 2</div>
        <div>Numbers and Tables</div>
      </div>
    </div>
  )
}

export default Dashboard