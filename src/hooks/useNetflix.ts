import { AppDispatch } from "@/store";
import {
  reset,
  setCategories,
  setCategory,
  setConfig,
  setOpen,
  setSearch,
} from "@/store/netflix";
import { useDispatch } from "react-redux";

export const useNetflix = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onSetCategory = (category: string) => {
    dispatch(setCategory(category));
    dispatch(setOpen());
  };

  const onToggleModal = () => {
    dispatch(setOpen());
  };

  const onToggleSearch = () => {
    dispatch(setSearch());
  };
  const onToggleConfig = () => {
    dispatch(setConfig());
  };

  const onSetCategories = (data: any[]) => {
    dispatch(setCategories(data));
  };

  const onResetLogout = () => {
    dispatch(reset());
  };

  return {
    onSetCategory,
    onToggleModal,
    onSetCategories,
    onToggleSearch,
    onToggleConfig,
    onResetLogout,
  };
};
