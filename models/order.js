import moment from 'moment';
// import 'moment/locale/pl';

class Order {
    constructor(id, items, totalAmount, date) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }

    get readableDate() {
        // return this.date.toLocaleDateString('en-EN', {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     hour: '2-digit',
        //     minute: '2-digit',
        // });
        // moment.locale('pl');
        var m = moment(this.date).format('MMMM Do YYYY, hh:mm');
        return m;
    }
}

export default Order;