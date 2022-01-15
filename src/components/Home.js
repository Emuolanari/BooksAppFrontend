import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Menu from "./Menu";

const Home = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        const getBooks = async () => {
            const booksFromServer = await fetchBooks();
            setBooks(booksFromServer);
            console.log(booksFromServer);
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
            <Container>
                <Row>
                    {books.map(book => (
                        <Col key={book.id} xs={6} sm={4} md={3}>
                            <Card>
                                <Card.Img variant='top' src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} height={350} ></Card.Img>
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer mb={2}>
                                    By {book.author}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>

        </div >
    );
}

export default Home
