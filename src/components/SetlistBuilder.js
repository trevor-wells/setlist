import React, {useState, useEffect} from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

function SetlistBuilder() {

    const [songsData, setSongsData] = useState([])
    const [setList, setSetList] = useState([])

    console.log(`Setlist: ${setList}`)
    
    useEffect(() => {
        fetch("http://localhost:3110/tracks")
        .then(response => response.json())
        .then(data => setSongsData(data))
    }, [])

    return(
        <div className="builder">
            <SongList songsData={songsData} setSetList={setSetList}/>
            <div className="vl"></div>
            <Setlist setList={setList}/>
        </div>
    );
}

export default SetlistBuilder;