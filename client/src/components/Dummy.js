import React from "react";

const html = `
    <!-- <p>Hello</p> -->
`;

var template = { __html: html };

const Dummy = () => {
    return (
        <div>
            Dummy here
            <span dangerouslySetInnerHTML={template}></span>
        </div>
    );
}

export default Dummy;