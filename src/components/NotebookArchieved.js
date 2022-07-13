import React from "react";
import NotebookItemBody from "./NotebookItemBody";


function NotebookArchieved({ id, title, description, onArchieved }) {
    return (
        <div className="notebook-item">
            <NotebookItemBody title={title} description={description} />
        </div>
    );

}

export default NotebookArchieved;