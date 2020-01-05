import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <Col xs='6' lg='3' xl='2' className='my-3'>
      <Card>
        <CardImg
          top
          src={avatar_url}
          alt='User avatar'
          className='border border-info'
        />
        <CardBody className='text-center'>
          <CardTitle>{login}</CardTitle>
          <a
            href={html_url}
            className='btn btn-info btn-sm btn-block my-1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit
          </a>
        </CardBody>
      </Card>
    </Col>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
