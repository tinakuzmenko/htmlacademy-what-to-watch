import * as React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentActiveItem: props.defaultActiveItem,
      };

      this._handleItemClick = this._handleItemClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          currentActiveItem: this.props.defaultActiveItem,
        });
      }
    }

    _handleItemClick(activeItem) {
      this.setState({
        currentActiveItem: activeItem,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onItemClick={this._handleItemClick}
          currentActiveItem={this.state.currentActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
