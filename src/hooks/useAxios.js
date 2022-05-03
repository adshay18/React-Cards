import { useState } from 'react';
import axios from 'axios';

const useAxios = (baseURL, specifier) => {
	const [ data, setData ] = useState([]);

	const getData = async () => {
		try {
			const response = await axios.get(`${baseURL}${specifier ? specifier + '/' : ''}`);
			setData((data) => [ ...data, response.data ]);
		} catch (err) {
			console.log(err);
		}
	};
	return [ data, getData ];
};

export default useAxios;
