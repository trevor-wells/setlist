import React from 'react'
import Song from "./Song"

function SongList(props) {

    const songDivs = props.songsData.map(song => <Song key={song.id} setSetList={props.setSetList} id={song.id} song={song.song} artist={song.artist} image={song.image}/>)

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {songDivs}
        </div>
        </>
    );
}

export default SongList;