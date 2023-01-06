import { createContext, useReducer } from 'react';
import mapReducer from '../reducers/mapReducer';

const IpContext = createContext();

export const IpProvider = ({ children }) => {
	const initialState = {
		locationInfo: null,
	};
	const [state, dispatch] = useReducer(mapReducer, initialState);
	return (
		<IpContext.Provider
			value={{
				...state,
				dispatch,
			}}>
			{children}
		</IpContext.Provider>
	);
};

export default IpContext;
