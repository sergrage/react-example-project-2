import {classNames} from "shared/lib/classNames/classNames"
import classes from "./LoginModal.module.scss"
import { Modal } from "shared/ui/Modal";
import {LoginFormAsync} from "../LoginForm/LoginForm.async";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader";

interface LoginModalProps {
    className?: string;
    isOpen: boolean,
    onClose: () => void
}
export const LoginModal = ({ className, isOpen, onClose } : LoginModalProps) => {
  return (
      <Modal lazyLoad className={classNames(classes.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader/>}>
          <LoginFormAsync />
        </Suspense>
    </Modal>
  )
};
