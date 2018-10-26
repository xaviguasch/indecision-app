class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })        
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can see now</p>
                    </div>
                 )}         
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

















// const appRoot = document.getElementById('app')

// let visibility = false

// const toogleVisibility = () => {
//     visibility = !visibility    
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toogleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can see now</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// render() 