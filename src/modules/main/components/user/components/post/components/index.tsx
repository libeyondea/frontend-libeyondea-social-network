import Loadingomponent from 'common/components/Loading/components';
import PostCardSmallComponent from 'common/components/PostCardSmall/components';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { Post } from 'models/post';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postListByUserRequestAction, postListByUserResetAction } from 'store/post/actions';
import { selectPostListByUser } from 'store/post/selectors';

type Props = {};

const PostUserComponent: React.FC<Props> = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const postListByUser = useAppSelector(selectPostListByUser);

	useEffect(() => {
		if (params.user_name) {
			dispatch(postListByUserRequestAction(params.user_name));
		}
		return () => {
			dispatch(postListByUserResetAction());
		};
	}, [dispatch, params.user_name]);

	return (
		<>
			{postListByUser.is_loading ? (
				<div className="col-span-4">
					<Loadingomponent />
				</div>
			) : !postListByUser.data.length ? (
				<div className="col-span-4">Empty Post</div>
			) : (
				postListByUser.data.map((post: Post, index) => (
					<div className="col-span-2 md:col-span-1" key={index}>
						<PostCardSmallComponent post={post} />
					</div>
				))
			)}
		</>
	);
};

export default PostUserComponent;
