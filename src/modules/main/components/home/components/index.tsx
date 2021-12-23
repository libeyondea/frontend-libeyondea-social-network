import BreadcrumbComponent from 'common/components/Breadcrumb/components';
import PostCardComponent from 'common/components/PostCard/components';
import config from 'config';
import useAppSelector from 'hooks/useAppSelector';
import { useEffect, useState } from 'react';
import { selectAuthCurrent } from 'store/auth/selectors';

type Props = {};

const HomeComponent: React.FC<Props> = () => {
	/* const authCurrent = useAppSelector(selectAuthCurrent);

	const [state, setState] = useState({
		data: {
			posts: []
		},
		loading: {
			posts: false
		}
	}); */

	/* useEffect(() => {
		setState((prevState) => ({
			...prevState,
			loading: {
				...prevState.loading,
				posts: true
			}
		}));
		httpRequest
			.get({
				url: config.API.END_POINT.CRUD_POST,
				token: authCurrent?.token?.access_token
			})
			.then((response) => {
				if (!response.data.success) {
					console.log('Error');
					return;
				}
				setState((prevState) => ({
					...prevState,
					data: {
						...prevState.data,
						posts: response.data.data
					}
				}));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setState((prevState) => ({
					...prevState,
					loading: {
						...prevState.loading,
						posts: false
					}
				}));
			});
	}, [authCurrent?.token?.access_token]); */

	return (
		<>
			<BreadcrumbComponent className="mb-4">Home</BreadcrumbComponent>
			<div className="grid grid-cols-2 gap-4">
				{/* {state.loading.posts
					? 'Loading...'
					: !!state.data.posts.length &&
					  state.data.posts.map((post: any, index) => (
							<div className="col-span-2 lg:col-span-1 w-full" key={index}>
								<PostCardComponent
									avatarUrl={post.user.avatar_url}
									userName={post.user.user_name}
									content={post.content}
									images={post.images}
								/>
							</div>
					  ))} */}
			</div>
		</>
	);
};

export default HomeComponent;
