import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import defaultCover from './images/defaultCover.jpeg';

const Home = () => {
    const [books, setBooks] = useState([]);

    //remember to use default book covers
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
            <Container>
                <Row pb={2}>
                    {books.map(book => (
                        <Col key={book.id} className="mb-4" xs={6} sm={4} md={3}>
                            <Card>
                                <Card.Img variant='top'
                                    src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg` ?
                                        `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg` :
                                        { defaultCover }}
                                    height={250} ></Card.Img>
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
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
