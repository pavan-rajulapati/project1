import React from 'react';
import { parseISO, format } from 'date-fns';

const LocalTime = ({ dateAndTime }) => {
    function convertTime(dateAndTime) {
        if (!dateAndTime) return "Invalid Date";
        const parsedDate = parseISO(dateAndTime); // Convert ISO string to Date object
        return format(parsedDate, "yyyy-mm-dd"); // Format time to 12-hour format with AM/PM
    }

    return (
        <div>
            <p>{convertTime(dateAndTime)}</p>
        </div>
    );
};

export default LocalTime;
