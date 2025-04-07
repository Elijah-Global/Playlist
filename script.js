// Step1.
const playlist = [
    {title: "Why Love", artist: "Asake", duration: "3:30", genre: "Pop"},
    {title: "Update", artist: "Burna Boy", duration: "4:27", genre: "Rock"},
    {title: "Money", artist: "Teni", duration: "3:26", genre: "Pop"},
    {title: "Slow", artist: "Wiskid", duration: "3:25", genre: "Pop"},
    {title: "Moving", artist: "Omah Lay", duration: "6:50", genre: "Rock"},
    {title: "Unavailable", artist: "Davido", duration: "5:49", genre: "Pop"},
];
console.table(playlist);

// Step2.
for (i = 0; i < playlist.length; i++) {
    console.log(`Now playing: ${playlist[i].title} by ${playlist[i].artist} (${playlist[i].duration}) - Genre: ${playlist[i].genre}`);
    
}

// Step3.
const rockSongs = playlist.filter(function  (play) {
    return play.genre === "Rock"
})  
console.table(rockSongs);



const duration = playlist.filter(function (track) {
    return track.duration >= "5:0";
});
console.table(duration);

// Step4.
const upperCasePlaylist = playlist.map(function (play){
    return {
        title: play.title.toUpperCase(),
        artist: play.artist.toUpperCase(),
        duration: play.duration,
        genre: play.duration,
        playCount: 0
    } 
})
console.table(upperCasePlaylist);

// Step5.
function formatDuration(duration) {
    const [minutes, seconds] = duration.split(':')

    const min = parseInt(minutes)
    const sec = parseInt(seconds)
    let result = `${min} minute${min=== 1 ? '' : 's'}`;
    if (sec > 0) {
        result += ` and ${sec} second${sec === 1 ? '' : 's'}`;
    }
    return result
}

// playlist.forEach(song => {
//     console.log(`"${song.title}" duration: ${formatDuration(song.duration)}`);
// });

playlist.forEach(function (song) {
    console.log(`"${song.title}" duration: ${formatDuration(song.duration)}`); 
})

// Step6.
function findSong(searchTerm){
    
     // Convert the search term to lowercase
  const lowerSearchTerm = searchTerm.toLowerCase();

  // Filter the songs where the title or artist includes the search term
  const result = playlist.filter (song =>
    song.title.toLowerCase().includes(lowerSearchTerm) ||
    song.artist.toLowerCase().includes(lowerSearchTerm)
  );

//   const result = playlist.filter(function (song) {
//     song.title.toLowerCase().includes(lowerSearchTerm) ||
//     song.artist.toLowerCase().includes(lowerSearchTerm)
//   });
  return result;
}
console.log(findSong("Unavailable"));

// Step7.
function sortPlaylist(playlist) {
    // Sort the playlist alphabetically by the title
    playlist.sort((a, b) => {
      // Compare the titles of two songs, converting them to lowercase for case-insensitive comparison
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1; // a comes before b
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;  // b comes before a
      }
      return 0; // titles are equal
    });
  
    return playlist;
  }
  console.log(sortPlaylist(playlist));

// Step8.
function playRandomSong() {
  // Generate a random index from 0 to the length of the playlist - 1
  const randomIndex = Math.floor(Math.random() * playlist.length);
  
  // Get the random song using the random index
  const randomSong = playlist[randomIndex];

  // return `Now playing: "${randomSong.title}" by ${randomSong.artist}`
  console.log(`Now playing: "${randomSong.title}" by ${randomSong.artist}`);
}; 
playRandomSong();
// console.log(playRandomSong());










