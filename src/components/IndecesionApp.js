import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'
class IndecisionApp extends React.Component {
    state = {
        option: [],
        pick: 0,
        selectedOption: undefined
    }


    //hadleDeleteOptions
    hadleDeleteOptions = () => {
        this.setState(() => ({ option: [] }))
    }

    handleDeleteOption = (option) => {
        this.setState((state) => ({
            option: state.option.filter((op) => {
                return option !== op
            })
        }))
    }

    //handlePick
    handlePick = () => {
        this.setState((state) => {
            return {
                pick: Math.floor(state.option.length * Math.random())
            }
        })
        // alert(this.state.option[this.state.pick])
        this.setState(() => {
            return {
                selectedOption: this.state.option[this.state.pick]
            }
        }
        )
    }

    handleClose = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }

    handleAddOption = (op) => {
        if (!op) {
            return 'Enter valid value to add item'
        }
        else if (this.state.option.indexOf(op) > -1) {
            return 'This option already exist'
        } else {
            this.setState((state) => ({ option: state.option.concat(op) }))
        }
    }
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ option: options }))
            }
        } catch (e) {

        }
    }
    componentDidUpdate = (preProps, preState) => {
        if (preState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option)
            console.log('saving')
            localStorage.setItem('options', json)
        }
        console.log('saving date')
    }
    render() {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hand of computer '

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className='container'>

                    <Action hasOptions={this.state.option.length > 0} handlePick={this.handlePick} />
                    <div className='widget'>
                        <Options options={this.state.option} handleDeleteOptions={this.hadleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>

                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClose={this.handleClose} />
            </div>
        )
    }
}

export default IndecisionApp