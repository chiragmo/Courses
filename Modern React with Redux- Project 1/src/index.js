import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAfqkV1qxdNUJk0-Wkrwi5UpysDqFLMe58';

class App extends React.Component {
constructor(props) {
	super(props);
	this.state = {videos: [], selectedVideo: null};
  	this.videoSearch('surf');
}

videoSearch(term) {
	YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({videos: videos, selectedVideo: videos[0]});
	});
}


render() {
	return (
 <div>
  <SearchBar onSearchTermChange={(term)=> this.videoSearch(term)} />
   <VideoDetail video={this.state.selectedVideo} />
  <VideoList onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})} videos={this.state.videos} />
  </div>
  );
}
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
