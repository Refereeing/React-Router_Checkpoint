import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


function AddMovie({ Addm }) {
    const [show, setShow] = useState(false);
    const [addmovie, setAddmovie] = useState([{
        }])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = (event) => {
        setAddmovie((oldstate) => ({
            ...oldstate, [event.target.name ]: event.target.value
        }))
    }
    return (
        <>
            <Button style={{ backgroundColor: "blue" }} variant="primary" onClick={handleShow}>
                Add movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Add movie description here</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', flexDirection: 'column' }} >
                    id:uuidv4():<input name="id" onChange={handleAdd} />
                    Title :<input name="title" onChange={handleAdd} />
                    Description :<input name="description" onChange={handleAdd} />
                    PosterUrl :<input name="posterUrl" onChange={handleAdd} />
                    Rate :<input name="rate" onChange={handleAdd} />
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: "red" }} variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button style={{ backgroundColor: "blue" }} variant="primary" onClick={() => Addm(addmovie)}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddMovie