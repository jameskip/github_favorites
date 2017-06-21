import React from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Search from './Search';
import Favorites from './Favorites';


injectTapEventPlugin();

const store = configureStore();


export default function Layout() {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <div>
          <Toolbar>
            <ToolbarTitle text="Github Favorites" />
          </Toolbar>
          <Search />
          <Favorites />
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node
};
