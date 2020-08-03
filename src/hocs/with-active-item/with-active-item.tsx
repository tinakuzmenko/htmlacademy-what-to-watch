import * as React from 'react';

interface WithActiveItemProps {
  defaultActiveItem: string;
}

interface WithActiveItemState {
  currentActiveItem: string;
}

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent<WithActiveItemProps, WithActiveItemState> {
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
