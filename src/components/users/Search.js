import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'danger');
    } else {
      searchUsers(text);
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
      {showClear && (
        <Button
          color='success'
          block
          onClick={clearUsers}
          className='mt-3 mb-5'
        >
          Clear
        </Button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
