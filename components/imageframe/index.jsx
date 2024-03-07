import Image from 'next/image';
import React from 'react';

const ImageFrame = ({ imageUrl = '/t1.jpg' }) => {
    return (
        <div className="flex w-full h-[300px] shadow-lg shadow-white relative">
            <Image
                src={imageUrl}
                alt="Cau chuyen tinh yeu"
                layout='fill'
                objectFit='cover'
            />
        </div>
    );
};

export default ImageFrame;