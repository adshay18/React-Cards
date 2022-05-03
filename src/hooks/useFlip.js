import { useState } from 'react';

const useFlip = (initialState = true) => {
	const [ isUp, setIsUp ] = useState(initialState);
	const flipCard = () => {
		setIsUp((isUp) => !isUp);
	};
	return [ isUp, flipCard ];
};

export default useFlip;
