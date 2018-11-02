import React from 'react'

export default class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.formHandleAddOption = this.formHandleAddOption.bind(this)  // NAME CHANGED TO AVOID CONFUSION
        this.state = {
            error: undefined
        }
    }
    formHandleAddOption(e) {
        e.preventDefault()
        

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        if (!error) { // if there's no error we clear the input
            e.target.elements.option.value = ''
        }  
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formHandleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}