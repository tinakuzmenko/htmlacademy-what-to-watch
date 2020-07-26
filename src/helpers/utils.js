export const extend = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const sliceReviews = (reviews) => {
  const sliceIndex = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, sliceIndex);
  const secondColReviews = reviews.slice(sliceIndex, reviews.length);

  return [firstColReviews, secondColReviews];
};

export const getRatingLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  }

  if (rating >= 3 && rating < 5) {
    return `Normal`;
  }

  if (rating >= 5 && rating < 8) {
    return `Good`;
  }

  if (rating >= 8 && rating < 10) {
    return `Very good`;
  }

  if (rating === 10) {
    return `Awesome`;
  }

  return null;
};

export const getRunTimeFormat = (runTime) => {
  const hours = Math.trunc(runTime / 60);
  const minutes = runTime - (hours * 60);

  return `${hours}h ${minutes}m`;
};

export const getRatingFormat = (rating) => {
  if (Math.trunc(rating) === rating) {
    return `${rating},0`;
  }

  return rating.toString().replace(`.`, `,`);
};
