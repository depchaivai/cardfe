import { useQuery } from "react-query";
import { getAllAPI } from "../api/base";

const useInfos = () => {
  return useQuery('infos',()=>getAllAPI('infos'));
}

export default useInfos;