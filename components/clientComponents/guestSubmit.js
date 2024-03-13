"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { invitationData } from '@/service/myUtils/handleSex';



const GuestSubmit = ({invt, guestName}) => {
    const [gname, setGname] = useState('');
    const [gsubmit, setGsubmit] = useState('Tôi chắc chắn sẽ đến');
    const [gmessage, setGmessage] = useState('');
    const [submitted, setSubmitted] = useState('Gửi');
    const handleSend = async () => {
      let goriginname = `${invitationData[invt].guest} ${guestName}`;
      if (!gname || !gmessage || !gsubmit || !goriginname ) {
        return;
      }
      setSubmitted('Đang gửi');
      try {
        const response = await fetch(`https://cardbe.txh1oupnabgh4p.flashvps.xyz/api/feedback?gname=${gname}&gsubmit=${gsubmit}&gmessage=${gmessage}&goriginname=${goriginname}`, {
          method: 'GET',
        });
        if (response.ok) {
          setSubmitted('Đã gửi');
        } else {
          setSubmitted('Lỗi');
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
    return (
        <div className="w-full mx-auto max-w-[1000px] mt-8">
          <div className="font-sgeo text-2xl font-bold p-6 text-pink-400">Bạn sẽ đến chứ</div>
          <div className="w-full flex p-6 md:p-10 flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <div className="w-full">
                <input type="text" className="w-full ring-1 rounded ring-pink-400 px-2 py-1 text-sm" placeholder="Tên của bạn là gì?" onChange={(event)=>setGname(event.target.value)}/> 
                <select className="w-full ring-1 rounded ring-pink-400 mt-4 px-2 py-1 text-sm" onChange={(event)=>setGsubmit(event.target.value)}>
                  <option value="Chắc chắn sẽ đến">Chắc chắn sẽ đến</option>
                  <option value="có thể sẽ đến">Có thể sẽ đến</option>
                  <option value="Tôi không đến được">Tôi không đến được</option>
                </select> 
                <textarea className="w-full h-[100px] resize-none overflow-y-auto ring-1 rounded ring-pink-400 mt-4 px-2 py-1 text-sm" placeholder="Gửi đôi lời tới cô dâu và chú rể" onChange={(event)=>setGmessage(event.target.value)}/>
                <button className={`mt-6 mx-auto rounded-md px-2 text-center w-[100px] py-1 text-sm ${submitted ? 'bg-gray-500' : 'bg-pink-400'} text-white`} onClick={()=>handleSend()}>{submitted}</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[300px] px-10">
              <Image src={'/chibi.png'} width={250} height={250} objectFit="cover" alt="TC"/>
            </div>
          </div>
        </div>
    );
};

export default GuestSubmit;