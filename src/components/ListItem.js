import noImage from '../404.png'

export default function ListItem ( { book } ) {

    const details = {
        image: book.volumeInfo.imageLinks?.thumbnail,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        publisher: book.volumeInfo.publisher,
        info: book.volumeInfo.infoLink
    }

    return (
        <article className="rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 p-3 border">
            <div className=" relative flex justify-center overflow-hidden p-3">
                <img src={details.image || noImage} alt={details.title} className="object-cover h-64 w-48 rounded-xl" />
            </div>

            <div className="mt-1 p-2">
                <h2 className="text-slate-700">{details.title}</h2>
                <p className="mt-1 text-sm text-slate-400">By: {details.author}</p>
                <p className="mt-1 text-sm text-slate-400">Publisher: {details.publisher}</p>

                <div className="mt-3 flex items-end justify-center">

                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <a className="btn btn-blue" href={details.info} target="_blank" rel="noreferrer" >See this book</a>

                    </div>
                </div>
            </div>
        </article>

    )
}