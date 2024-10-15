import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 shadow-lg py-4'>
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
  <MenuItem 
    title='Home' 
    address='/' 
    Icon={AiFillHome} 
    className='hover:bg-amber-700 rounded-md p-6 text-lg transition duration-300 flex items-center' 
  />
  <MenuItem 
    title='About' 
    address='/about' 
    Icon={BsFillInfoCircleFill} 
    className='hover:bg-amber-400 rounded-md p-6 text-lg transition duration-300 flex items-center' 
  />
</div>

        <div className='flex items-center gap-4'>
          <DarkModeSwitch />
          <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-500 text-white py-1 px-2 rounded-lg shadow-lg transition transform hover:scale-105 duration-300'>
              CINE
            </span>
            <span className='text-xl hidden sm:inline text-white font-light'>
              Pedia
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
