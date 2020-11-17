// Code ClickityClick Component Here
import React from 'react'

class LightSwitch extends React.Component {

    constructor(){
        super()

        //define the initial state
        this.state = {
            toggled: false
        }
    }

    handleClick = ()=>{
        // console.log("clicked!")
        // this.setState({
        //     hasBeenClicked: true
        // }, ()=> console.log(this.state.hasBeenClicked))
        // console.log(this.state.hasBeenClicked)
        // let newCount = this.state.count + 1

        // this.setState({
        //     count: newCount
        // })
        // this.setState(previousState=>{
        //     return {
        //         count: previousState.count + 1
        //     }
        // })
        // console.log(this.state.count)

        this.setState(previousState=>{
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render(){
        // console.log(this.state.hasBeenClicked)
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
            </div>
        )
    }


}

export default LightSwitch