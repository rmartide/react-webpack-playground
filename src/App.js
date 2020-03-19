import Navbar from '@components/Navbar';
import React, { useState } from 'react'

export default function App() {

    const [timesClicked, setTimesClicked] = useState(0)

    return (
        <>
            <Navbar></Navbar>
            <h1>Times clicked: {timesClicked}</h1>
            <button onClick={() => setTimesClicked(timesClicked + 1)}>Click me!</button>
        </>
    )
}
