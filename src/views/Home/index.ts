import { connect } from 'react-redux';
import { getWeather } from '../../state/actions/homeAction';
import { HomeComponent } from './Home';
import { RootState } from '../../state/store';

const mapStateToProps = (state: RootState) => ({
  store: {
    ...state.homeReducer
  }
});

const mapDispatchToProps = {
  getWeather
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
