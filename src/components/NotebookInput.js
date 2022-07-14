import React from "react";

class NotebookInput extends React.Component{


    constructor(props){
        super(props);

        // Deklarasi state
        this.state = {
            title: "",
            description: ""
        }

        // Call bind
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        });
    }

    onDescriptionChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                description: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotebook(this.state);
      }

      render(){
        return (
            <form className="notebook-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" required placeholder="title" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <input type="text"  required placeholder="description" value={this.state.description} onChange={this.onDescriptionChangeEventHandler}/>
                <button type="submit">Add Note</button>
            </form>
        );
      }

}

export default NotebookInput;