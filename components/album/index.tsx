import Image from 'next/image';
import React from 'react';

interface AlbumProps {
    albums: string[] | undefined;
}

const Album: React.FC<AlbumProps> = ({ albums }) => {
    return (
        <div className="flex max-w-[1024px] flex-wrap py-2">
            {
                albums?.map((item, index) => {
                    return (
                        <div key={index} className='w-full md:w-1/2 lg:w-1/4 p-[2px] relative'>
                            <Image src={item} width={600} height={600} alt='album' objectFit='cover'/>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Album;