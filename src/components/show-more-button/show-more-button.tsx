import * as React from 'react';

const ShowMoreButton = ({onShowMoreButtonClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          onShowMoreButtonClick();
        }}>
          Show more
      </button>
    </div>
  );
};

export default ShowMoreButton;
