import Album from "@/components/album";
import Bankacc from "@/components/bank";
import Banner from "@/components/banner";
import ImageFrame from "@/components/imageframe";
import WInfor from "@/components/midletextbox";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiSolidBookHeart } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useHandleInfo } from "@/service/myUtils/useHandleInfo";
import {invitationData, typeData} from "../service/myUtils/handleSex"
import GuestSubmit from "@/components/clientComponents/guestSubmit";
import Link from "next/link";

async function getInfo() {
  const res = await fetch('https://cardbe.txh1oupnabgh4p.flashvps.xyz/api/info',{ cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json()
}

async function getAlbum() {
  const res = await fetch('https://cardbe.txh1oupnabgh4p.flashvps.xyz/api/album');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json()
}

const invitationDataKeys = Object.keys(invitationData);

export default async function Home({searchParams}) {
  let zxcqaz = searchParams?.zxcqaz || 'lrm';
  if (!['lrm', 'tnr'].includes(zxcqaz)) {
    zxcqaz = 'lrm';
  }
  let host1 = searchParams?.host1 || '';
  let host2 = searchParams?.host2 || '';
  let guest = searchParams?.guest || '';
  let edcxsw = searchParams?.edcxsw || 'both1';
  let customData = {};
  if (!invitationDataKeys.includes(edcxsw)) {
    if (host1 && host2 && guest) {
      customData.host = host1;
      customData.host2 = host2;
      customData.guest = guest;
      edcxsw = 'custom';
    } else {
      edcxsw = 'both1';
    }
  }
  let ten = searchParams?.ten || '';
  const data = await getInfo();
  let info = Object.fromEntries(data.map(({ key, value }) => [key, { key, value }]));
  info = useHandleInfo(info);
  const album = await getAlbum();
  return (
    <div className="bg-amber-50">
      <Banner info = {info} sex = {zxcqaz} invt = {edcxsw} customData = {customData}/>
      <WInfor info = {info} sex = {zxcqaz} invt = {edcxsw} guestName = {ten} customData = {customData}/>
       <div className="md:mt-[-180px]">
        <div className="flex w-full">
          <div className="md:w-1/2 hidden md:block"></div>
          <div className="md:w-1/2 w-full h-[200px] md:bg-pink-100 md:rounded-tl-[210px] relative overflow-x-hidden">
            <div className="absolute bottom-0 left-10 md:left-11 md:top-8 w-[200px] md:w-[320px] h-[100px] md:h-[168px] bg-pink-300 rounded-t-[200px]"></div>
            <div className="absolute bottom-0 left-[200px] w-[200px] md:left-[320px] md:top-8 md:w-[320px] h-[100px] md:h-[168px] bg-pink-300 rounded-t-[200px]"></div>
            <div className="absolute bottom-4 md:left-11 w-full md:w-[600px] text-center text-orange-100-300 text-3xl font-swal">Câu chuyện tình yêu</div>
          </div>
        </div>
        <div className="flex w-full flex-wrap bg-pink-300 min-h-[500px] md:p-10">
          <div className="md:w-2/5 w-full flex justify-end items-center"><ImageFrame/></div>
          <div className="md:w-3/5 w-full text-white py-10 md:p-10 relative">
            <div className="whitespace-pre-line max-w-[600px] px-8 md:px-12 relative font-hel text-sm">
            <div className="absolute md:block hidden left-0 top-[-40px] w-[100px] h-[100px] border-t border-l"></div>
              {info.loveStory}
            </div>
            <div className="italic mt-12 text-right max-w-[600px] pr-9 relative font-stak tracking-widest text-6xl">
              <b>« Thanh Loan »</b>
              <div className="absolute right-0 bottom-[-40px] w-[100px] h-[100px] border-b border-r"></div>
              <BiSolidBookHeart size={60} className="absolute left-10 bottom-0"/>
            </div>
            <div className="w-full max-w-[600px] hidden md:flex absolute bottom-0 justify-center">
              <AiFillHeart size={30}/>
              <AiOutlineHeart size={30}/>
              <AiOutlineHeart size={30}/>
              <AiOutlineHeart size={30}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center font-ind">
        <div className="w-full bg-pink-100">
          <div className="flex flex-wrap flex-col md:flex-row w-full max-w-[1000px] mx-auto h-full items-center p-6">
            <div className="md:w-[calc(50%_-_20px)] w-full flex flex-col md:flex-row">
              <div className="md:w-[160px] w-full md:h-[160px] md:rounded-full overflow-hidden">
                <Image src={'/codau.jpg'} width={500} height={500} objectFit="cover" alt={""}/>
              </div>
              <div className="p-5 w-full md:w-[calc(100%_-_160px)]">&quot;{info.girlThink}&quot;</div>
            </div>
            <div className="w-[40px]">
              <GiSelfLove size={30}/>
            </div>
            <div className="w-full md:w-[calc(50%_-_20px)] flex flex-col md:flex-row">
              <div className="p-5 w-ful md:w-[calc(100%_-_160px)]">&quot;{info.boyThink}&quot;</div>
              <div className="w-full md:w-[160px] md:h-[160px] md:rounded-full overflow-hidden">
                <Image src={'/chure.jpg'} width={500} height={500} objectFit="cover" alt={""}/>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 text-4xl">Album ảnh</div>
        <Album albums = {album}/>
      </div>
        <GuestSubmit invt={edcxsw} guestName={ten}/>
        <div className="flex mx-auto w-full max-w-[600px]">
          <div className="text-center italic text-slate-600 text-sm px-6 first-letter:uppercase">{invitationData[edcxsw].host} rất muốn chụp với {invitationData[edcxsw].guest} những tấm hình kỷ niệm, vì vậy hãy đến sớm hơn một chút {invitationData[edcxsw].guest} nhé! Đám cưới của {invitationData[edcxsw].host2} sẽ trọn vẹn hơn khi có thêm lời chúc và sự hiện diện của {invitationData[edcxsw].guest}.</div>
        </div>
        <div className="max-w-[1000px] mx-auto p-6 mt-10">
          <h3 className="font-sgeo text-2xl font-bold text-pink-400">Có thể bạn sẽ cần</h3>
          <div className="w-full flex-col sm:flex-row flex mt-10">
            <div className="w-full sm:w-1/2 flex justify-center">
              <Bankacc who="CÔ DÂU" stk = "19036502426015" name = "HO THI THANH LOAN" qr = "/loanqr.jpg" bankName = "Techcombank"/>
            </div>
            <div className="w-full mt-10 sm:mt-0 sm:w-1/2 flex justify-center">
              <Bankacc who="CHÚ RỂ" stk = "9941308700" name = "TRAN THIEN TRI" qr = "/triqr.jpg" bankName = "Vietcombank"/>
            </div>
          </div>
          <h3 className="font-sgeo text-2xl font-bold mt-14 text-pink-400">Vị trí</h3>
          <div className="w-full mx-auto max-w-[1000px] mb-12">
            <iframe src={info[typeData[zxcqaz].mapLink]} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full max-w-[1000px] mx-auto"></iframe>
          </div>
        </div>
        <div className="w-full text-6xl md:text-9xl h-[400px] bg-red-400 flex justify-center items-center font-exm">
          Wedding Card
        </div>
    </div>
  );
}
