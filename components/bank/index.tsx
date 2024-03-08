import Image from 'next/image';
import React from 'react';

interface BankaccProps {
    who: string;
    stk: string;
    name: string;
    bankName: string;
    qr: string;
}

const Bankacc: React.FC<BankaccProps> = ({who = 'CÔ DÂU', stk, name, bankName, qr}) => {

    return (
        <div className='w-full max-w-[230px] flex flex-col items-center'>
            <div className='w-full text-center'><b>{who}</b></div>
            <div className='mt-2 w-full text-center'>STK: {stk}</div>
            <div className='mt-2 w-full text-center'>{bankName}</div>
            <div className='mt-2 w-full text-center'>Tên: {name}</div>
            <div className='w-[200px] h-[200px] relative mt-2'>
                <Image layout='fill' alt='codau' objectFit='cover' src={qr}/>
            </div>
        </div>
    );
};

export default Bankacc;

