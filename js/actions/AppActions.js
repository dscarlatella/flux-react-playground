var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	create: function(objectToCreate) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.CREATE,
			objectToCreate: objectToCreate
		});
	},
	destroy: function(id) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.DESTROY,
			id: id
		});
	}
};

module.exports = TodoActions;
