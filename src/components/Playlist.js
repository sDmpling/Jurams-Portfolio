import React, { useState } from 'react';
import './Playlist.css';

const Playlist = () => {
  // IMPORTANT: YouTube Music URLs cannot be embedded!
  // Use regular YouTube playlist URLs or individual video URLs
 const playlists = [
  {
    id: 1,
    title: "Chill Beats for Coding",
    description: "Full playlist - auto-plays next songs",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLkWX6ZfXITyiWrM9CRJbSm_ZdqsZ-FeyZ&autoplay=0&rel=0",
    playlistUrl: "https://www.youtube.com/watch?v=_k-8ta5SgKU&list=PLkWX6ZfXITyiWrM9CRJbSm_ZdqsZ-FeyZ",
    featured: true,
    type: "playlist"
  },
  
  {
    id: 2,
    title: "Chill Beats for Deep Coding",
    description: "Full playlist - auto-plays next songs",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLfM1mZtwN2B3_GRcSrZ2MXv2iWJ4Z4Upm&autoplay=0&rel=0",
    playlistUrl: "https://www.youtube.com/watch?v=TTS2J1dXiHQ&list=PLfM1mZtwN2B3_GRcSrZ2MXv2iWJ4Z4Upm",
    featured: false,
    type: "playlist"
  }
];

  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0]);

  const openExternalPlaylist = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderPlayer = () => {
    if (selectedPlaylist.type === "external") {
      return (
        <div className="external-playlist">
          <div className="external-message">
            <i className="fas fa-external-link-alt fa-3x"></i>
            <h3>External Playlist</h3>
            <p>This playlist opens in YouTube Music for the best experience.</p>
            <button
              className="btn external-btn"
              onClick={() => openExternalPlaylist(selectedPlaylist.playlistUrl)}
            >
              <i className="fab fa-youtube"></i>
              Open in YouTube Music
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="youtube-embed">
        <iframe
          width="100%"
          height="400"
          src={selectedPlaylist.embedUrl}
          title={selectedPlaylist.title}
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* Fallback message for blocked content */}
        <div className="embed-fallback">
          <p>Having trouble playing?
            <button
              className="link-btn"
              onClick={() => openExternalPlaylist(selectedPlaylist.playlistUrl || selectedPlaylist.embedUrl)}
            >
              Open in YouTube <i className="fas fa-external-link-alt"></i>
            </button>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="playlist" className="playlist">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Playlists</h2>
          <p className="section-subtitle">Music that inspires my work</p>
        </div>

        <div className="playlist-content">
          <div className="playlist-sidebar">
            <h3>Select a Playlist</h3>
            <div className="playlist-list">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  className={`playlist-item ${selectedPlaylist.id === playlist.id ? 'active' : ''}`}
                  onClick={() => setSelectedPlaylist(playlist)}
                >
                  <div className="playlist-info">
                    <h4 className="playlist-title">{playlist.title}</h4>
                    <p className="playlist-desc">{playlist.description}</p>
                    <div className="playlist-badges">
                      {playlist.featured && (
                        <span className="featured-badge">Featured</span>
                      )}
                      <span className={`type-badge ${playlist.type}`}>
                        {playlist.type === 'external' ? 'External Link' :
                         playlist.type === 'playlist' ? 'Playlist' : 'Video'}
                      </span>
                    </div>
                  </div>
                  <div className="playlist-icon">
                    {playlist.type === 'external' ?
                      <i className="fas fa-external-link-alt"></i> :
                      <i className="fas fa-play-circle"></i>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="playlist-note">
              <i className="fas fa-info-circle"></i>
              <div>
                <p><strong>YouTube Music Note:</strong> Due to embedding restrictions, some playlists will open in YouTube Music for the best experience.</p>
                <p>Regular YouTube videos and playlists work best for embedding.</p>
              </div>
            </div>
          </div>

          <div className="playlist-player">
            <div className="current-playlist">
              <h3>{selectedPlaylist.title}</h3>
              <p>{selectedPlaylist.description}</p>
            </div>

            {renderPlayer()}

            <div className="playlist-controls">
              <div className="control-info">
                <i className="fab fa-youtube"></i>
                <span>Powered by YouTube</span>
              </div>
              <div className="playlist-stats">
                <span><i className="fas fa-list"></i> Playlist {selectedPlaylist.id} of {playlists.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="playlist-footer">
          <p>Want to share your music taste? These playlists represent the soundtracks to my creative process.</p>
          <div className="music-platforms">
            <a href="https://music.youtube.com/" className="platform-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
              <span>YouTube Music</span>
            </a>
            <a href="https://open.spotify.com/" className="platform-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-spotify"></i>
              <span>Spotify</span>
            </a>
            <a href="https://music.apple.com/" className="platform-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-apple"></i>
              <span>Apple Music</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;