import React from 'react'
import { getAllBooks } from '../../data/books'
import BookCard from './BookCard'

const BookList = () => {
    const books = getAllBooks()
  return (
    <div className='container'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7'>
        {
        books.map((book, index)=>(
         <BookCard key={index} book={book}/>
        ))
    }
        </div>
    </div>
  )
}

export default BookList