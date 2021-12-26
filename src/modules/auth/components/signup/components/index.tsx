import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import CardComponent from 'common/components/Card/components';
import * as routeConstant from 'constants/route';
import { useNavigate } from 'react-router-dom';
import LinkComponent from 'common/components/Link/components';
import authService from 'services/authService';
import { FaRegUser } from 'react-icons/fa';
import { MdLockOutline, MdMailOutline } from 'react-icons/md';

type Props = {};

const SignupComponent: React.FC<Props> = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			user_name: '',
			password: '',
			password_confirmation: ''
		},
		validationSchema: Yup.object({
			first_name: Yup.string().required('First name is required'),
			last_name: Yup.string().required('Last name is required'),
			email: Yup.string().required('Email is required'),
			user_name: Yup.string().required('User name is required'),
			password: Yup.string().required('Password is required'),
			password_confirmation: Yup.string().required('Password confirmation is required')
		}),
		onSubmit: (values, { setSubmitting, setErrors }) => {
			authService
				.signup(values)
				.then((response) => {
					if (response.data.success) {
						navigate(`/${routeConstant.ROUTE_NAME_AUTH}/${routeConstant.ROUTE_NAME_AUTH_SIGNUP}`);
					}
				})
				.catch((error) => {
					console.log(error.response);
					if (error.response?.status === 422) {
						setErrors({
							first_name: error.response?.data?.errors?.first_name,
							last_name: error.response?.data?.errors?.last_name,
							user_name: error.response?.data?.errors?.user_name,
							email: error.response?.data?.errors?.email,
							password: error.response?.data?.errors?.password,
							password_confirmation: error.response?.data?.errors?.password_confirmation
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
			<div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl text-center">Signup Your Account</div>
			<form onSubmit={formik.handleSubmit} className="mt-8">
				<div className="flex flex-col mb-4">
					<label htmlFor="first-name" className="block text-sm font-medium text-gray-600 mb-1">
						First name
					</label>
					<div className="flex relative">
						<span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
							<FaRegUser className="w-5 h-5" />
						</span>
						<input
							type="text"
							placeholder="Enter first name"
							className={classNames(
								'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
								{
									'is-invalid': formik.errors.first_name && formik.touched.first_name
								}
							)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.first_name}
							name="first_name"
							id="first_name"
						/>
					</div>
					{formik.errors.first_name && formik.touched.first_name && (
						<div className="text-red-700 mt-1">{formik.errors.first_name}</div>
					)}
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="last-name" className="block text-sm font-medium text-gray-600 mb-1">
						Last name
					</label>
					<div className="flex relative">
						<span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
							<FaRegUser className="w-5 h-5" />
						</span>
						<input
							type="text"
							placeholder="Enter last name"
							className={classNames(
								'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
								{
									'is-invalid': formik.errors.last_name && formik.touched.last_name
								}
							)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.last_name}
							name="last_name"
							id="last_name"
						/>
					</div>
					{formik.errors.last_name && formik.touched.last_name && (
						<div className="text-red-700 mt-1">{formik.errors.last_name}</div>
					)}
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="user-name" className="block text-sm font-medium text-gray-600 mb-1">
						User name
					</label>
					<div className="flex relative">
						<span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
							<FaRegUser className="w-5 h-5" />
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
				<div className="flex flex-col mb-4">
					<label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
						Email
					</label>
					<div className="flex relative">
						<span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
							<MdMailOutline className="w-5 h-5" />
						</span>
						<input
							type="text"
							placeholder="Enter email"
							className={classNames(
								'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
								{
									'is-invalid': formik.errors.email && formik.touched.email
								}
							)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							name="email"
							id="email"
						/>
					</div>
					{formik.errors.email && formik.touched.email && (
						<div className="text-red-700 mt-1">{formik.errors.email}</div>
					)}
				</div>
				<div className="flex flex-col mb-6">
					<label htmlFor="Password" className="block text-sm font-medium text-gray-600 mb-1">
						Password
					</label>
					<div className="flex relative">
						<span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
							<MdLockOutline className="w-5 h-5" />
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
				<div className="flex flex-col mb-6">
					<label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-600 mb-1">
						Password confirmation
					</label>
					<div className="flex relative">
						<span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
							<MdLockOutline className="w-5 h-5" />
						</span>
						<input
							type="password"
							placeholder="Enter password confirmation"
							className={classNames(
								'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
								{
									'is-invalid': formik.errors.password_confirmation && formik.touched.password_confirmation
								}
							)}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password_confirmation}
							name="password_confirmation"
							id="password_confirmation"
						/>
					</div>
					{formik.errors.password_confirmation && formik.touched.password_confirmation && (
						<div className="text-red-700 mt-1">{formik.errors.password_confirmation}</div>
					)}
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
						{formik.isSubmitting ? 'Signuping' : 'Signup'}
					</button>
				</div>
			</form>
			<div className="relative my-6">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-gray-400"></div>
				</div>
				<div className="relative flex justify-center text-sm">
					<span className="px-2 text-neutral-700 bg-white leading-none"> Or continue with </span>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<span className="leading-none">
					Do you have an account?
					<LinkComponent className="text-blue-700 ml-1" to="/auth/signin">
						Signin
					</LinkComponent>
				</span>
			</div>
		</CardComponent>
	);
};

export default SignupComponent;
