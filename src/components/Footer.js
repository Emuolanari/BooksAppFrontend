import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer bg-primary'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row text-white">
                                Phone: +44565........
                            </div>
                        </div>
                        <div className="container">
                            <div className="row text-white">
                                Email: admin@booksapp.com
                            </div>
                        </div>
                    </div>
                    <div className="col text-white">
                        Other stuff here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
