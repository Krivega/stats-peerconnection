const now = Date.now();

const getTime = (increment = 0) => {
  return now + increment * 1000;
};

export default getTime;
