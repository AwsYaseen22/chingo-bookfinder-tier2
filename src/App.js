import './App.css';
import { useState } from 'react'
import getBooks from './services/book'

import List from './components/List.js'
import ListItem from './components/ListItem.js'
import NoContent from './components/NoContent';
import Loading from './components/Loading';
import Search from './components/Search';

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
    } ).catch( error => console.log( error ) )
    if ( books.length === 0 ) {
      setMessage( 'Sorry we could not find this title 😔' )
    }
    setBooktitle( '' )
  }
  return (
    <div className="App px-6 lg:px-8 ">


      <Search handleSubmit={handleSubmit} booktitle={booktitle} handleBookTitle={handleBookTitle} />
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


    </div>
  );
}

export default App;
