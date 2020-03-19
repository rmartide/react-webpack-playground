import Navbar from '@components/Navbar';
import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';

export default function App() {

    const [timesClicked, setTimesClicked] = useState(0)

    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid">
                <h1>Times clicked (ye boi): {timesClicked}</h1>
                <button className="btn btn-danger" onClick={() => setTimesClicked(timesClicked + 1)}>Click me!</button>
                <Zoom>
                    <h2>It's me DIO!</h2>
                </Zoom>
            </div>
        </>
    )
}
