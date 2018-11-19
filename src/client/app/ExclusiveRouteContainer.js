import React, { Component } from 'react';
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
		const { children }  = this.props;
		return (<div>
			{children}
		</div>);
	}
}

function mapStateToProps(state) {
	return {
		userid: state.user.userid,
		name: state.user.name,		
	}
}

export default withRouter(connect(mapStateToProps, { getUserInfo })(ExclusiveRouteContainer));
