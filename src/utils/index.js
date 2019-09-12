export const millisecondsToTime = (milli) => {
  const milliseconds = milli % 1000;
  let seconds = Math.floor((milli / 1000) % 60);
  let minutes = Math.floor((milli / (60 * 1000)) % 60);
  seconds = seconds < 10 ? `0${seconds}`: seconds;
  minutes = minutes < 10 ? `0${minutes}`: minutes;

  return `${minutes}:${seconds}`;
}