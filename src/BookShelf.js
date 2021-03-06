import React, { Component } from 'react';
import PropType from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
   static propTypes = {
      books: PropType.array.isRequired,
      changeShelf: PropType.func.isRequired
   }

   render() {
      const { books, changeShelf } = this.props

      return (
         <ol className='books-grid'>
            {books.map((book) => (
               <Book
                  book={ book }
                  books={ books }
                  key={ book.id }
                  changeShelf={ changeShelf }/>
            ))}
         </ol>
      )
   }
}

export default BookShelf