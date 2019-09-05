import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { NavLink, withRouter } from 'react-router-dom';
import './styles.css';

const QuoteContainer = () => {
    const [quote, setQuote] = useState([])
    const [color, setColor] = useState("black")

    const handleBackgroundColor = () => {
        const colorArray = ["#e2beba",'#0ac8e3', '#ff9005', '#008080','#b6eee1', '#ff7f50', '#f4a892', '#483d8b',
    '#854442', '#bf0000', '#e35d6a', '#3fbf82', '#e03e69', '#935f7b', '#88176a' ]
        const randomNumber = Math.floor(Math.random()*colorArray.length)
        const backgroundColor = colorArray[randomNumber]
        setColor(backgroundColor)
    }
    
    const getQuote = async () => {
        const res = await axios({
            url:'http://localhost:8000/api/quotes/',
            method: 'GET'
        });
        const quotes = await res.data;
        const randomNumber = Math.floor(Math.random()*quotes.length)
        const randomQuote= quotes[randomNumber]

        setTimeout(()=>{
            setQuote(randomQuote);
            handleBackgroundColor()
        },600);
    };

    return (
        <div id="container">
            <Button id ="add-quote-link">
                <NavLink to="/add-quote">Add A Quote</NavLink>
                </Button>
             <h1 id="title">Random Quote Generator</h1>
             <Card id="quote-container" style={{backgroundColor:color}}>
                <p id="quote-text">{quote.text}</p>
                <p id = "quote-author">{quote.author}</p>
                <Button variant="outlined" id="get-quote-button" onClick={getQuote}>Get Random Quote</Button>
            </Card>
            <br/> 
         
        </div>

    );
};

export default withRouter(QuoteContainer);