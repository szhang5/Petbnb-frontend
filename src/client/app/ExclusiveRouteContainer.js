import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { isLogin, getUserInfo } from "../redux/actions";


class ExclusiveRouteContainer extends Component {
	componentWillMount(){
		isLogin().then((response) => {
			if(!response.data.success) {
				this.props.history.push('/signin');
			} else {
				this.props.getUserInfo(response.data.email);
			}
		});
	}

	render() {
		if(!this.props.uid) {
			return <div></div>;
		}
		const { children }  = this.props;
		return (<div>
			{children}
		</div>);
	}
}

ExclusiveRouteContainer.propTypes = {
  uid:PropTypes.number,
};

ExclusiveRouteContainer.defaultProps = {
  uid: 0,
};


function mapStateToProps(state) {
	return {
		uid: state.user.uid,
		name: state.user.name,		
	}
}

export default withRouter(connect(mapStateToProps, { getUserInfo })(ExclusiveRouteContainer));
