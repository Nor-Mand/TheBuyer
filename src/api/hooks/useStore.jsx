import { useContext } from "react";
import StoreContext from "../provider/ContextProvider";

const useStore = () => {
  return useContext(StoreContext);
};

export default useStore;
