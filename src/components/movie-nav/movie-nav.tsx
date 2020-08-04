import * as React from 'react';
import {NavTabs} from '../../helpers/constants';

interface MovieNavInterface {
  currentActiveItem: string;
  onItemClick(item: string): void;
}

const MovieNav: React.FC<MovieNavInterface> = ({
  currentActiveItem,
  onItemClick
}: MovieNavInterface) => {
  const tabs = Object.values(NavTabs);

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
