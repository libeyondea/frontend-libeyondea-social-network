import moment from 'moment';

const timeAgo = (value: moment.MomentInput) => {
	return moment(value, 'YYYY-MM-DD HH:mm:ss').fromNow();
};

export default timeAgo;
