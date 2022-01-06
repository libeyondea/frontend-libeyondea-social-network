import CardComponent from 'common/components/Card/components';
import ImageComponent from 'common/components/Image/components';
import LinkComponent from 'common/components/Link/components';
import { Post } from 'models/post';
import { useState } from 'react';
import { BsChat, BsHeart } from 'react-icons/bs';

type Props = {
	post: Post;
};

const PostCardSmallComponent: React.FC<Props> = ({ post }) => {
	const [isHoverPost, setHoverPost] = useState(false);

	return (
		<CardComponent className="p-0 h-full relative">
			<LinkComponent to={'#!'} onMouseEnter={() => setHoverPost(true)} onMouseLeave={() => setHoverPost(false)}>
				<div className="h-72">
					{!!post.images.length && (
						<ImageComponent src={post.images[0].url} className="w-full object-cover rounded-md h-72" />
					)}
				</div>
				{isHoverPost && (
					<div
						className="flex items-center justify-center rounded-md top-1/2 left-0 absolute p-4 -translate-y-2/4 w-full h-full"
						style={{ background: 'rgba(0, 0, 0, 0.3)' }}
					>
						<div className="flex flex-col sm:flex-row text-white font-medium">
							<span className="flex items-center mb-4 sm:mb-0 sm:mr-6">
								<BsHeart className="w-6 h-6 mr-2" /> {post.total_likes}
							</span>
							<span className="flex items-center">
								<BsChat className="w-6 h-6 mr-2" /> {post.total_comments}
							</span>
						</div>
					</div>
				)}
			</LinkComponent>
		</CardComponent>
	);
};

export default PostCardSmallComponent;
