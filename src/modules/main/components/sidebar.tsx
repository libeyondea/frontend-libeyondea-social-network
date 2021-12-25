import classNames from 'classnames';
import LinkComponent from 'common/components/Link/components';
import { TableIcon, CogIcon, DotsHorizontalIcon } from '@heroicons/react/outline';
import { appSidebarRequestAction } from 'store/app/actions';
import ImageComponent from 'common/components/Image/components';
import config from 'config';
import * as routeConstant from 'constants/route';
import useAppDispatch from 'hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import NavLinkComponent from 'common/components/NavLink/components';
import { selectAppSidebar } from 'store/app/selectors';
import useAppSelector from 'hooks/useAppSelector';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';

type Props = {};

const SidebarComponent: React.FC<Props> = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const appSidebar = useAppSelector(selectAppSidebar);

	return (
		<div className="sidebar flex">
			<div
				className="sidebar-event fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden block"
				onClick={() => dispatch(appSidebarRequestAction(true))}
			></div>
			<div
				className={classNames(
					'sidebar-menu fixed inset-y-0 left-0 max-w-full flex transition-all ease-in-out duration-500 flex-shrink-0 z-30 ml-0 lg:-ml-64'
				)}
			>
				<div className="flex flex-col w-64 bg-gray-800">
					<div className="bg-gray-800 flex flex-col flex-shrink-0 fixed w-64 z-50 py-3 px-8">
						<div className="flex">
							<button
								className="text-gray-300 inline-flex items-center justify-center rounded-md focus:outline-none"
								onClick={() => dispatch(appSidebarRequestAction(!appSidebar))}
							>
								<AiOutlineMenu className="h-6 w-6" />
							</button>
							<LinkComponent to="/" className="flex items-center text-left focus:outline-none ml-4">
								<ImageComponent className="rounded-full h-8 w-8" src={config.LOGO_URL} alt={config.APP_NAME} />
								<h2 className="text-lg text-white font-bold tracking-tighter cursor-pointer ml-1">
									{config.APP_NAME}
								</h2>
							</LinkComponent>
						</div>
					</div>
					<div className="flex flex-col overflow-y-auto p-4 mt-14">
						<nav className="flex-1 bg-gray-800">
							<ul className="space-y-3">
								<li>
									<NavLinkComponent
										to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_HOME}`}
										className="inline-flex items-center w-full px-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
										activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
										notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
									>
										<AiFillHome className="w-6 h-6" />
										<span className="ml-4">Home</span>
									</NavLinkComponent>
								</li>
								<li>
									<NavLinkComponent
										to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_BOOKMARK}`}
										className="inline-flex items-center w-full px-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
										activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
										notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
									>
										<TableIcon className="w-6 h-6" />
										<span className="ml-4">Bookmarks</span>
									</NavLinkComponent>
								</li>
								{/* <li className="px-4 pt-6 pb-2 font-medium uppercase text-gray-200">Settings</li> */}
								<li>
									<Disclosure
										defaultOpen={
											!![
												`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_SETTING}`,
												`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_OTHER}`
											]
												.map((href) => href)
												.includes(location.pathname)
										}
									>
										{({ open }) => (
											<>
												<Disclosure.Button className="inline-flex items-center w-full px-4 py-2 mb-4 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-900 hover:text-white text-gray-400">
													<CogIcon className="w-6 h-6" />
													<span className="ml-4">Settings</span>
													<ChevronLeftIcon
														className={classNames('w-6 h-6 ml-auto', {
															'transform -rotate-90': open
														})}
													/>
												</Disclosure.Button>
												<Disclosure.Panel as="ul" className="space-y-4">
													<li>
														<NavLinkComponent
															to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_SETTING}`}
															className="inline-flex items-center w-full pl-8 pr-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
															activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
															notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
														>
															<CogIcon className="w-6 h-6" />
															<span className="ml-4">Settings</span>
														</NavLinkComponent>
													</li>
													<li>
														<NavLinkComponent
															to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_OTHER}`}
															className="inline-flex items-center w-full pl-8 pr-4 py-2 text-base transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline"
															activeClassName="bg-gray-500 hover:bg-gray-500 font-bold text-white"
															notActiveClassName="hover:bg-gray-900 hover:text-white text-gray-400"
														>
															<DotsHorizontalIcon className="w-6 h-6" />
															<span className="ml-4">Other</span>
														</NavLinkComponent>
													</li>
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								</li>
							</ul>
						</nav>
						<div className="flex">
							<div className="px-4 py-2">
								<small className="text-gray-500">
									Copyright &copy; {new Date().getFullYear()}
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://libeyondea.com"
										className="font-bold ml-1"
									>
										{config.APP_NAME}
									</a>
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SidebarComponent;
