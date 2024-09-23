import { ReactElement } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactElement;
    element?: HTMLElement;
}
export const Portal = ({ children, element = document.body }: PortalProps) => {
    return createPortal(children, element)
};
