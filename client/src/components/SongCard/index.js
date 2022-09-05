import react from 'react';
import './songCard.css'
function SongCard({title, artist, albumArtUrl, album}) {
    return (
        <div className ='recommended-container'>
        <div className = 'card-container'>
            <div className= 'image-container'>
            <img src={albumArtUrl} alt='albumart'/>
            </div>
            <div className = 'card-content'>
            <div className= 'song-title'>
                <h2>{title}</h2>
            </div>
            <div className= 'song-artist'>
                <h4>{artist}</h4>
            </div>
            <div className= 'Album'>
                <h3>{album}</h3>
            </div>
            </div>
            
        </div>
        <div className = 'card-container'>
            <div className= 'image-container'>
            <img src={albumArtUrl} alt='albumart'/>
            </div>
            <div className = 'card-content'>
            <div className= 'song-title'>
                <h2>{title}</h2>
            </div>
            <div className= 'song-artist'>
                <h4>{artist}</h4>
            </div>
            <div className= 'Album'>
                <h3>{album}</h3>
            </div>
            </div>
            
        </div>
        <div className = 'card-container'>
            <div className= 'image-container'>
            <img src={albumArtUrl} alt='albumart'/>
            </div>
            <div className = 'card-content'>
            <div className= 'song-title'>
                <h2>{title}</h2>
            </div>
            <div className= 'song-artist'>
                <h4>{artist}</h4>
            </div>
            <div className= 'Album'>
                <h3>{album}</h3>
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default SongCard;