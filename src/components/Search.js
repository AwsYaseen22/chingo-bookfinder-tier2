import React from 'react'

const Search = ( { handleSubmit, booktitle, handleBookTitle } ) => {
    return (
        <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">BOOK FINDER</h1>
            <form onSubmit={handleSubmit}>
                <div className="mt-10 flex gap-x-2 ">
                    <input id="book-title" name="book-title" type="text" value={booktitle} onChange={handleBookTitle} className="w-full flex-auto rounded-full border border-black/10 bg-white px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter book title" />
                    <button type="submit" className="flex-none rounded-full bg-green-500 py-1.5 px-3.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search</button>
                </div>
            </form>

        </div>
    )
}

export default Search