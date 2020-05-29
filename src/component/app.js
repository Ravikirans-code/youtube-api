import React from 'react';

import Searchbar from './Searchbar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
    state = { videos: [], selectedValue: null }
    componentDidMount(){
        this.onTermSubmit('youtube');
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: term
            }
        });
        console.log(response);
        this.setState({
            videos: response.data.items,
            selectedValue: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedValue: video });
    }
    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedValue} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;