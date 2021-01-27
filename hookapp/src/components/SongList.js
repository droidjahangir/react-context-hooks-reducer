import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ])
  const [age, setAge] = useState(20)
  const addSong = (title) => {
    setSongs([ ...songs, { title, id: uuidv4() }])
  }

  // this useEffect hooks ran when component start up initially and when update any state.
  useEffect(() => {
    console.log('useEffect hook ran ', songs)
  }, [songs])

  // in second argument we specifies which field we can care when component updated
  useEffect(() => {
    console.log('useEffect hook ran ', age)
  }, [age])

  return (
    <div className="song-list">
      <ul>
        { songs.map(song => {
          return ( <li key={song.id}>{ song.title }</li> );
        }) }
        {/* <li>This wild darkness</li>
        <li>Memory gospel</li> */}
      </ul>
      <NewSongForm addSong={ addSong }/>
      <button onClick={ () => setAge(age+1) }>Add 1 to age: { age }</button>
    </div>
   );
}

export default SongList;