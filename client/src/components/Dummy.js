import React from "react";
import './Rules.css'

const Rules = () => {
    return (
        <div><body>
        <div id='Sidebar'>
            <div id='heading'>Rules</div>
            <div id='sub-headings'>Levels</div>
            <div id='para'>You unlock the level only by solving the previous level.</div>
            <div id='sub-headings'>Time Limit</div>
            <div id='para'>The game starts on 6th November at 12:00:00 and ends on 8th November at 11:59:59</div>
            <div id='sub-headings'>Hints</div>
            <div id='para'>
                <div id='p1'>Explore the depth of webpage for hints and references.</div>
                <div id='p1'>For viewing source code on mobile phones, add <span id='p2'>view-source: </span>before the level URL.</div>
                <div id='p1'>To view the source code of demolevel/SMOKED00, just change the URL to <div id='p2'>https://view-source:smoked.wearemist.in/demolevel</div></div>
                <div id='p1'>Additional hints will be unlocked with time and need and You need to buy them with some points that you earned till then.</div>
                
            </div>
            <div id='sub-headings'>Dos and Don'ts</div>
            <div id='para'>
                <div id='p1'>Do not share the answers with other participant. Jumping level will invite a temporary ban.</div>
                <div id='p1'>Google your way through every level.</div>
            </div>
        </div>
    </body></div>
    );
}

export default Rules;