import NavbarComponent from './navbar';
import SidebarComponent from './sidebar';
import MainRouter from './router';
import classNames from 'classnames';
import { selectAppSidebar } from 'store/app/selectors';
import * as appStateConstant from 'constants/appState';
import useAppSelector from 'hooks/useAppSelector';
import { useRoutes } from 'react-router-dom';

type Props = {};

const MainComponent: React.FC<Props> = () => {
	const appSidebar = useAppSelector(selectAppSidebar);
	console.log('Main');

	return (
		<div
			className={classNames({
				'sidebar-collapse': appSidebar === appStateConstant.APP_STATE_SIDEBAR_YES
			})}
		>
			<NavbarComponent />
			<SidebarComponent />
			<div className="main mt-14 transition-all ease-in-out duration-500">
				<div className="xl:container mx-auto p-4">{useRoutes(MainRouter)}</div>
			</div>
		</div>
	);
};

export default MainComponent;
