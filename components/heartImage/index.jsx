import React from 'react';
import Image from 'next/image';

const CircleImage = () => {
    return (
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full">
            <Image
                src="/heart.jpg"
                alt="Circle Image"
                objectFit="cover"
                width={500}
                height={500}
            />
        </div>
    );
};

export default CircleImage;