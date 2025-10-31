import React from 'react';
import './Playlist.css';

const PlaylistTest = () => {
  return (
    <section id="playlist" className="playlist">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple Test - Lofi Hip Hop</h2>
          <p className="section-subtitle">Testing basic YouTube embed</p>
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'white',
          padding: '2rem',
          borderRadius: '16px'
        }}>
          <h3>Direct YouTube Embed Test</h3>
          <p>This should play the popular Lofi Hip Hop stream:</p>

          {/* Simple iframe without any error handling */}
          <div style={{
            width: '100%',
            height: '400px',
            background: '#f0f0f0',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jfKfPfyJRdk"
              title="Lofi Hip Hop Radio"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <p><strong>What should happen:</strong> You should see a YouTube video player above.</p>
            <p><strong>If you see a blank space:</strong> There might be network restrictions or browser settings blocking YouTube embeds.</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Alternative Test:</h4>
            <a
              href="https://www.youtube.com/watch?v=jfKfPfyJRdk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: '#ff0000',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
              }}
            >
              Open in YouTube (This should always work)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistTest;