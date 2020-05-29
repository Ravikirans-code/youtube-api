import React from 'react';

const VideoDetails = ({ video }) => {
    console.log(video)
    if (!video) {
        return (
            <div class="ui segment">
                <div class="ui active inverted dimmer">
                    <div class="ui text loader">Loading</div>
                </div>
                <p></p>
            </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>

            <div className=" ui embed">
                <iframe title={video.snippet.title} src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header" >{video.snippet.title}</h4>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    );
}
export default VideoDetails;