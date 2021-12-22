import { removeCookie } from 'helpers/cookies';
import httpRequest from 'helpers/httpRequest';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import config from 'config';
import { NavigateFunction } from 'react-router-dom';

export const signout = (
	navigate: NavigateFunction,
	auth: {
		token: any;
		user: any;
	} | null,
	changeAuth: any
): void => {
	if (auth) {
		httpRequest.post({
			url: config.API.END_POINT.SIGNOUT,
			token: auth.token.access_token
		});
	}
	removeCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN);
	changeAuth(null);
	navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNIN}`);
};
