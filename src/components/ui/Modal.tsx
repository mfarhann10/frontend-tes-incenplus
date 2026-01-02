
import {
  cloneElement,
  createContext,
  useContext,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import useOutsideClick from "../../hooks/useOutsideClick";

type ModalContextType = {
  openName: string;
  close: () => void;
  open: (name: string) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

type OpenProps = {
  children: ReactElement<{ onClick?: () => void }>;
  opens: string;
};

function Open({ children, opens }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal.Open must be used within Modal");

  const { open } = context;
  return cloneElement(children, { onClick: () => open(opens) });
}

type WindowProps = {
  children: ReactElement<{ onCloseModal?: () => void }>;
  name: string;
};

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal.Window must be used within Modal");

  const { openName, close } = context;
  const ref = useOutsideClick<HTMLDivElement>(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div
        ref={ref}
        className="relative max-w-[90vw] max-h-[90vh] overflow-y-auto rounded-lg bg-card border border-border p-6 shadow-lg transform transition-all duration-300"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 p-1.5 rounded-md hover:bg-accent transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
