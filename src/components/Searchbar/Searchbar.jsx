import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  InputStyle,
  SearchButton,
  SearchForm,
  SearchbarStyle,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      toast.info(
        'Sorry, but the search field cannot be empty, please enter your query'
      );
      return;
    }

    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <SearchbarStyle>
        <SearchForm onSubmit={this.handleSubmit}>
          <InputStyle
            onChange={this.handleInputChange}
            value={value}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />

          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </SearchbarStyle>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
