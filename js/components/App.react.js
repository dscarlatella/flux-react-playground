var React = require('react');
var AppStore = require('../stores/AppStore');

function getAppState() {
	return AppStore.getState();
}

var App = React.createClass({
	getInitialState: function() {
		return getAppState();
	},
	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},
	render: function() {
		return (
			<div />
		);
	},
	_onChange: function() {
		this.setState(getAppState);
	}
})

module.exports = App;