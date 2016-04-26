// Libraries
import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

// Components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// YouTube API key
const API_KEY = 'AIzaSyBWPzOo2MzvIGpTKfnXwxQo6OpSRfEWsB0'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('javascript')
  }

  videoSearch(term) { // callback function
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)


    return (
      <div>
        <SearchBar onSearchTermChange = { videoSearch }/>
        <VideoDetail video = { this.state.selectedVideo }/>
        <VideoList
          onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) } // callback
          videos = { this.state.videos } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
