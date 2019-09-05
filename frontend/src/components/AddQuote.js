import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { NavLink, withRouter } from 'react-router-dom';
import SuccessMessage from './SuccessMessage';
import './styles.css';

const AddQuote =()=> {
    const [newQuote, setNewQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [notification, setNotification] = useState(false)

    
    const handleClose =()=>{
        setNotification(false)
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/quotes/', {
                text: newQuote,
                author: author
            })
        } catch (err) {
            console.error(err);
        }
        setNotification(true)
    }
    return(
        <div id="container">
           <Button id ="home-link">
               <NavLink to="/">Home</NavLink>
            </Button> 
            <h2 id ="add-quote-title">Add a quote</h2>
            <Card id="quote-form">
            <form>
            <textarea value={newQuote} onChange={e=>setNewQuote(e.target.value)} placeholder="Add quote here" id='text-area'/>
            <br/>
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author's name" id='author-name'/>
            <br/>
            <br/>
            <Button onClick={handleSubmit} id='submit-button'>Submit</Button>
            </form>
            </Card>
            <SuccessMessage notification={notification} handleClose={handleClose}/>
        </div>      
    )
}



export default withRouter(AddQuote);