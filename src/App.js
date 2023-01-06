import Header from './components/header/Header';
import './App.css';
import Map from './components/map/Map';
import { IpProvider } from './components/context/IpContext';

function App() {
	return (
		<IpProvider>
			<Header />
			<Map />
		</IpProvider>
	);
}

export default App;
