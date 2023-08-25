function Playlist() {
    this.songs = [];
    this.currentIndex = 0;
    this.isPlaying = false;
}

Playlist.prototype.add =  function(song) {
    this.songs.push(song);

    return this.songs;
}

Playlist.prototype.play = function() {
    this.isPlaying = true;
    const currentSong = this.songs[this.currentIndex];

    return `${currentSong} started.`;
}

Playlist.prototype.stop = function() {
    this.isPlaying = false;
    const currentSong = this.songs[this.currentIndex];

    return `${currentSong} stopped.`;
}

Playlist.prototype.next = function() {
    const previousSong = this.songs[this.currentIndex];

    if (this.currentIndex + 1 >= this.songs.length) {
        this.currentIndex = 0;
    } else {
        this.currentIndex += 1;
    }

    const nextSong = this.songs[this.currentIndex];

    return `${previousSong} stopped, ${nextSong} started.`
}

function Song(title, artist) {
    this.title = title;
    this.artist = artist;
}

Song.prototype.toString = function() {
   return this.title;
}

const playlist = new Playlist();
const songOne = new Song('First Song', 'Artist One');
const songTwo = new Song('Second Song', 'Artist Two');

playlist.add(songOne);
playlist.add(songTwo);
console.log(playlist);

console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.stop());
console.log(playlist.play());
console.log(playlist.next());