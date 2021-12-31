import ImageComponent from 'common/components/Image/components';
import { BsBookmark, BsChat, BsHeart, BsThreeDots } from 'react-icons/bs';
import PostCarouselComponent from 'common/components/PostCarousel/components';
import { Post } from 'models/post';
import time from 'helpers/time';
import LinkComponent from 'common/components/Link/components';
import * as routeConstant from 'constants/route';

type Props = {
	post: Post;
};

const PostCardComponent: React.FC<Props> = ({ post }) => {
	return (
		<div className="shadow-lg rounded-md bg-white w-full">
			<div className="flex items-center justify-between p-4">
				<div className="flex items-center flex-grow flex-shrink">
					<LinkComponent
						to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_USER}/${post.user.user_name}`}
						className="flex-none"
					>
						<ImageComponent src={post.user.avatar_url} className="mx-auto rounded-full h-10 w-10" />
					</LinkComponent>
					<div className="flex items-center flex-grow flex-shrink ml-4 text-sm">
						<span className="text-gray-800 font-medium">
							<LinkComponent
								to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_USER}/${post.user.user_name}`}
								className="block relative"
							>
								{post.user.user_name}
							</LinkComponent>
						</span>
					</div>
				</div>
				<div className="flex items-center">
					<BsThreeDots className="w-6 h-6" />
				</div>
			</div>
			{!!post.images.length && <PostCarouselComponent images={post.images} />}
			<div className="p-4">
				<div className="flex items-center justify-between mb-3">
					<div className="flex items-center">
						<BsHeart className="w-6 h-6 mr-2" />
						<BsChat className="w-6 h-6" />
					</div>
					<div className="flex items-center">
						<BsBookmark className="w-6 h-6" />
					</div>
				</div>
				<div className="flex mb-3">
					<a href="#!" className="font-medium leading-none text-sm">
						{post.total_likes} likes
					</a>
				</div>
				<div className="flex flex-col mb-3">
					<div className="text-sm">
						<span className="mr-1">
							<LinkComponent
								to={`/${routeConstant.ROUTE_NAME_MAIN}/${routeConstant.ROUTE_NAME_USER}/${post.user.user_name}`}
								className="leading-none font-medium"
							>
								{post.user.user_name}
							</LinkComponent>
						</span>
						<span>{post.content}</span>
					</div>
					<div className="flex">
						<a href="#!" className="text-gray-400 text-sm">
							View {post.total_comments} comments
						</a>
					</div>
				</div>
				<div className="flex">
					<LinkComponent to={`/p/${post.slug}`} className="text-gray-400 font-light text-xs">
						<time>{time.ago(post.created_at)}</time>
					</LinkComponent>
				</div>
			</div>
		</div>
	);
};

export default PostCardComponent;
