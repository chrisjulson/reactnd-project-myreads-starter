import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';
import noCover from './icons/no-cover-image.png';

class Book extends Component {
   static propTypes = {
      book: PropTypes.object.isRequired,
      books: PropTypes.array.isRequired,
      changeShelf: PropTypes.func.isRequired
   }

   render() {
      const { book, books, changeShelf } = this.props

      // add place a place holder image and title for books without 
      const coverImg = book.imageLinks && book.imageLink.thumbnail ? book.imageLinks.thumbnail : noCover
      const title = book.title ? book.title : 'No title available'

      return (
         <li>
            <div className='book'>
               <div className='book-top'>
                  <div 
                     className='book-cover'
                     style={{ backgroundImage: `url(${coverImg})`}}>
                  </div>
                  <ShelfChanger
                     book={ book }
                     books={ books }
                     changeShelf={ changeShelf }
                  />
               </div>
               <div className='book-title'>{ title }</div>
               {/*check for and renders title and author on seprate lines if they are present*/ book.authors && book.authors.map((author, index) => {
                  <div className='book-authors' key={index}>{author}</div>
               })}
            </div>
         </li>
      )
   }
}

export default Book