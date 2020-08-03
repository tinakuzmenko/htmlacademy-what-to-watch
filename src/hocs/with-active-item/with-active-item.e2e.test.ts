import * as React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './with-active-item';
import {movie} from '../../helpers/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {onItemClick} = props;

  return (
    <div>
      <a
        onClick={onItemClick}
      ></a>
    </div>
  );
};

describe(`HOC withActiveItem e2e tests`, () => {
  it(`Should return correct currentActiveItem by default`, () => {
    const MockComponentWrapped = withActiveItem(MockComponent);

    const wrapper = shallow(
        <MockComponentWrapped
          currentMovie={movie}
          defaultActiveItem={`Overview`}
        />
    );

    expect(wrapper.props().currentActiveItem).toBe(`Overview`);
  });

  it(`Should change active item on HOC's callback`, () => {
    const MockComponentWrapped = withActiveItem(MockComponent);
    const onItemClick = jest.fn((args) => args);

    const wrapper = mount(
        <MockComponentWrapped
          currentMovie={movie}
          defaultActiveItem={`Overview`}
          onItemClick={onItemClick}
        />
    );

    expect(wrapper.state().currentActiveItem).toBe(`Overview`);

    wrapper.instance()._handleItemClick(`Details`);

    expect(wrapper.state().currentActiveItem).toEqual(`Details`);
  });
});
