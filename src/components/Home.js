import { useState, useEffect } from "react"

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const booksFromServer = await fetchBooks();
            setBooks(booksFromServer);
        }
        getBooks();
    }, [])

    const fetchBooks = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/v1/books`);
        const data = await res.json();
        return data.data.books;

    }

    return (
        <div>

        </div>
    );
}

export default Home
