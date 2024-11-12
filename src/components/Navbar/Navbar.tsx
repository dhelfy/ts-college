import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import * as styles from "./Navbar.module.css"
import { NavLinkRenderProps } from "react-router-dom"

export const Navbar: FC = () => {
  let active = ({isActive}: NavLinkRenderProps) => isActive ? `${styles.navbarItem} ${styles.active}` : styles.navbarItem

  return (
    <div className={styles.navbar}>
        <NavLink to='/books' className={active}>Books</NavLink>
        <NavLink to='/users' className={active}>Users</NavLink>
        <NavLink to='/todos' className={active}>Todo's</NavLink>
    </div>
  )
};