import constants from '../constants';
const { initialState, types } = constants;

const currentVideo = ( state = initialState, action ) => {
	let newState;
	switch(action.type) {
		case types.REQUEST_VIDEO:
			newState = Object.assign({}, state, {
				isFetching: true
			})
			return newState;
		case types.RECEIVE_VIDEO:
			newState = Object.assign({}, state, {
				isFetching: false,
				currentVideo: action.currentVideo
			})
			return newState;
		default:
			return state;
	}
}

export default currentVideo;