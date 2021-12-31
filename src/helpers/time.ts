import moment from 'moment';

const time = {
	ago: (value: moment.MomentInput) => {
		return moment(value, 'YYYY-MM-DD HH:mm:ss').fromNow();
	}
};

export default time;
