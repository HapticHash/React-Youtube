import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideDetail from './components/video_detail';
const API_KEY = 'AIzaSyBG-iFiTAxVWpdq1YiMkFf1_UVKTARnnIU';

class App extends Component {

    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }
    
    videoSearch(term) {
        
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });

    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos = {this.state.videos} /> 
                    <VideDetail video={this.state.selectedVideo} />
                </div>
            </div>
            );
        }
    }

ReactDOM.render(<App />, document.querySelector('.container'));