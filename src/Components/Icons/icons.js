import React from 'react';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from 'react-icons/md';

function Icons() {
    return (
        <IconContext.Provider value={{ color: 'orange', size: '5rem' }}>
            <div>
                <FaReact />
                <MdAlarm color="red" />
            </div>
        </IconContext.Provider>
    )
}
export default Icons;
