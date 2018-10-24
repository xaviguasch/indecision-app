const appRoot = document.getElementById('app')

let visibility = false

const toogleVisibility = () => {
    visibility = !visibility    
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toogleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can see now</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()