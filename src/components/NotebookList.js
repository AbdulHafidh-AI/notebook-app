import React from "react";
import NotebookItem from "./NotebookItem";


function NotebookList({ notebooks, onDelete}){
    return(
        <div className="notebook-list">
            {
                notebooks.map((notebook) => (
                    <NotebookItem key={notebook.id} id={notebook.id} onDelete={onDelete} {...notebook} />
                ))
            }
        </div>
    );
}

export default NotebookList;