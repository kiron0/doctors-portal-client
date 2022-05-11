import React from 'react';
import chair from '../../Assets/images/chair.png';
import bg from '../../Assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div className='shadow-xl rounded-lg'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;