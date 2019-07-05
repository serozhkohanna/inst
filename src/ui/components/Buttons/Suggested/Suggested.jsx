import React, { Component } from 'react';
import styles from './Suggested.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Suggested extends Component {
	static defaultProps ={
		followers:[]
	}

	render () {
		return <section>
			<button className = {this.props.followers ? styles.followed : styles.unfollowed } > &#x2193;</button>
		</section>;
	}
}

const mapStateToProps = ({ guest, user }) => {
	return {
		followers: guest.followers.some((item) => item === user.userName)
	};
};
export default connect(mapStateToProps)(Suggested);


	
