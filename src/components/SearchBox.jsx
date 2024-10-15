'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className='flex justify-between px-5 max-w-6xl mx-auto shadow-lg p-4 bg-white rounded-md'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 px-4 shadow-md'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='text-white bg-amber-600 px-4 py-2 ml-2 rounded-md hover:bg-amber-700 transition-all duration-300 disabled:bg-gray-400 shadow-md'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}
