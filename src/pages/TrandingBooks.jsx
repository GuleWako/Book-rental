import React from 'react'
import { getAllBooks } from '../data/books'
import BookCard from './books/BookCard';

const TrandingBooks = () => {
    const books = getAllBooks();
    const trendingBooks = books.sort((a,b)=> b.rating - a.rating)
  return (
    <div className='container'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7'>
            {
                trendingBooks.map((book,index)=>(
                    <BookCard key={index} book={book}/>
                ))
            }
        </div>
    </div>
  )
}

export default TrandingBooks