import './App.css';
import { useState } from 'react'

import List from './components/List.js'
import ListItem from './components/ListItem.js'

function App () {
  const [booktitle, setBooktitle] = useState( '' )
  const movies = [
    { id: 1, title: 'movie 1', cast: 'cast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5cQoC2KEju4f2C75-aZJNAHaKe%26pid%3DApi&f=1&ipt=03020e9b9f18b2a387c8b70895d5f27107bf471ef7808b2c9ce19c56838ffb62&ipo=images', author: 'Auther 1', publisher: 'publisher 1' },
    { id: 2, title: 'movie 2', cast: 'cast', image: 'https://tailwindcss.com/_next/static/media/prognosis-negative.6897ae50.jpg', author: 'Auther 2', publisher: 'publisher 2' },
    { id: 3, title: 'movie 1', cast: 'cast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5cQoC2KEju4f2C75-aZJNAHaKe%26pid%3DApi&f=1&ipt=03020e9b9f18b2a387c8b70895d5f27107bf471ef7808b2c9ce19c56838ffb62&ipo=images', author: 'Auther 1', publisher: 'publisher 1' },
    { id: 4, title: 'movie 2', cast: 'cast', image: 'https://tailwindcss.com/_next/static/media/prognosis-negative.6897ae50.jpg', author: 'Auther 2', publisher: 'publisher 2' },
    { id: 5, title: 'movie 1', cast: 'cast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5cQoC2KEju4f2C75-aZJNAHaKe%26pid%3DApi&f=1&ipt=03020e9b9f18b2a387c8b70895d5f27107bf471ef7808b2c9ce19c56838ffb62&ipo=images', author: 'Auther 1', publisher: 'publisher 1' },
    { id: 6, title: 'movie 2', cast: 'cast', image: 'https://tailwindcss.com/_next/static/media/prognosis-negative.6897ae50.jpg', author: 'Auther 2', publisher: 'publisher 2' },
    { id: 7, title: 'movie 1', cast: 'cast', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5cQoC2KEju4f2C75-aZJNAHaKe%26pid%3DApi&f=1&ipt=03020e9b9f18b2a387c8b70895d5f27107bf471ef7808b2c9ce19c56838ffb62&ipo=images', author: 'Auther 1', publisher: 'publisher 1' },
    { id: 8, title: 'movie 2', cast: 'cast', image: 'https://tailwindcss.com/_next/static/media/prognosis-negative.6897ae50.jpg', author: 'Auther 2', publisher: 'publisher 2' }
  ]
  const handleBookTitle = ( event ) => {
    event.preventDefault()
    console.log( event.target.value );
    setBooktitle( event.target.value )
  }
  const handleSubmit = ( event ) => {
    event.preventDefault()
    console.log( 'submit', booktitle );
    setBooktitle( '' )
  }
  return (
    <div className="App">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">BOOK FINDER</h1>
            <form onSubmit={handleSubmit}>
              <div className="mt-10 flex gap-x-2 ">
                <input id="book-title" name="book-title" type="text" value={booktitle} onChange={handleBookTitle} className="w-full flex-auto rounded-full border border-black/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter book title" />
                <button type="submit" className="flex-none rounded-full bg-green-500 py-1.5 px-3.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search</button>
              </div>
            </form>

          </div>
        </div>
        <div className="divide-x divide-slate-100">
          <List>
            {movies.map( ( movie ) => (
              <ListItem key={movie.id} movie={movie} />
            ) )}
          </List>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9089FC" />
                <stop offset="1" stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
