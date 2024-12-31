import React, { useContext } from "react";
import BookCard from "./books/BookCard";
import { getAllBooks } from "../data/books";
import { BooksContext } from "../context";
import { MdDeleteOutline } from "react-icons/md";

const FavouriteBooks = () => {
  const { state, dispatch } = useContext(BooksContext);
  const handleBookMarkedToogle = (event, book) => {
    event.stopPropagation();
    dispatch({
      type: "TOOGLE_BOOKMARK",
      payload: book,
    });
  };
  return (
    <div className="shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
<h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
Your Favourite Books
</h2>
<div className="space-y-8 lg:space-y-12 max-h-[450px] mb-10 lg:mb-14">
{
    state.bookMarkedBooks.length === 0 ? <p className="text-xl overflow-hidden">You don't have any books as favorite yet!</p> : (
        state.bookMarkedBooks.map((item)=>(
            <div
            key={item.id}
            className="grid grid-cols-[1fr_auto] gap-4">
            <div className="flex items-center gap-4">
                <img
                    className="rounded overflow-hidden"
                    src={ `${item.cover}`}
                    alt={item.title}
                    width={"80px"}
                    height={"80px"}
                />
                <div>
                    <h3 className="text-base md:text-xl font-bold">
                        {item.title}
                    </h3>
                    <p className="max-md:text-xs text-[#575A6E]">
                        {item.genre}
                    </p>
                    <span className="max-md:text-xs">
                        ${item.price}
                    </span>
                </div>
            </div>
            <div className="flex justify-between gap-4 items-center">
                <button
                    className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    onClick={() => handleBookMarkedToogle(event, item)}>
                        <MdDeleteOutline />
                    <span className="max-md:hidden">
                        Remove
                    </span>
                </button>
            </div>
        </div>
        ))
    )
}
</div>
    </div>
  )
 
};

export default FavouriteBooks;
