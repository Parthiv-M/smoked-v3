import React from "react";
import { useParams } from 'react-router-dom';

const GamePage = () => {

    const { urlHint, answer } = useParams();
    console.log(urlHint, answer);
    return (
        <div>Game Page</div>
    );
}

export default GamePage;