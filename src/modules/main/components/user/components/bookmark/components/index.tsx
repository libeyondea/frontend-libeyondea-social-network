import { Navigate, useParams } from 'react-router-dom';
import * as routeConstant from 'constants/route';
import useAppSelector from 'hooks/useAppSelector';
import { selectAuthCurrent } from 'store/auth/selectors';

type Props = {};

const BookmarkUserComponent: React.FC<Props> = () => {
	const params = useParams();
	const authCurrent = useAppSelector(selectAuthCurrent);

	if (authCurrent.user?.user_name !== params.user_name) {
		return <Navigate to={`${routeConstant.ROUTE_NAME_SPLASH}`} />;
	}

	console.log('BookmarkUserComponent');
	return <>Test</>;
};

export default BookmarkUserComponent;
