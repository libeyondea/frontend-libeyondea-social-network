import BreadcrumbComponent from 'common/components/Breadcrumb/components';

type Props = {};

const BookmarkComponent: React.FC<Props> = () => {
	return (
		<>
			<BreadcrumbComponent className="mb-4">Posts</BreadcrumbComponent>
			<div className="grid grid-cols-1 gap-4">
				<div className="col-span-1 w-full">Test</div>
			</div>
		</>
	);
};

export default BookmarkComponent;
