import { connect } from 'react-redux';
import { scrapeWines } from '../../actions/wine_actions';
import Carousel from './carousel';

const mapStateToProps = state => {
	return({ wines: state.wines });
};

const mapDispatchToProps = dispatch => ({
	getWines: () => dispatch(scrapeWines())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Carousel);