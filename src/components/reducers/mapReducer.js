const mapReducer = (state, action) => {
	switch (action.type) {
		case 'GET_ORIGIN_DETAILS':
			return {
				...state,
				locationInfo: action.payload,
			};
		case 'GET_NEW_DETAILS':
			return {
				...state,
				locationInfo: action.payload,
			};
		default:
			return state;
	}
};

export default mapReducer;
