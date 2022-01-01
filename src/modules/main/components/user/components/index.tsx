import CardComponent from 'common/components/Card/components';

type Props = {};

const UserComponent: React.FC<Props> = () => {
	return (
		<CardComponent>
			<div className="rounded-t-md h-28 w-full bg-gray-300" />
			<div className="flex flex-col items-center justify-center -mt-16">
				<a href="#!" className="block relative">
					<img
						alt="profile"
						src="/images/libeyondea.png"
						className="mx-auto object-cover rounded-full h-32 w-32 border-4 border-white"
					/>
				</a>
				<p className="text-gray-800  text-xl font-medium mt-2">Charlie</p>
				<p className="text-gray-400 text-xs mb-4">Nantes</p>
				<button
					type="submit"
					className="flex items-center justify-center py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
				>
					Follow
				</button>
				<div className="rounded-lg p-2 w-80 mt-4">
					<div className="flex items-center justify-between text-sm text-gray-600">
						<p className="flex flex-col">
							Posts
							<span className="text-black font-bold">34</span>
						</p>
						<p className="flex flex-col">
							Followers
							<span className="text-black font-bold">455</span>
						</p>
						<p className="flex flex-col">
							Following
							<span className="text-black font-bold">9</span>
						</p>
					</div>
				</div>
			</div>
		</CardComponent>
	);
};

export default UserComponent;
