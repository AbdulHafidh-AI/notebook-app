import React from "react";
import NotebookItemBody from "./NotebookItemBody";
import DeleteButton from "./DeleteButton";

function NotebookItem({ id, title, description, onDelete }) {
    return (
        <div className="notebook-item">
            <DeleteButton id={id} onDelete={onDelete} />
            <NotebookItemBody title={title} description={description} />
        </div>
    );
}

export default NotebookItem;