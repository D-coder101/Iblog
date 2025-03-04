"use client";
import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../_hooks/useOutsideClick";
import { useCloseOnScroll } from "../_hooks/useCloseOnScroll";
// import Link from "next/link";

type Coordinate = {
  x: number;
  y: number;
};

interface MenuContextType {
  open: (id: string | number) => void;
  close: () => void;
  openId: string | number;
  position: Coordinate | null;
  setPosition: React.Dispatch<React.SetStateAction<Coordinate>>;
  setOpenId: React.Dispatch<React.SetStateAction<string | number>>;
}

interface Props {
  children: React.ReactNode;
}

interface ListProps extends Props {
  id: string | number;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ElementType;
}

const MenusContext = createContext<MenuContextType | null>(null);

function Menus({ children }: Props) {
  const [openId, setOpenId] = useState<string | number>("");
  const [position, setPosition] = useState<Coordinate>({ x: 0, y: 0 });

  const close = () => setOpenId("");
  const open = (id: string | number) => setOpenId(id);

  useCloseOnScroll(openId !== "", close);

  return (
    <MenusContext.Provider
      value={{ open, close, openId, position, setPosition, setOpenId }}
    >
      {children}
    </MenusContext.Provider>
  );
}

export default Menus;

function Menu({ children }: Props) {
  return children;
}

function Toggle({ children, id }: ListProps) {
  const menuContext = useContext(MenusContext);

  if (!menuContext) {
    throw new Error("Toggle must be used within a <Menus> component.");
  }

  const { openId, close, open, setPosition } = menuContext;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    const button = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - button.width - button.x,
      y: button.y + button.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return cloneElement(children as React.ReactElement, { onClick: handleClick });
}

function List({ id, children }: ListProps) {
  const menuContext = useContext(MenusContext);

  if (!menuContext) {
    throw new Error("List must be used within a <Menus> component.");
  }
  const { openId, position, close } = menuContext;

  const ref = useOutsideClick<HTMLUListElement>(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="fixed bg-white shadow z-50 rounded-lg overflow-hidden"
      // console.log(rect);
      style={{ right: `${position?.x}px`, top: `${position?.y}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon: Icon, onClick }: ButtonProps) {
  const menuContext = useContext(MenusContext);

  if (!menuContext) {
    throw new Error("Button must be used within a <Menus> component.");
  }
  const { close } = menuContext;

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li className="first:rounded-t-lg last:rounded-b-lg">
      {/* {link ? (
        <Link
          onClick={handleClick}
          href={link}
          className="w-full text-left bg-transparent border-none py-3 px-5 transition-all duration-200 flex items-center hover:bg-gray-100"
        >
          {Icon && <Icon />}
          <span className="font-medium">{children}</span>
        </Link>
      ) : ( */}
      <button
        className="w-full border-none py-2 px-5 transition-all duration-200 flex items-center gap-2 hover:bg-gray-100 text-slate-600"
        onClick={handleClick}
      >
        {Icon && <Icon size={14} />}
        <span className="font-medium text-sm">{children}</span>
      </button>
      {/* )} */}
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
