export const useHandleInfo = (info) => {
  const newData = {
    boyName: info?.boy_name?.value || '',
    girlName: info?.girl_name?.value || '',
    boyDad: info?.boy_dad?.value || '',
    girlDad: info?.girl_dad?.value || '',
    boyMom: info?.boy_mom?.value || '',
    girlMom: info?.girl_mom?.value || '',
    boyTime: info?.boy_time?.value || '',
    girlTime: info?.girl_time?.value || '',
    boyMap: info?.boy_map?.value || '',
    girlMap: info?.girl_map?.value || '',
    boyTimeText: info?.boy_time_text?.value || '',
    boyTimeText2: info?.boy_time_text2?.value || '',
    girlTimeText: info?.girl_time_text?.value || '',
    girlTimeText2: info?.girl_time_text2?.value || '',
    loveStory: info?.love_story?.value || '',
    boyThink: info?.boy_think?.value || '',
    girlThink: info?.girl_think?.value || '',
    boyMapLink: info?.boy_map_link?.value || '',
    girlMapLink: info?.girl_map_link?.value || '',
  };
  return newData;
}