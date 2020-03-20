import Navbar from '@components/Navbar';
import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {

    const timesClicked =  useSelector(state => state.timesClicked);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar></Navbar>
            <div className="container-fluid">
                <h1>Times clicked (ye boi): {timesClicked}</h1>
                <button className="btn btn-danger" onClick={() => dispatch({type: 'COUNT'})}>Click me!</button>
                <Zoom>
                    <h2>It's me DIO!</h2>
                </Zoom>
            </div>
        </>
    )
}
