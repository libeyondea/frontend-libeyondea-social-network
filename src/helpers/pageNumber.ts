import { isInteger } from 'lodash';

const pageNumber = (page: string): number => {
	return isInteger(parseInt(page)) && parseInt(page) >= 1 ? parseInt(page) : 1;
};

export default pageNumber;
