import React from 'react'

function Song(props) {

    function addToSetList(){
        const newSong = {
            id: props.id,
            artist: props.artist,
            song: props.song,
            image: props.image
        }

        props.setSetList(prevSetList => {
            if (!prevSetList.find(song => song.id === newSong.id)){
                return([
                ...prevSetList,
                newSong
                ])
            }
            else
                return([...prevSetList])
        })
    }
    return(
        <div className="song" onClick={addToSetList}>
            <img src={props.image}/>
            <div className="song-info">
                <h3>{props.song}</h3>
                <h4>{props.artist}</h4>
            </div>
            <button onClick={()=> console.log("Delete clicked...")}>X</button>
        </div>
    );
}

export default Song;