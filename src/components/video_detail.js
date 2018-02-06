import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="col-md-6 embed-responsive-16by9">
            <div className="embed-responsive">
                <iframe title="iframe of youtube video" className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details card-2">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;