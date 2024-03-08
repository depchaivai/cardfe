import React, { FC } from 'react';
import HeartImage from '../heartImage';
import CircleImage from '../heartImage';
import { GiHeartWings } from "react-icons/gi";
import {typeData , invitationData} from "../../service/myUtils/handleSex";

const WInfor = ({info, sex = 'lrm', invt = 'both1', guestName =''}) => {
    const invtData = invitationData[invt];
    let ten = '';
    if (guestName !== '') {
        ten = ` ${guestName}`;
    }
    return (
        <div className="w-full h-full flex flex-wrap justify-center bg-amber-50 min-h-[700px] mt-10" style={{ backgroundImage: "url('/h4.png')", backgroundSize: "cover"}}>
            <div className="w-full max-w-[500px] p-6 md:p-10 font-ind">
                <div className='flex w-full justify-between text-lg tracking-wide'>
                    <div className="w-1/2 max-w-[180px] text-center pr-1">
                        <div className='font-bold uppercase pb-3'>Nhà trai</div>
                        <i className='font-extralight'>Ông: {info.boyDad}</i>
                        <br />
                        <i className='font-extralight'>Bà: {info.boyMom}</i>
                        <br />
                        <i className='font-extralight text-xs text-gray-500'>{info.boyInfoAdr}</i>
                    </div>
                    <div className="w-1/2 max-w-[180px] text-center pl-1">
                        <div className='font-bold uppercase pb-3'>Nhà gái</div>
                        <i className='font-extralight'>Ông: {info.girlDad}</i>
                        <br />
                        <i className='font-extralight'>Bà: {info.girlMom}</i>
                        <br />
                        <i className='font-extralight text-xs text-gray-500'>{info.girlInfoAdr}</i>
                    </div>
                </div>
                <div className="flex items-center flex-col w-full pt-16">
                    <div className="font-bold text-xl font-mono">TRÂN TRỌNG KÍNH MỜI</div>
                    <div><b className='first-letter:uppercase'>{invtData.guest + ten} tới dự buổi tiệc cưới</b></div>
                    <div className='font-extralight'>chung vui cùng gia đình {invtData.host2}</div>
                </div>
                <div className="flex items-center w-full pt-16 justify-between">
                    <div>{info.boyName}</div>
                    <div><GiHeartWings size={50}/></div>
                    <div>{info.girlName}</div>
                </div>
                <div className="flex items-center flex-col w-full pt-16">
                    <div className="font-bold text-md">{ info[typeData[sex].timeText] }</div>
                    <div className='text-sm'>(Tức ngày {info[typeData[sex].timeText2]})</div>
                    <div className='text-sm font-extralight'>Tại {typeData[sex].place}</div>
                </div>
            </div>
            <div className="w-full max-w-[600px] p-6 md:p-16 justify-center flex">
                <CircleImage/>
            </div>
        </div>
    );
};

export default WInfor;