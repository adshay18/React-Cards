import { useState } from 'react';
import axios from 'axios';

const useAxios = (baseURL) => {
	const [ data, setData ] = useState([]);

	const getData = async (name = '') => {
		try {
			const response = await axios.get(`${baseURL}${name ? name + '/' : ''}`);
			setData((data) => [ ...data, response.data ]);
		} catch (err) {
			console.log(err);
		}
	};
	return [ data, getData ];
};

export default useAxios;
