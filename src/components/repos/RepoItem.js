import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

export const RepoItem = ({ repo }) => {
  return (
    <Col md='6' className='my-2'>
      <a
        href={repo.html_url}
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-lg btn-info btn-block text-light text-left py-1'
      >
        {repo.name}
      </a>
    </Col>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
