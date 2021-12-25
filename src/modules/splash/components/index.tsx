import { getCookie } from 'helpers/cookies';
import { appInitializedRequestAction } from 'store/app/actions';
import { authCurrentRequestAction } from 'store/auth/actions';
import ImageComponent from 'common/components/Image/components';
import config from 'config';
import { selectAuthCurrent } from 'store/auth/selectors';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useNavigate, useLocation, Location } from 'react-router-dom';
import useDidMountEffect from 'hooks/useDidMountEffect';
import { signout } from 'helpers/auth';
import authService from 'services/authService';

type Props = {};

const SplashComponent: React.FC<Props> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = (location.state as { from: Location })?.from;
	const dispatch = useAppDispatch();
	const authCurrent = useAppSelector(selectAuthCurrent);

	useDidMountEffect(() => {
		dispatch(appInitializedRequestAction(true));
		const accessToken = getCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
		const initialUrl = from?.pathname;

		if (authCurrent) {
			if (initialUrl) {
				navigate(initialUrl, { replace: true });
			} else {
				navigate(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_HOME}`, { replace: true });
			}
		} else if (accessToken) {
			authService
				.me()
				.then((response) => {
					if (!response.data.success) {
						signout(navigate);
						return;
					}
					dispatch(authCurrentRequestAction(response.data.data));
					if (initialUrl) {
						navigate(initialUrl, { replace: true });
					} else {
						navigate(`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_MAIN_HOME}`, {
							replace: true
						});
					}
				})
				.catch((error) => {
					console.log(error);
					signout(navigate);
				});
		} else {
			dispatch(authCurrentRequestAction(null));
			if (initialUrl) {
				navigate(initialUrl, { replace: true });
			} else {
				navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`, { replace: true });
			}
		}
	});

	return (
		<div className="flex h-screen">
			<ImageComponent className="m-auto animate-spin rounded-full h-32 w-32" src={config.LOGO_URL} alt="Loading..." />
		</div>
	);
};

export default SplashComponent;
