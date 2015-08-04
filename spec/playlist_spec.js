var Song = require('../song');
var Playlist = require('../playlist');

describe('Playlist', function() {

  var itHadToBeYou = new Song('It had to be you', 100);
  var butNotForMe = new Song('But Not for Me', 50);
  var autumnInNewYork = new Song('Autumn In New York', 25);

  it("is empty by default", function() {
    var playlist = new Playlist();

    expect(playlist.isEmpty()).toEqual(true);
  });

  it("allows you to add a song", function() {
    var playlist = new Playlist();

    playlist.addSong(itHadToBeYou)

    expect(playlist.isEmpty()).toEqual(false);
  });

  it("allows you to see all song names in the order they were added", function() {
    var playlist = new Playlist();

    expect(playlist.songNames()).toEqual([]);

    playlist.addSong(itHadToBeYou)
    expect(playlist.songNames()).toEqual(['It had to be you']);

    playlist.addSong(butNotForMe)
    expect(playlist.songNames()).toEqual([
      'It had to be you',
      'But Not for Me'
    ]);
  });

  it("allows you remove a song from the playlist", function() {
    var playlist = new Playlist();

    playlist.addSong(itHadToBeYou);
    expect(playlist.isEmpty()).toEqual(false);

    playlist.addSong(butNotForMe);

    expect(playlist.songNames()).toEqual([
      'It had to be you',
      'But Not for Me',
    ]);

    playlist.removeSong(itHadToBeYou)
    expect(playlist.songNames()).toEqual([
      'But Not for Me',
    ]);
    expect(playlist.isEmpty()).toEqual(false);

    playlist.removeSong(butNotForMe)

    expect(playlist.songNames()).toEqual([]);
    expect(playlist.isEmpty()).toEqual(true);
  });


  it("tells you the total length of the playlist", function() {
    var playlist = new Playlist();

    playlist.addSong(itHadToBeYou);
    expect(playlist.totalLength()).toEqual(100);

    playlist.addSong(butNotForMe);
    playlist.addSong(autumnInNewYork);

    playlist.swap(itHadToBeYou, butNotForMe);
    expect(playlist.totalLength()).toEqual(175);
  });


  it("allows you to swap songs", function() {
    var playlist = new Playlist();

    playlist.addSong(itHadToBeYou);
    playlist.addSong(butNotForMe);
    playlist.addSong(autumnInNewYork);

    playlist.swap(itHadToBeYou, butNotForMe);
    expect(playlist.songNames()).toEqual([
      'But Not for Me',
      'It had to be you',
      'Autumn In New York'
    ]);

    playlist.swap(itHadToBeYou, autumnInNewYork);
    expect(playlist.songNames()).toEqual([
      'But Not for Me',
      'Autumn In New York',
      'It had to be you'
    ]);
  });

  it("allows you to play a song", function () {
    var playlist = new Playlist();
    playlist.addSong(itHadToBeYou);
    playlist.addSong(butNotForMe);
    playlist.addSong(autumnInNewYork);

    expect(playlist.nowPlaying()).toEqual(null);

    playlist.play();

    expect(playlist.nowPlaying()).toEqual(itHadToBeYou);
  });

  it("allows you go to the next song", function () {
    var playlist = new Playlist();
    playlist.addSong(itHadToBeYou);
    playlist.addSong(butNotForMe);
    playlist.addSong(autumnInNewYork);
  
    playlist.play();
    playlist.next();
    expect(playlist.nowPlaying()).toEqual(butNotForMe);

    playlist.next();
    expect(playlist.nowPlaying()).toEqual(autumnInNewYork);

    playlist.next();
    expect(playlist.nowPlaying()).toEqual(null);
  });

});
