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
  const [booksList, setBooksList] = useState( [] )
  const [message, setMessage] = useState( 'Please search for a book by Book Title' )
  const [loading, setLoading] = useState( false )

  const handleBookTitle = ( event ) => {
    setBooktitle( event.target.value )
  }
  const handleSubmit = ( event ) => {
    event.preventDefault()
    if ( !booktitle.trim().length ) {
      setBooksList( [] )
      return setMessage( 'Please write something to search for!' )

    } else {

      setLoading( true )
      getBooks( booktitle )
        .then( ( books ) => {
          setLoading( false )
          setBooksList( books.items )
          if ( booksList?.length === 0 ) {
            setMessage( 'Sorry we could not find this title 😔' )
          }
          setBooktitle( '' )
        } )
        .catch( error => {
          console.log( error )
          setLoading( false )
          setMessage( error.message + ' Please try again later' )
        } )
    }
  }
  return (
    <div className="App px-6 lg:px-8 ">


      <Search handleSubmit={handleSubmit} booktitle={booktitle} handleBookTitle={handleBookTitle} />
      {loading ? <Loading /> :
        <div className="divide-x divide-slate-100">
          {booksList?.length ?
            <List>
              {booksList.map( ( book ) => (
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
