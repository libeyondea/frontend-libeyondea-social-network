import CardComponent from 'common/components/Card/components';

type Props = {};

const UserProfileCardLoading: React.FC<Props> = () => {
	return (
		<CardComponent className="px-0 pt-0 animate-pulse">
			<div className="rounded-t-md h-28 w-full bg-gray-300" />
			<div className="flex flex-col items-center justify-center -mt-16">
				<div className="mx-auto rounded-full h-32 w-32 border-4 border-white bg-gray-300"></div>
				<p className="h-6 w-24 bg-gray-300 rounded mt-4"></p>
			</div>
		</CardComponent>
	);
};

export default UserProfileCardLoading;
