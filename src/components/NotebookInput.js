import React from "react";

class NotebookInput extends React.Component{


    constructor(props){
        super(props);

        // Deklarasi state
        this.state = {
            title: "",
            body: ""
        }

        // Call bind
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
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

    onBodyChangeEventHandler(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value
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
                <input type="text" required placeholder="title" value={this.state.title} onChange={this.onTitleChangeEventHandler}/> <br></br>
                <input type="textarea"  required placeholder="description" value={this.state.body} onChange={this.onBodyChangeEventHandler}/> <br />
                <button type="submit" className="notebook-input__button">Add Notebook</button>
            </form>
        );
      }

}

export default NotebookInput;