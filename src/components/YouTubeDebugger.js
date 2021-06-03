// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
    state={
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    } 

    changeState=(e)=>{
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
        }); 
    }

    changeStateResolution=(e)=>{
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                ...this.state.video,
                resolution: '720p'
              }
            }
        }); 
    }
    
    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.changeState}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.changeStateResolution}>{this.state.settings.resolution}</button>
            </div>
        )
    }
}