import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-700 bg-amber-150 p-5 lg:text-lg justify-center gap-8 rounded-lg shadow-md'>
      <NavbarItem 
        title='Trending' 
        param='fetchTrending' 
        className='hover:bg-amber-600 hover:text-white transition-all duration-300 p-3 rounded-md' 
      />
      <NavbarItem 
        title='Top Rated' 
        param='fetchTopRated' 
        className='hover:bg-amber-600 hover:text-white transition-all duration-300 p-3 rounded-md' 
      />
    </div>
  );
}
