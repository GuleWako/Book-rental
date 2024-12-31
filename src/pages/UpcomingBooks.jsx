import React from 'react'
import BookCard from './books/BookCard'
import { getAllBooks } from '../data/books'

const UpcomingBooks = () => {
    const books = getAllBooks()
    const upcomingBooks = books.filter(book=>book?.upcoming===true)
  return (
    <div className='container'>
    <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7'>
        {
            upcomingBooks.map((book,index)=>(
                <BookCard key={index} book={book}/>
            ))
        }
    </div>
</div>
  )
}

export default UpcomingBooks