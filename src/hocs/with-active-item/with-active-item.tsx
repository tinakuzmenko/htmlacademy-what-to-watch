import * as React from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  defaultActiveItem: string;
  onItemClick(): void;
}

interface WithActiveItemState {
  currentActiveItem: string;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, WithActiveItemState> {

    constructor(props) {
      super(props);

      this.state = {
        currentActiveItem: props.defaultActiveItem,
      };

      this.handleItemClick = this.handleItemClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          currentActiveItem: this.props.defaultActiveItem,
        });
      }
    }

    private handleItemClick(activeItem) {
      this.setState({
        currentActiveItem: activeItem,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onItemClick={this.handleItemClick}
          currentActiveItem={this.state.currentActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
