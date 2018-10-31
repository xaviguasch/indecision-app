// stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    componentDidMount() {
        
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if (options) {
                this.setState(() => ({ options }))  // same as having { options: options }
            }
        } catch (e) {
            // If the JSON data is invalid, we do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount !!!'); 
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
            {props.options.length === 0 && <p>Please add an option to get started</p>}             
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
            //-onClick requires a reference to a function, 
            //-so you need to pass it a function. . .
            //-1. onClick={props.handleDeleteOption}  will not work because the handler needs the value of option
            //-2. onClick={props.handleDeleteOption(props.optionText)} will not work because you are invoking the function not assigning it
            //-3.The arrow function was created to solve the above two problems (a regular function would also have worked)
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

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))