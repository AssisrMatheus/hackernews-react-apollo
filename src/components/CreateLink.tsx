import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

interface CreateLinkState {
  description: string;
  url: string;
}

class CreateLink extends Component<{}, CreateLinkState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      description: '',
      url: ''
    };
  }

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>

        <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
          {(postMutation: () => void) => (
            <button type="button" onClick={() => postMutation()}>
              Submit
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
