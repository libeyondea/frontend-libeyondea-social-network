import PostCardComponent from 'common/components/PostCard/components';
import PostCardLoading from 'common/components/PostCardLoading/components';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import useDidMountEffect from 'hooks/useDidMountEffect';
import { Post } from 'models/post';
import { postListRequestAction } from 'store/post/actions';
import { selectPostList } from 'store/post/selectors';

type Props = {};

const HomeComponent: React.FC<Props> = () => {
	const dispatch = useAppDispatch();
	const postList = useAppSelector(selectPostList);

	useDidMountEffect(() => {
		dispatch(postListRequestAction());
	});

	return (
		<div className="grid grid-cols-1 gap-4">
			{postList.is_loading ? (
				<div className="col-span-1">
					<PostCardLoading />
				</div>
			) : !postList.data.length ? (
				'Empty Post'
			) : (
				postList.data.map((post: Post, index) => (
					<div className="col-span-1" key={index}>
						<PostCardComponent post={post} />
					</div>
				))
			)}
		</div>
	);
};

export default HomeComponent;
