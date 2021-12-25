import ImageComponent from 'common/components/Image/components';
import { BsBookmark, BsChat, BsHeart, BsThreeDots } from 'react-icons/bs';
import PostCarouselComponent from 'common/components/PostCarousel/components';
import { Post } from 'models/post';

type Props = {
	post: Post;
};

const PostCardComponent: React.FC<Props> = ({ post }) => {
	return (
		<div className="shadow-lg rounded-md bg-white w-full">
			<div className="flex items-center justify-between p-4">
				<div className="flex items-center flex-grow flex-shrink">
					<a href="#!" className="flex-none">
						<ImageComponent src={post.user.avatar_url} className="mx-auto rounded-full h-10 w-10" />
					</a>
					<div className="flex items-center flex-grow flex-shrink ml-4 text-sm">
						<span className="text-gray-800 font-medium">
							<a href="#!" className="block relative">
								{post.user.user_name}
							</a>
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
						666 likes
					</a>
				</div>
				<div className="flex flex-col mb-3">
					<div className="text-sm">
						<span className="mr-1">
							<a href="#!" className="leading-none font-medium">
								{post.user.user_name}
							</a>
						</span>
						<span>{post.content}</span>
					</div>
					<div className="flex">
						<a href="#!" className="text-gray-400 text-sm">
							View 66 comments
						</a>
					</div>
				</div>
				<div className="flex">
					<a href="#!" className="text-gray-400 font-light text-xs">
						<time>4 years ago</time>
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostCardComponent;
