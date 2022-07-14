import React from "react";
import NotebookItem from "./NotebookItem";


function NotebookList({ notebooks, onDelete, onArchieved }) {

    if (notebooks.length === 0) {
        return <div className="notebook-list">No archived notebooks</div>
    }

    return(
        <div className="notebook-list">
            {
                notebooks.map((notebook) => (
                    <NotebookItem key={notebook.id} id={notebook.id} onDelete={onDelete} onArchieved = {onArchieved}
                                      {...notebook} />
                ))
            }
        </div>
    );
}

export default NotebookList;