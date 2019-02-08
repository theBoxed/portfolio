import React, { Component } from 'react';
import Header from './Header';
import SocialLinks from './Social';
import { MainStyles } from '../styles';

class Layout extends Component {
  finishLoading = () => this.setState({ isLoading: false });

  render() {
    const { children } = this.props;
    return (
      <div>
        <MainStyles />
          <div>
          <Header />}
            <SocialLinks />
            {children}
          </div>
      </div>
    );
  }
}

export default Layout;
