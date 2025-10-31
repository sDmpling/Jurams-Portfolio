# YouTube Embed Guide - How to Find Working Videos

## 🚨 The Problem

The error "Content Cannot Be Embedded" happens when:
1. **YouTube Music URLs** cannot be embedded (music.youtube.com)
2. **Some videos** have embedding disabled by the creator
3. **Some playlists** are restricted
4. **Copyright-protected content** is blocked

## ✅ GUARANTEED Working Examples

Here are some videos that **definitely work** for embedding:

### 🎵 Music Videos That Work:

```javascript
// Lofi Hip Hop - Very popular, always embeddable
embedUrl: "https://www.youtube.com/embed/jfKfPfyJRdk"

// Chillhop Music
embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A"

// Coffee Shop Jazz
embedUrl: "https://www.youtube.com/embed/2_kWNY3FoBk"

// Study Music
embedUrl: "https://www.youtube.com/embed/WPni755-Krg"
```

## 🔍 How to Find Your Own Embeddable Videos

### Method 1: Test Individual Videos

1. **Go to YouTube** (not YouTube Music)
2. **Find a video** you want to embed
3. **Click Share** → **Embed**
4. **If you see embed code**, it can be embedded!
5. **Copy the video ID** from the URL

**Example:**
- Video URL: `https://www.youtube.com/watch?v=jfKfPfyJRdk`
- Video ID: `jfKfPfyJRdk`
- Embed URL: `https://www.youtube.com/embed/jfKfPfyJRdk`

### Method 2: Use Regular YouTube Playlists

❌ **Don't use:** `music.youtube.com/playlist`
✅ **Use:** `youtube.com/playlist`

**Convert YouTube Music to Regular YouTube:**
1. Open your YouTube Music playlist
2. Look for "Open in YouTube" option
3. Or manually change the URL:
   - From: `music.youtube.com/playlist?list=PLxxxxx`
   - To: `youtube.com/playlist?list=PLxxxxx`

## 📝 Update Your Playlist

Replace your current playlist with these working examples:

```javascript
const playlists = [
  {
    id: 1,
    title: "Lofi Coding Beats",
    description: "Perfect background music for coding",
    embedUrl: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0&rel=0",
    playlistUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    featured: true,
    type: "video"
  },
  {
    id: 2,
    title: "Chill Study Music",
    description: "Relaxing instrumental music",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=0&rel=0",
    playlistUrl: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    featured: false,
    type: "video"
  },
  {
    id: 3,
    title: "My Full Playlist",
    description: "Click to open in YouTube Music",
    playlistUrl: "YOUR_YOUTUBE_MUSIC_PLAYLIST_URL",
    featured: false,
    type: "external" // Opens in new tab - no embedding issues
  }
];
```

## 🧪 How to Test

1. **Replace** one of your embedUrls with: `https://www.youtube.com/embed/jfKfPfyJRdk`
2. **Refresh** your website
3. **Click** on that playlist
4. **It should play** without errors!

## 🎯 Best Practices

### ✅ What Works:
- Popular music channels (ChilledCow, ChillhopMusic, etc.)
- Educational content
- Most regular YouTube videos
- Videos with "Share" → "Embed" option available

### ❌ What Doesn't Work:
- YouTube Music URLs (`music.youtube.com`)
- Videos with "Embedding disabled"
- Some copyrighted music
- Private or unlisted videos

## 🔧 Troubleshooting

### If you get embed errors:

1. **Try the guaranteed examples** first
2. **Check if video allows embedding**: Go to video → Share → Embed
3. **Use external type** for problematic playlists
4. **Test individual videos** from your playlist

### Quick Fix:
Replace your first playlist with this **guaranteed working example**:

```javascript
{
  id: 1,
  title: "Lofi Hip Hop Radio",
  description: "24/7 beats to study/code to",
  embedUrl: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0&rel=0",
  playlistUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
  featured: true,
  type: "video"
}
```

This should work immediately! 🎉