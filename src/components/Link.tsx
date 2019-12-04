import React, { Component } from 'react';

interface LinkProps {
  link: {
    description: string;
    url: string;
  };
}

class Link extends Component<LinkProps> {
  render() {
    const { link } = this.props;
    return (
      <div>
        <div>
          {link.description} ({link.url})
        </div>
      </div>
    );
  }
}

export default Link;
