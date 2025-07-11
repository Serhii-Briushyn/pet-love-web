import { AppDispatch } from "@store/store"
import { addToFavorites, removeFromFavorites } from "@store/notices/operations"
import toast from "react-hot-toast"
import { getCurrentUserFull } from "@store/users/operations"

export const toggleFavorite = async (
  dispatch: AppDispatch,
  noticeId: string,
  isFavorite: boolean,
) => {
  try {
    if (isFavorite) {
      await dispatch(removeFromFavorites(noticeId)).unwrap()
    } else {
      await dispatch(addToFavorites(noticeId)).unwrap()
    }
    await dispatch(getCurrentUserFull())
  } catch (error) {
    toast.error(error as string)
  }
}
