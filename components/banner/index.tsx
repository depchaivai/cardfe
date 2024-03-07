import Image from 'next/image';
import React from 'react';
import { GiColdHeart } from "react-icons/gi";


const Banner: React.FC = ({info}) => {
    return (
        <div className="md:min-h-[550px] h-svh relative bg-white">
            <Image
                src="/banner.jpg"
                alt="trăm năm hạnh phúc"
                layout="fill"
                objectFit='cover'
            />
            <video src="/banner.mp4" className="absolute w-full h-full opacity-30 object-cover" autoPlay loop muted></video>
            <div className='absolute top-10 md:top-20 left-10 md:left-[100px] text-7xl md:text-9xl text-amber-100 font-exm'>Wedding</div>
            <div className="absolute right-[15%] h-full flex flex-col justify-center text-7xl md:text-9xl font-stak">
                <div className="p-6 pr-0 flex justify-end drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)]">
                    <div className='w-[40px] h-[40px]'></div>
                    <span className="text-white text-right">{info.boyName}</span>
                </div>
                <div className="text-center p-6">
                    <span className="text-white text-4xl flex justify-center"><GiColdHeart /><GiColdHeart /><GiColdHeart /><GiColdHeart /></span>
                </div>
                <div className="p-6 pl-0 flex justify-end">
                    <span className="text-white">{info.girlName}</span>
                    <div className='w-[40px] h-[40px]'></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;