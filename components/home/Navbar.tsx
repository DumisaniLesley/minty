import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='max-w-[70%] mx-auto'>
      <div>
        <Image src="/assets/minty.png" alt="Minty Logo" width={100} height={100} />
      </div>
    </nav>
  )
}

export default Navbar