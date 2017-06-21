import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { delRepo } from '../actions';

class Favorites extends React.Component {

  render() {
    let favs;
    if (Array.isArray(this.props.favorite.arr)) {
      favs = this.props.favorite.arr.map((fav) => (
        <span key={fav.id}>
          <a style={{ textDecoration: 'none' }} href={fav.url}>
            <ListItem
              primaryText={fav.name}
              secondaryText={fav.description}
            />
          </a>
          <RaisedButton
            label="Remove"
            value={fav.id}
            onTouchTap={() => this.props.delRepo(fav.id)}
          />
        </span>
      ));
    }

    return (
      <div>
        <List>
          {favs}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorite: state.favorite
});

const matchDispatchToProps = dispatch => bindActionCreators({ delRepo }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Favorites);
