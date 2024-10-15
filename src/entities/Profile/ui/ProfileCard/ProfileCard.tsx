import {classNames} from "shared/lib/classNames/classNames"
import classes from "./ProfileCard.module.scss"
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";

interface ProfileCardProps {
    className?: string
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  console.log(error, isLoading);
  
  return (
    <div className={classNames(classes.Profile, {}, [className])}>
      <img src={data.avatar} alt="" />
    </div>
  )
};
