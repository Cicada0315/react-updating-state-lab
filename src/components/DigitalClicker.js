// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component{
    state={
        timesClicked: 0
    }

    changeState=(e)=>{
        this.setState(previousState =>{
            return {
                timesClicked: previousState.timesClicked +1
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.changeState}>{this.state.timesClicked}</button>
            </div>
        )
    }
}