import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import { Link } from 'react-router-dom';
import Search from './Search';

class BooksApp extends React.component {
  state = { book: [] }

  componentDidMount() {
    //get the books on app load 
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response => {

      //set shelf for new or updated book
      newBook.shelf = newShelf

      //gets book list without update
      let updateBooks = this.state.books.filter( book => book.id !== newBook.id)

      // add book to the array and sets the state
      updateBook.push(newBook);
      this.setState({ books: updateBooks })
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className='app'>
        <Route path='/search' render={( { history }) => (
          <Search 
            books={ books }
            changeShelf={ this.changeShelf } />
        )}/>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>My Reads</h1>
            </div>
            <BookList
              books={ books }
              changeShelf={ this.changeShelf } />
            <div className='open-search'>
              <Link to='/search'>Search</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp