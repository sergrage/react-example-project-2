import { classNames } from "shared/lib/classNames/classNames"
import classes from "./ProfilePage.module.scss"
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";


const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(classes.ProfilePage, {}, [className])}>
        <h1>{t('profileHeader')}</h1>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
};

export default ProfilePage;