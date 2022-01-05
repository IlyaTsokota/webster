import React from "react";
import Iframe from "react-iframe";

const Editor = () => {
    return (
        <Iframe
            className="editor-iframe"
            url={process.env.PUBLIC_URL + "/paint/index.html"}
        />
    );
};

export default Editor;
