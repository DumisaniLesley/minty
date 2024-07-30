import Image from 'next/image'
import Link from 'next/link'
import { LayoutGrid, ListCheck,ClipboardList, Settings, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

const data = [
    {
        name: 'Analytics',
        link: '/dashboard',
        icon: <LayoutGrid size={24} />,
    },
    {
        name: 'Products',
        link: '/dashboard/expenses',
        icon: <ListCheck size={24} />,
    },
    {
        name: 'Messages',
        link: '/dashboard/messages',
        icon: <ClipboardList size={24} />,
    },
    {
        name: 'Customers',
        link: '/dashboard/customers',
        icon: <ClipboardList size={24} />,
    },
    {
        name: 'Settings',
        link: '/dashboard/settings',
        icon: <Settings size={24} />,
    },
]

const data2 = [
    
    {
        name: 'Settings',
        link: '/dashboard/settings',
        icon: <Settings size={24} />,
    },
    {
        name: 'Sign Out',
        link: '/dashboard/settings',
        icon: <LogOut size={24} />,
    },
]
const Sidebar = () => {
  return (
    <div className='hidden md:flex md:flex-col h-screen py-10 px-10 justify-between shadow-lg dark:shadow-gray-400 '>
        <div className='flex flex-col'>
            <Link href='/dashboard' className='mb-10 w-full'>
                <Image src='/assets/minty.png' width={200} height={100} alt='logo' />
            </Link>
            <div className='flex flex-col gap-4 '>
                {data.map((item, index) => (
                    <Link key={index} href={item.link} className='flex gap-2 items-center hover:bg-green-400 rounded-full py-2 px-4'>
                        {item.icon}
                        <span className='text-[14px] font-bold'>{item.name}</span>
                    </Link>
                ))}
               
                <hr />
                {data2.map((item, index) => (
                    <Link key={index} href={item.link} className='flex gap-2 items-center hover:bg-green-400 rounded-full py-2 px-4'>
                        {item.icon}
                        <span className='text-[14px] font-bold'>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar