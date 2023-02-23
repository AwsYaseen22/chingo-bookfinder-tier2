import './App.css';
import { useState } from 'react'
import getBooks from './services/book'

import List from './components/List.js'
import ListItem from './components/ListItem.js'
import NoContent from './components/NoContent';
import Loading from './components/Loading';

function App () {
  const [booktitle, setBooktitle] = useState( '' )
  const [books, setBooks] = useState( [] )
  const [message, setMessage] = useState( 'Please search for a book by Book Title' )
  const [loading, setLoading] = useState( false )

  const handleBookTitle = ( event ) => {
    event.preventDefault()
    console.log( event.target.value );
    setBooktitle( event.target.value )
  }
  const handleSubmit = ( event ) => {
    event.preventDefault()
    setLoading( true )
    getBooks( booktitle ).then( ( books ) => {
      setLoading( false )
      setBooks( books.items )
    } )
    if ( books.length === 0 ) {
      setMessage( 'Sorry we could not find this title 😔' )
    }
    setBooktitle( '' )
  }
  return (
    <div className="App">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">BOOK FINDER</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-10 flex gap-x-2 ">
              <input id="book-title" name="book-title" type="text" value={booktitle} onChange={handleBookTitle} className="w-full flex-auto rounded-full border border-black/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter book title" />
              <button type="submit" className="flex-none rounded-full bg-green-500 py-1.5 px-3.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search</button>
            </div>
          </form>

        </div>
        {loading ? <Loading /> :
          <div className="divide-x divide-slate-100">
            {books?.length ?
              <List>
                {books.map( ( book ) => (
                  <ListItem key={book.id} book={book} />
                ) )}
              </List>
              : <NoContent message={message} />
            }
          </div>
        }
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
