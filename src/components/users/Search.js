import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Button } from 'reactstrap';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'danger');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input
              type='text'
              name='text'
              placeholder='Search users...'
              value={this.state.text}
              onChange={this.onChange}
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
  }
}

export default Search;
