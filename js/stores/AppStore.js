var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';
var create = function(objectToCreate) {
	return false;
};
var destroy = function(objectToDestroyId) {
	return false;
};

var AppStore = merge(EventEmitter.prototype, {
	getState: function() {
		return {};
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {Function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param  {Function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;
	var text;

	switch(action.actionType) {
		case AppConstants.CREATE:
			create(action);
			AppStore.emitChange();
			break;

		case AppConstants.DESTROY:
			destroy(action.id);
			AppStore.emitChange();
			break;
	}

	return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = AppStore;
