import React, { useParams } from "react";

const GamePage = () => {
    const { urlHint, answer } = useParams();
    console.log(urlHint, answer);

    // write a function that will execute every 30 minutes and send the user's score from the global state to the backend

    return (
        <div> Game Page </div>
    )
}

export default GamePage;
