import {
	Headerstyle,
	Form,
	H1,
	H2,
	H3,
	Button,
	Search,
	LocatioInf,
	Details,
} from '../styledComponents/Mystyles';
import { useContext, useState, useEffect } from 'react';
import IpContext from '../context/IpContext';
import { getIp, getOriginIp } from '../mapActions/actions';

const Header = () => {
	const { dispatch, locationInfo } = useContext(IpContext);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const getOriginDetails = async () => {
			const data = await getOriginIp();
			dispatch({ type: 'GET_ORIGIN_DETAILS', payload: data });
		};
		getOriginDetails();
		// eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const getDetails = async () => {
			const data = await getIp(search);
			dispatch({ type: 'GET_NEW_DETAILS', payload: data });
		};
		getDetails();

		setSearch('');
	};

	return (
		<Headerstyle>
			<H1>IP Address Tracker</H1>
			<Form onSubmit={handleSubmit}>
				<Search onChange={handleChange} value={search} />
				<Button></Button>
			</Form>
			<LocatioInf>
				{locationInfo && (
					<>
						<Details>
							<H2>IP ADDRESS</H2>
							<H3>{locationInfo.ip}</H3>
						</Details>
						<Details>
							<H2>LOCATION</H2>
							<H3>
								{`${locationInfo.location.city}, ${locationInfo.location.region}	${locationInfo.location.postalCode}`}
							</H3>
						</Details>
						<Details>
							<H2>TIMEZONE</H2>
							<H3>UTC {locationInfo.location.timezone}</H3>
						</Details>
						<Details style={{ borderRight: '0', marginBottom: '0' }}>
							<H2>ISP</H2>
							<H3>{locationInfo.isp}</H3>
						</Details>
					</>
				)}
			</LocatioInf>
		</Headerstyle>
	);
};

export default Header;
