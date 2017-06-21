import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import * as actions from '../actions';

const handleSearch = (query, dispatch) => {
  axios(`https://api.github.com/repos/${query}`)
    .then((response) => {
      const repo = {
        name: response.data.full_name,
        description: response.data.description,
        url: response.data.git_url,
        id: response.data.id
      };
      dispatch(actions.favRepo(repo));
    })
    .catch((err) => {
      console.error(err);
    });
};


const Search = ({ search, dispatch }) => (
  <div>
    <TextField
      hintText="user/repo"
      value={search}
      onChange={e => dispatch(actions.searchTerm(e.target.value))}
    />
    <RaisedButton
      type="submit"
      label="Add"
      onTouchTap={() => handleSearch(search, dispatch)}
    />
  </div>
);

const mapStateToProps = state => ({
  search: state.search,
  favorites: state.favorites
});

export default connect(mapStateToProps)(Search);
