export default function List ( { children } ) {
    return (
        <section className="py-10 ">
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {children}

            </div>
        </section>
    )
}