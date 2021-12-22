import httpRequest from 'helpers/httpRequest';
import { setCookie } from 'helpers/cookies';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import CardComponent from 'common/components/Card/components';
import * as cookiesConstant from 'constants/cookies';
import * as routeConstant from 'constants/route';
import config from 'config';
import { useNavigate, useLocation, Location } from 'react-router-dom';
import LinkComponent from 'common/components/Link/components';
import { LockOpenIcon, UserIcon } from '@heroicons/react/outline';

type Props = {};

const SigninCompoment: React.FC<Props> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = (location.state as { from: Location })?.from;

	const formik = useFormik({
		initialValues: {
			user_name: '',
			password: ''
		},
		validationSchema: Yup.object({
			user_name: Yup.string().required('User name is required'),
			password: Yup.string().required('Password is required')
		}),
		onSubmit: (values, { setSubmitting, setErrors }) => {
			httpRequest
				.post({
					url: config.API.END_POINT.SIGNIN,
					data: {
						user_name: values.user_name,
						password: values.password
					}
				})
				.then((response) => {
					if (response.data.success) {
						setCookie(cookiesConstant.COOKIES_KEY_ACCESS_TOKEN, response.data.data.access_token, {
							expires: config.AUTH_DATA.EXPIRED_TIME
						});
						navigate(routeConstant.ROUTE_NAME_SPLASH, { state: { from: from } });
					}
				})
				.catch((error) => {
					console.log(error.response);
					if (error.response?.status === 400) {
						setErrors({
							user_name: error.response?.data?.message,
							password: error.response?.data?.message
						});
					}
				})
				.finally(() => {
					setSubmitting(false);
				});
		}
	});
	return (
		<CardComponent className="m-auto flex flex-col w-full max-w-md sm:p-8">
			<div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl text-center">Signin To Your Account</div>
			<form onSubmit={formik.handleSubmit} className="mt-8">
				<div className="flex flex-col mb-4">
					<div className="flex relative">
						<span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
							<UserIcon className="w-5 h-5" />
						</span>
						<input
							type="text"
							placeholder="Enter user name"
							className={classNames(
								'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
								{
									'is-invalid': formik.errors.user_name && formik.touched.user_name
								}
							)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.user_name}
							name="user_name"
							id="user_name"
						/>
					</div>
					{formik.errors.user_name && formik.touched.user_name && (
						<div className="text-red-700 mt-1">{formik.errors.user_name}</div>
					)}
				</div>
				<div className="flex flex-col mb-6">
					<div className="flex relative">
						<span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
							<LockOpenIcon className="w-5 h-5" />
						</span>
						<input
							type="password"
							placeholder="Enter password"
							className={classNames(
								'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
								{
									'is-invalid': formik.errors.password && formik.touched.password
								}
							)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
							name="password"
							id="password"
						/>
					</div>
					{formik.errors.password && formik.touched.password && (
						<div className="text-red-700 mt-1">{formik.errors.password}</div>
					)}
				</div>
				<div className="flex items-center mb-6 -mt-4">
					<div className="flex ml-auto">
						<LinkComponent
							to="/"
							className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
						>
							Forgot Your Password?
						</LinkComponent>
					</div>
				</div>
				<div className="flex w-full">
					<button
						type="submit"
						className={classNames(
							'py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg',
							{
								'cursor-not-allowed disabled:opacity-50': formik.isSubmitting
							}
						)}
						disabled={formik.isSubmitting}
					>
						{formik.isSubmitting ? 'Signing' : 'Signin'}
					</button>
				</div>
			</form>
		</CardComponent>
	);
};

export default SigninCompoment;
