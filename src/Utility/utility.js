export const randomInRange = (from, to) => {
  var r = Math.random();
  return Math.floor(r * (to - from) + from);
};
