import React from 'react'

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            className="button button--link"
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


export default Option