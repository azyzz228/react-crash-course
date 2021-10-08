import react from 'react'
import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo({ text }) {

    const [modalIsOpen, setmodalIsOpen] = useState(false)
    function deleteHandler() {
        setmodalIsOpen(!modalIsOpen)
    }
    return (
        <div className="card">
            <h2>{text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
                {modalIsOpen && <Modal onCancel={deleteHandler} />}
                {modalIsOpen && <Backdrop onCancel={deleteHandler} />}
            </div>
        </div>
    )
}

export default Todo
