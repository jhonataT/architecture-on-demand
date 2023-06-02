import moment from 'moment';

export const useDate = (currentDate) => {
    return moment(currentDate).format('DD-MM-YYYY');
}