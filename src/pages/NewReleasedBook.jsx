import React from 'react'
import { getAllBooks } from '../data/books'
import BookCard from './books/BookCard';

const NewReleasedBook = () => {
    const books = getAllBooks()
    const today = new Date();
    // filter books
    const oneDay = 24*60*60*100;
    const sevenDaysAgo = today.getTime()-(7*oneDay)
    const latestBooks = books.filter(book=>{
        const bookCreatedDate = new Date(book.createdAt).getTime();
        return bookCreatedDate >= sevenDaysAgo 
    })
  return (
    <div className='container'>
    <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7'>
        {
            latestBooks.map((book,index)=>(
                <BookCard key={index} book={book}/>
            ))
        }
    </div>
</div>
  )
}

export default NewReleasedBook