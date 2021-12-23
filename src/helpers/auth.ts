import { removeCookie } from 'helpers/cookies';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import { NavigateFunction } from 'react-router-dom';
import { AuthCurrent } from 'store/auth/reducers';
import authService from 'services/authService';

export const signout = (navigate: NavigateFunction, authCurrent: AuthCurrent, changeAuthCurrent: (state: null) => void) => {
	if (authCurrent) {
		authService.signout(authCurrent.token.access_token);
	}
	removeCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
	changeAuthCurrent(null);
	navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
};
