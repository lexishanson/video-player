import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li>
      <div className="video-list media">
        <div className="media-left list-group-pointer" onClick={() => onVideoSelect(video)}>
          <img className="media-object" alt="" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading list-group-pointer" onClick={() => onVideoSelect(video)}>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
