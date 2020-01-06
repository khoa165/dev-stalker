import React, { useState, useContext } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            type='text'
            name='text'
            placeholder='Search users...'
            value={text}
            onChange={onChange}
          />
        </FormGroup>
        <Button color='info' block>
          Search
        </Button>
      </Form>
      {githubContext.users.length > 0 && (
        <Button
          color='success'
          block
          onClick={githubContext.clearUsers}
          className='mt-3 mb-5'
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default Search;
