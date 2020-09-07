import moment from 'moment';

export const timeAgo = (unixTimestamp) => moment.unix(unixTimestamp).utc().fromNow();
export const timeWithFormat = (unixTimestamp) => moment.unix(unixTimestamp).utc().format('lll');

