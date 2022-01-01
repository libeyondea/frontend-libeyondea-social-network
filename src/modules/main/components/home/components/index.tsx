import PostCardComponent from 'common/components/PostCard/components';
import PostCardLoading from 'common/components/PostCardLoading/components';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import useDidMountEffect from 'hooks/useDidMountEffect';
import { Post } from 'models/post';
import { postListRequestAction } from 'store/post/actions';
import { selectPostList } from 'store/post/selectors';
import AsideComponent from '../../aside';

type Props = {};

const HomeComponent: React.FC<Props> = () => {
	const dispatch = useAppDispatch();
	const postList = useAppSelector(selectPostList);

	useDidMountEffect(() => {
		dispatch(postListRequestAction());
	});

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
			<div className="col-span-2 sm:col-span-2 md:col-span-3">
				<div className="grid grid-cols-1 gap-4">
					{postList.is_loading ? (
						<div className="col-span-1">
							<PostCardLoading />
						</div>
					) : !postList.data.length ? (
						<div className="col-span-1">Empty Post</div>
					) : (
						postList.data.map((post: Post, index) => (
							<div className="col-span-1" key={index}>
								<PostCardComponent post={post} />
							</div>
						))
					)}
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 hidden sm:block">
				<AsideComponent></AsideComponent>
			</div>
		</div>
	);
};

export default HomeComponent;
