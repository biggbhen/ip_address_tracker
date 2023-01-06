const api_key = process.env.REACT_APP_MAP_API_KEY,
	api_url = process.env.REACT_APP_MAP_URL,
	version = 'v2';

export const getIp = async (ipCode) => {
	try {
		const ip_url = `${api_url}/${version}/country,city?apiKey=${api_key}&ipAddress=${ipCode}`;
		const response = await fetch(ip_url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
export const getOriginIp = async () => {
	try {
		const ip_url = `${api_url}/${version}/country,city?apiKey=${api_key}&ipAddress=8.8.8.8`;
		const response = await fetch(ip_url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.trace(error);
	}
};
