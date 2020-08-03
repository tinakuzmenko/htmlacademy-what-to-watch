import * as React from 'react';

const MovieNav = ({navTabs, currentActiveItem, onItemClick}) => {
  const tabs = Object.values(navTabs);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab) => {
          return (
            <li
              key={tab}
              className={`movie-nav__item ${tab === currentActiveItem ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onItemClick(tab);
                }}
              >{tab}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MovieNav;
