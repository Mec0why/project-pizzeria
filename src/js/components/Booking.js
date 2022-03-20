import { select, templates } from '../settings.js';
import utils from '../utils.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  render(element) {
    const thisBooking = this;

    /* generate HTML based on template */
    const generatedHTML = templates.bookingWidget();
    /* create element using utils.createElementFromHTML */
    thisBooking.element = utils.createDOMFromHTML(generatedHTML);
    /* find booking container */
    const bookingContainer = document.querySelector(select.containerOf.booking);
    /* add element to booking */
    bookingContainer.appendChild(thisBooking.element);

    thisBooking.dom = {};

    thisBooking.dom.wrapper = element;

    thisBooking.dom.peopleAmount = element.querySelector(
      select.booking.peopleAmount
    );
    thisBooking.dom.hoursAmount = element.querySelector(
      select.booking.hoursAmount
    );
    thisBooking.dom.datePicker = element.querySelector(
      select.widgets.datePicker.wrapper
    );
    thisBooking.dom.hourPicker = element.querySelector(
      select.widgets.hourPicker.wrapper
    );
  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);

    thisBooking.dom.wrapper.addEventListener('updated', function () {
      console.log(thisBooking.dom.wrapper);
    });
  }
}

export default Booking;
