const config = {
	APP_NAME: 'Libeyondea',
	LOGO_URL: '/images/libeyondea.png',
	LOGGER: {
		REDUX: true
	},
	API: {
		URL: {
			ROOT_URL: process.env.REACT_APP_ROOT_URL,
			API_URL: process.env.REACT_APP_API_URL
		},
		END_POINT: {
			SIGNIN: '/auth/signin',
			SIGNUP: '/auth/signup',
			SIGNOUT: '/auth/signout',
			ME: '/auth/me',

			CRUD_POST: '/posts',
			CRUD_USER: '/users'
		}
	},
	REQUEST: {
		TIMEOUT: 30000
	},
	AUTH_DATA: {
		EXPIRED_TIME: 365
	}
};

export default config;
