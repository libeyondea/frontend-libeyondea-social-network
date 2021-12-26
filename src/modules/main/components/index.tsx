import NavbarComponent from './navbar';
import SidebarComponent from './sidebar';
import MainRouter from './router';
import classNames from 'classnames';
import { selectAppSidebar } from 'store/app/selectors';
import useAppSelector from 'hooks/useAppSelector';
import { useRoutes } from 'react-router-dom';

type Props = {};

const MainComponent: React.FC<Props> = () => {
	const appSidebar = useAppSelector(selectAppSidebar);
	console.log('Main');

	return (
		<div
			className={classNames({
				'sidebar-collapse': appSidebar
			})}
		>
			<NavbarComponent />
			<SidebarComponent />
			<div className="main mt-14 transition-all ease-in-out duration-500">
				<div className="xl:container mx-auto px-0 sm:px-4 py-4">
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
						<div className="col-span-2 sm:col-span-2 md:col-span-3">{useRoutes(MainRouter)}</div>
						<div className="col-span-2 sm:col-span-1 md:col-span-1 hidden sm:block">Aside</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainComponent;
