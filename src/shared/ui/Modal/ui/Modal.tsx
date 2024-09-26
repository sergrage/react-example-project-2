import { classNames } from "shared/lib/classNames/classNames"
import classes from "./Modal.module.scss"
import { ReactNode, useCallback, useEffect, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";

interface ModalProps {
  className?: string;
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  lazyLoad?: boolean;
  onClose?: () => void;
}
export const Modal = ({ className, isOpen = true, lazyLoad = false, onClose, children }: ModalProps) => {
  const [domReady, setDomReady] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setDomReady(true)
  }, [])


  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen])

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

  if (lazyLoad && !isMounted) {
    return null;
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