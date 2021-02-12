import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

class GamesPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={'Games'}>
        <h1>Hello games here</h1>
        <Link to='/page-2/'>Go to page 2</Link>
      </Layout>);
  }
};

export default GamesPage;
