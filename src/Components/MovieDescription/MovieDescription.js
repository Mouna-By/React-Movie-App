import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./MovieDescription.css";

const MovieDescription = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((el) => el.id === Number(id));

    if (!movie) return <h2 className="text-center mt-5">Movie not found</h2>;

    return (
        <Container className="mt-5 description-container">
            <Row>
                <Col md={6}>
                    <img src={movie.posterUrl} alt={movie.title} className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <div className="ratio ratio-16x9 mb-3">
                        <iframe
                            src={movie.trailer}
                            title={movie.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <Link to="/">
                        <Button variant="secondary">← Back to Home</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDescription;
