import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Badge
} from 'reactstrap';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    // match.params is used to retrieve params from url. In this case, retrieve username to pass as param for getUser and getUserRepos.
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    html_url,
    followers,
    following,
    public_repos,
    hireable
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-info'>
        <i className='fas fa-long-arrow-alt-left mr-2'></i>
        Return to search
      </Link>
      <Row>
        <Col md='6' className='my-3'>
          <Card>
            <CardHeader className='d-flex justify-content-between'>
              <CardTitle className='font-weight-bold m-0'>{login}</CardTitle>
              <CardText className='m-0'>
                Hireable:{' '}
                {hireable ? (
                  <i className='fas fa-check text-success' />
                ) : (
                  <i className='fas fa-times-circle text-danger' />
                )}
              </CardText>
            </CardHeader>
            <CardBody className='text-center pt-3 m-0 pb-0'>
              <img
                src={avatar_url}
                alt='User avatar'
                className='rounded-circle'
                style={{ width: '150px' }}
              />
              <CardTitle className='mt-3'>{name}</CardTitle>
              <hr className='mt-3 mb-0' />
            </CardBody>
            <CardBody className='text-center mx-auto py-3'>
              <Badge color='danger' className='mx-1 px-2 py-2'>
                Followers: {followers}
              </Badge>
              <Badge color='success' className='mx-1 px-2 py-2'>
                Following: {following}
              </Badge>
              <Badge color='primary' className='mx-1 px-2 py-2'>
                Public Repos: {public_repos}
              </Badge>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' className='my-3'>
          <Card>
            <CardHeader className='d-flex justify-content-between'>
              <CardTitle className='font-weight-bold m-0'>Basic info</CardTitle>
            </CardHeader>
            <CardBody className='pt-3 m-0 pb-0'>
              <CardText className='m-0'>
                {bio ? (
                  bio
                ) : (
                  <strong>
                    Bio: <i className='fas fa-question text-info' />
                  </strong>
                )}
              </CardText>
              <CardText className='m-0'>
                <strong>Location: </strong>
                {location ? (
                  location
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong>Company: </strong>
                {company ? (
                  company
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong>Website: </strong>
                {blog ? blog : <i className='fas fa-question text-info' />}
              </CardText>
              <hr className='mt-3 mb-0' />
              <CardBody className='text-right py-3 px-0'>
                <a
                  href={html_url}
                  className='btn text-light btn-info'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fas fa-angle-double-right mr-2'></i>
                  Visit profile
                  <i className='fas fa-angle-double-right ml-2'></i>
                </a>
              </CardBody>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
