var dispatcher = require('./Dispatcher');
var merge = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {

	/**
	 * A bridge function between the views and the dispatcher, marking
	 * the action as a view action. Another variant here could be
	 * handleServerAction.
	 * @param  {object} action The data coming from the view.
	 */
	handleViewAction: function(action) {
		this.dispatch({
			action: action,
			source: 'VIEW_ACTION'
		});
	}
});

module.exports = AppDispatcher;
