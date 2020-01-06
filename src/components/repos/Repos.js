import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import { Row } from 'reactstrap';

const Repos = ({ repos }) => {
  return (
    <div className='mt-3'>
      <h3>Recent repositories</h3>
      <Row>
        {repos.map(repo => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </Row>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
