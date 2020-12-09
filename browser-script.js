const getTrack = () => {
  const { title, artist, album } = navigator.mediaSession.metadata;
  return { title, artist, album };
};
let currentTrack = {};
const checkLoop = () => {
  if (JSON.stringify(currentTrack) !== JSON.stringify(getTrack())) {
    currentTrack = getTrack();
    document.title = `${currentTrack.title} | ${currentTrack.artist} | ${currentTrack.album}`;
  }; window.setTimeout(checkLoop, 100);
};

checkLoop();
