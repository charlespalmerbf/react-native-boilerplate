import React from 'react';

import Popup from '../Components/Popup';
import {PopupContext} from './PopupContext';

class PopupProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: null,
    };
  }

  showPopup(message) {
    this.setState({
      popup: {message},
    });
  }

  dismissPopup() {
    this.setState({popup: null});
  }

  render() {
    const popup = this.state.popup;

    return (
      <PopupContext.Provider
        value={{
          showPopup: m => this.showPopup(m),
        }}>
        {this.props.children}
        {this.state.popup && (
          <Popup title={popup.message} onDismiss={() => this.dismissPopup()} />
        )}
      </PopupContext.Provider>
    );
  }
}

export default PopupProvider;
