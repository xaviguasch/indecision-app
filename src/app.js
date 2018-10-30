// stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    //It deletes a SINGULAR option
    handleDeleteOption(optionToRemove) {   
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option ) 
            // deletes the item and returns an array with all the other ones
            }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]        
        alert(option)
    }
    handleAddOption(option) {
        if (!option) { // checks if there's an empty string
            return 'Enter valid valid value to add item'
        } else if (this.state.options.indexOf(option) > - 1) {
            return 'This option already exists'
        } 

        // You're getting a new array, not chaning the original
        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }))
    }


    render() {
        const subtitle = 'Put your life in the hands of a computer !!!'

        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                 />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}


const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>             
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                        />
                ))
            }    
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            >
            remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
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

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))