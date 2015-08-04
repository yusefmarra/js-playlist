var Song = require('./song');

var Playlist = function(songs){
  this.songs = songs || [];
  this.playing;
};

Playlist.prototype.isEmpty = function () {
  if (this.songs.length){
    return false;
  } else {
    return true;
  }
};

Playlist.prototype.addSong = function(song){
  this.songs.push(song);
}

Playlist.prototype.songNames = function(){
  var songNames = [];
  for (var i = 0; i < this.songs.length; i++) {
    songNames.push(this.songs[i].name);
  }
  return songNames;
}

Playlist.prototype.removeSong = function(song){
  this.songs.splice(this.songs.indexOf(song),1);
}

Playlist.prototype.totalLength = function(){
  var total = 0;
  for (var i = 0; i < this.songs.length; i++) {
    total += this.songs[i].length;
  }
  return total;
}

Playlist.prototype.swap = function(first, second) {
    var firstIndex = this.songs.indexOf(first);
    this.songs[this.songs.indexOf(second)] = first;
    this.songs[firstIndex] = second;
}

Playlist.prototype.nowPlaying = function() {
  if (this.playing){
    return this.playing;
  } else {
    return null;
  }
  // return this.playing;
}

Playlist.prototype.play = function() {
  if (!this.playing) {
    this.playing = this.songs[0];
  }
}

Playlist.prototype.next = function() {
  this.playing = this.songs[this.songs.indexOf(this.playing)+1]
}

Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
