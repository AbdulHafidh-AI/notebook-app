import React from "react";
import NotebookItemArchieved from "./NotebookItemArchieved";


function NotebookListArchived({  notebooks, onDelete, onUnArchieved }) {
     
     if(notebooks.length === 0) {
         return <div className="notebook-list">No archived notebooks</div>
     }

         return (
              <div className="notebook-list">
                {
                     notebooks.map((notebook) => (
                          <NotebookItemArchieved key={notebook.id} id={notebook.id} onDelete={onDelete} onUnArchieved = {onUnArchieved}
                                         {...notebook} />
                     ))
                }
              </div>
         );
   
   
}


export default NotebookListArchived;