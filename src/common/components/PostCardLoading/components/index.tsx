import CardComponent from 'common/components/Card/components';

type Props = {};

const PostCardLoading: React.FC<Props> = () => {
	return (
		<CardComponent className="p-0 animate-pulse">
			<div className="flex items-center flex-grow flex-shrink p-4">
				<div className="mx-auto rounded-full h-10 w-10 bg-gray-300"></div>
				<div className="flex items-center flex-grow flex-shrink ml-4">
					<div className="h-3 w-20 bg-gray-300 rounded"></div>
				</div>
			</div>
			<div className="bg-gray-300 h-80 w-full rounded-b-md"></div>
		</CardComponent>
	);
};

export default PostCardLoading;
