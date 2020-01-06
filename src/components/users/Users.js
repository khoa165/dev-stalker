import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { Row } from 'reactstrap';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div id='users'>
        <Row>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </Row>
      </div>
    );
  }
};

export default Users;
