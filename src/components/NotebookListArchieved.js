import React from "react";
import NotebookItem from "./NotebookItem";


function NotebookListArchived({ notebooks, onDelete, onArchieved }) {
   if (notebooks.length === 0) {
       return <div className="notebook-list">No notebooks</div>
   }

   if (notebooks.archieved === true) {
         return (
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
   
}


export default NotebookListArchived;