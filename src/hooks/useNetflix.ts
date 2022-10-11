import { AppDispatch } from "@/store";
import { setCategories, setCategory, setOpen } from "@/store/netflix";
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

  const onSetCategories = (data: any[]) => {
    dispatch(setCategories(data));
  };

  return {
    onSetCategory,
    onToggleModal,
    onSetCategories,
  };
};
