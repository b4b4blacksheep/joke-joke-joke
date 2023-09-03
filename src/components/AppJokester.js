import { Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import "./style.css"

export default function AppJokester() {

    const [ type, setType ] = useState('');
    const [ setup, setSetup ] = useState('');
    const [ punchline, setPunchline ] = useState('');
    
    async function getJoke() {
        const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await res.json();

        setType(data.type);
        setSetup(data.setup);
        setPunchline(data.punchline);
        
    }

    return (

    <Container fluid className="text-center app-jokester">
        <div className="row pt-5 row-jokester">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <Instruction />
                <Button variant="warning" size="lg" onClick={getJoke} >Generate a Joke!</Button>
            </div>

            <div className="col-sm-6 mb-3 mb-sm-0">
                <Message setup={setup} punchline={punchline} type={type}/>
            </div>
        </div>
    </Container>
    )
}

function Instruction () {
    return (
        <div className="py-5">
            <h5 className="card-title div-title py-3 my-5 text-dark">English Jokes</h5>
            <figure>
                <blockquote className="blockquote text-dark">
                    <p>"The best way to cheer yourself up is to try to cheer somebody else up."</p>
                </blockquote>
                <figcaption className="blockquote-footer text-dark">
                    Mark Twain
                </figcaption>
            </figure>
            
        </div>
    )
}

function Message(props){

    return (

        <>
            <div className="py-5">
                <div>
                    <h5 className="div-title py-3 my-5 text-light">{props.setup}</h5>
                    <h2 className="div-title py-3 my-5 text-light">{props.punchline}</h2>
                </div>
            </div>
        </>
    )
}