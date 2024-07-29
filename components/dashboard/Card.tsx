import { Percent } from 'lucide-react'
import React from 'react'

interface CardProps {
  title: string;
  number: number;
  icon: string;
  iconn: string;
  text: string;
  Percent: string;
}

const Card: React.FC<CardProps> = ({ title, number, icon, iconn, text, Percent }) => {
  return (
    <div className='px-4 py-6 bg-white shadow-lg rounded-md dark:bg-slate-950 dark:shadow-gray-50 dark:shadow-sm'>
      <div className='flex justify-between'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div>{icon}</div>
      </div>
      <h1 className='text-3xl font-bold my-2'>{number}</h1>
      <div className='flex justify-start gap-2'>
        <div>{iconn}</div>
        <div>{Percent}</div>
        <p className='text-sm text-gray-400'>{text}</p>
      </div>
    </div>
  )
}

export default Card