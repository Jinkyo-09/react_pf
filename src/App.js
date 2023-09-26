import './styles/Global.scss';
import { Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';

function App() {
	return (
		<>
			<Header />
			<Route path='/department'>
				<Department />
			</Route>
			<Route path='/youtube'>
				<Youtube />
			</Route>
		</>
	);
}

export default App;
