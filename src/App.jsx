import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDf1Rhw-C1jLQnZzsXX-jzab5OQ3vgY39Q';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [''], selectedVideo: null };
    this.videoSearch('thailand');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState(state => ({
        ...state,
        videos,
        selectedVideo: videos[0] }));
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

export default App;
