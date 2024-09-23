import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Modal.module.scss"
import { ReactNode, useCallback, useEffect, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";

interface ModalProps {
  className?: string;
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  onClose?: () => void;
}
export const Modal = ({ className, isOpen = true, onClose, children }: ModalProps) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true)
  }, [])

  const onKeyDownHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDownHandler)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDownHandler)
    }
  }, [isOpen, onKeyDownHandler])

  const closeModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose])

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen
  }

  const onModalClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  }

  return (
  domReady ?
    <Portal element={document.querySelector('.app')} >
      <div className={classNames(classes.Modal, mods, [className])}>
        <div className={classes.overlay} onClick={closeModal} role='button'>
          <div className={classes.content} onClick={onModalClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal > : null
  )
}