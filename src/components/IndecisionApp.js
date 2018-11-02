import React from 'react'

import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'


export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    //It deletes a SINGULAR option
    handleDeleteOption = (optionToRemove) => {   
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option ) 
            // deletes the item and returns an array with all the other ones
            }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]        
        alert(option)
    }
    handleAddOption = (option) => {
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

