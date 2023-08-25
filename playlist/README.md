### Create a constructor function Playlist and Song.

####  Playlist should have the followings.
- Add: Pushes the passed-through song to the songs array
- Play: Plays current song based on array index and sets the song as playing using isPlaying
- Stop: Holds place in array, but calls above stop song prototype function and sets the song as not playing (isPlaying = false)
- Next: Sets the next song in the songs array, calling the above play prototype function

#### Song should take in two arguments, title and artist, which should both be added as properties when the Song constructor function is used.


const playlist = new Playlist();<br>
const songOne = new Song('First Song', 'Artist One');<br>
const songTwo = new Song('Second Song', 'Artist Two');<br>

playlist.add(songOne); <br>
playlist.add(songTwo);<br>

playlist.play(); // First Song started. <br>
playlist.next(); // First Song stopped, Second Song started. <br>
playlist.next(); // Second Song stopped, First Song started. <br>
playlist.stop(); // First Song stopped. <br>
playlist.play(); // First Song started. <br>