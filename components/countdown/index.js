'use client';
import React, { useState, useEffect } from 'react';

const CountDown = ({targetTime}) => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [timeStt, setTimeStt] = useState('Sắp diễn ra');
    const eventTime = new Date(targetTime).getTime();
    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date().getTime();
            let diff = eventTime - today;
            if (diff < 0) {
                clearInterval(interval);
                setTimeStt('Đã diễn ra');
                setDay(0);
                setHour(0);
                setMinute(0);
                setSecond(0);
                return; 
            }
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setDay(days);
            setHour(hours);
            setMinute(minutes);
            setSecond(seconds);

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="w-full h-[450px] bg-[#183059] flex justify-center items-center py-10 flex-col" style={{ backgroundImage: "url('/hw.png')", backgroundSize: "cover"}}>
            <div className="flex p-4 md:p-10 flex-nowrap justify-center w-full max-w-[1000px]">
                <div className="w-1/4 flex flex-col bg-[#EF2F3C] justify-center items-center max-w-[130px] p-5 rounded-md text-[#183059] text-3xl md:text-4xl">
                    <div className="font-extrabold font-ind">{day}</div>
                    <div className='text-sm text-white'>ngày</div>
                </div>
                <div className="w-1/4 flex ml-1 md:ml-2 flex-col bg-white justify-center items-center max-w-[130px] p-5 rounded-md text-[#183059] text-3xl md:text-4xl">
                    <div className="font-extrabold font-ind">{hour}</div>
                    <div className='text-sm'>giờ</div>
                </div>
                <div className="w-1/4 flex flex-col mx-1 md:mx-2 bg-[#276FBF] justify-center items-center max-w-[130px] p-5 rounded-md text-[#183059] text-3xl md:text-4xl">
                    <div className="font-extrabold font-ind">{minute}</div>
                    <div className='text-sm text-white'>phút</div>
                </div>
                <div className="w-1/4 flex flex-col bg-[#F0A202] justify-center items-center max-w-[130px] p-5 rounded-md text-[#183059] text-3xl md:text-4xl">
                    <div className="font-extrabold font-ind">{second}</div>
                    <div className='text-sm text-white'>giây</div>
                </div>
            </div>
            <h1 className='px-4 md:px-10 md:pb-10 text-white font-ind text-3xl'>{timeStt}</h1>
        </div>
    );
};

export default CountDown;
