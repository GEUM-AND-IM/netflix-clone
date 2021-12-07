import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { getTvPros, ITvPros } from "../../API/getTvPros";
import { tvProsData } from "../../Store/tvProsData";

const useGetTvPros = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tvpros, setTvPros] = useRecoilState(tvProsData);
  const resetTvPros = useResetRecoilState(tvProsData);

  const loadTvPros = async (page: number) => {
    const res = await getTvPros(page);
    res.results?.map((tvPros: ITvPros) => {
      setTvPros((prev) => [...prev, tvPros]);
    });
  };

  useEffect(() => {
    resetTvPros();
    setIsLoading(true);
    for (let i = 1; i <= 3; i++) {
      loadTvPros(i);
    }
    setIsLoading(false);
  }, []);

  return { isLoading };
};

export default useGetTvPros;
