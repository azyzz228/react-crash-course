import React from 'react'
import Card from './ui/Card'
import classes from './NewMeetupForm.module.css'
import { useRef } from 'react'
function NewMeetupForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetup = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        console.log(meetup);
    }
    return (
        <Card>
            <form action="" className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" name="" required id="title" ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Image URL</label>
                    <input type="url" name="" required id="image" ref={imageInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Meetup address</label>
                    <input type="text" name="" required id="address" ref={addressInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Meetup description</label>
                    <textarea id="description" cols="30" rows="5" ref={descriptionInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button onSubmit={submitHandler}>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
