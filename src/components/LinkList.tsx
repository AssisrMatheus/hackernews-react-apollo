import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

interface Data {
  feed: {
    links: { id: string; createdAt: string; url: string; description: string }[];
  };
}

class LinkList extends Component {
  render() {
    return (
      <Query<Data> query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          if (data) {
            const linksToRender = data.feed.links;

            return (
              <>
                {linksToRender.map(link => (
                  <Link key={link.id} link={link} />
                ))}
              </>
            );
          }
          return null;
        }}
      </Query>
    );
  }
}

export default LinkList;
