import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from "./apis/youtube"
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



export default class App extends Component {
state = {
    video: [],
    selectedVideo: null
};

 componentDidMount () {
     this.onTermSubmit('buildings');
 }

    onTermSubmit = async term => {
       const response = await  youtube.get('/search', {
         params: {
             q: term
         }   
        });

        this.setState({
            video: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
this.setState({selectedVideo:video})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />

                <div className="ui grid">

                    <div className="eleven wide column">
                <VideoDetail selectedVideo={this.state.selectedVideo}/>
                </div>

<div className="five wide column">
                <VideoList videos={this.state.video} onVideoSelect={this.onVideoSelect}/>
                </div>
                </div>
            </div>
        )
    }
}
