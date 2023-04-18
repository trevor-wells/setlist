import React from 'react'
import Song from './Song'

function Setlist(props) {

    const setListDivs = props.setList.map(song => <Song key={song.id} setSetList={props.setSetList} id={song.id} song={song.song} artist={song.artist} image={song.image}/>)
    
    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {setListDivs}
        </div>
        </>
    );
}

export default Setlist;