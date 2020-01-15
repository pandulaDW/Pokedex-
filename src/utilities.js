const shuffle_array = array => {
  let m = array.length;

  while (m) {
    let i = Math.floor(Math.random() * m--);
    let t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

export default shuffle_array;
