import { removeCookie } from 'helpers/cookies';
import httpRequest from 'helpers/httpRequest';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import config from 'config';
import { NavigateFunction } from 'react-router-dom';
import { AuthCurrent } from 'store/auth/reducers';

export const signout = (navigate: NavigateFunction, authCurrent: AuthCurrent, changeAuthCurrent: (state: null) => void) => {
	if (authCurrent) {
		httpRequest.post({
			url: config.API.END_POINT.SIGNOUT,
			token: authCurrent.token.access_token
		});
	}
	removeCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
	changeAuthCurrent(null);
	navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
};
