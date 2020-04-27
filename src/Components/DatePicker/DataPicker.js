import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DatePickerContainer() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
           <DatePicker 
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                dateFormat='dd/MM/yyy' 
                minDate={new Date()}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
            /> 
        </div>
    )
}
export default DatePickerContainer;
