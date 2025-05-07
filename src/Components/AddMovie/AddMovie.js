import React, { useState } from 'react';
import "./AddMovie.css";
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({add}) => {
    // InitialState
    const [show, setShow] = useState(false);
    
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [rate,setRate] = useState("")
    const [posterUrl,setPosterUrl] = useState("")

     // update state
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTitle = (e) =>{
        setTitle(e.target.value);
    };
    const handleDescription = (e) =>{
        setDescription(e.target.value);
    };
    const handleRate = (e) =>{
        setRate(e.target.value);
    };
    const handlePosterUrl = (e) =>{
        setPosterUrl(e.target.value);
    };

    // function add movie
    const handleMovie = (e) => {
        let newMovie = { title, description, rate, posterUrl };
        add(newMovie);
        handleClose();
    };


    return (
        <div>
            <div className="add-movie-button add-movie-container">
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => handleTitle(e)} />
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => handleDescription(e)} />
                <Form.Label>rate</Form.Label>
                <Form.Control type="number" placeholder="Enter rate" value={rate} onChange={(e) => handleRate(e)} />
                <Form.Label>Poster</Form.Label>
                <Form.Control type="url" placeholder="Enter poster" value={posterUrl} onChange={(e) => handlePosterUrl(e)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleMovie()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie