import CardComponent from 'common/components/Card/components';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { userSingleRequestAction } from 'store/user/actions';
import { selectUserSingle } from 'store/user/selectors';
import UserProfileCardLoading from 'common/components/UserProfileCardLoading/components';
import ImageComponent from 'common/components/Image/components';
import { selectAuthCurrent } from 'store/auth/selectors';
import { useEffect } from 'react';

type Props = {};

const UserComponent: React.FC<Props> = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const authCurrent = useAppSelector(selectAuthCurrent);
	const userSingle = useAppSelector(selectUserSingle);

	useEffect(() => {
		if (params.user_name) {
			dispatch(userSingleRequestAction(params.user_name));
		}
	}, [dispatch, params.user_name]);

	return (
		<>
			<div className="mb-4">
				{userSingle.is_loading || !userSingle.data ? (
					<div className="col-span-1">
						<UserProfileCardLoading />
					</div>
				) : (
					<CardComponent className="px-0 pt-0">
						<div className="rounded-t-md h-28 w-full bg-gray-300" />
						<div className="flex flex-col items-center justify-center -mt-16">
							<a href="#!" className="block relative">
								<ImageComponent
									alt="profile"
									src={userSingle.data.avatar_url}
									className="mx-auto object-cover rounded-full h-32 w-32 border-4 border-white"
								/>
							</a>
							<p className="text-gray-800 text-4xl font-medium mt-2 mb-1">{userSingle.data?.user_name}</p>
							<p className="text-gray-400 text-xl mb-4">
								{userSingle.data?.first_name} {userSingle.data?.last_name}
							</p>
							{authCurrent.user?.user_name !== userSingle.data.user_name && (
								<button
									type="submit"
									className="flex items-center justify-center py-2 px-4 mb-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
								>
									Follow
								</button>
							)}
							<div className="flex items-center text-sm text-gray-600 space-x-8 sm:space-x-12">
								<a href="#!" className="text-gray-900 font-bold text-center">
									{userSingle.data.total_posts} <span className="font-normal text-gray-700">Posts</span>
								</a>
								<a href="#!" className="text-gray-900 font-bold text-center">
									{userSingle.data.total_followers} <span className="font-normal text-gray-700">Followers</span>
								</a>
								<a href="#!" className="text-gray-900 font-bold text-center">
									{userSingle.data.total_following} <span className="font-normal text-gray-700">Following</span>
								</a>
							</div>
						</div>
					</CardComponent>
				)}
			</div>
			<div className="mb-4">
				<div className="flex justify-center">
					<div className="flex items-center space-x-12">
						<a href="#!" className="text-gray-800 text-xl font-medium border-t-4 border-purple-600">
							Posts
						</a>
						<a href="#!" className="text-gray-400 text-xl font-medium">
							Posts
						</a>
						<a href="#!" className="text-gray-400 text-xl font-medium">
							Posts
						</a>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-4">
				<div className="col-span-1">
					<CardComponent className="p-0">
						<ImageComponent src="/images/libeyondea.png" className="w-full object-cover rounded-md h-72" />
					</CardComponent>
				</div>
				<div className="col-span-1">
					<CardComponent className="p-0">
						<ImageComponent src="/images/libeyondea.png" className="w-full object-cover rounded-md h-72" />
					</CardComponent>
				</div>
				<div className="col-span-1">
					<CardComponent className="p-0">
						<ImageComponent src="/images/libeyondea.png" className="w-full object-cover rounded-md h-72" />
					</CardComponent>
				</div>
				<div className="col-span-1">
					<CardComponent className="p-0">
						<ImageComponent src="/images/libeyondea.png" className="w-full object-cover rounded-md h-72" />
					</CardComponent>
				</div>
				<div className="col-span-1">
					<CardComponent className="p-0">
						<ImageComponent src="/images/libeyondea.png" className="w-full object-cover rounded-md h-72" />
					</CardComponent>
				</div>
			</div>
		</>
	);
};

export default UserComponent;
