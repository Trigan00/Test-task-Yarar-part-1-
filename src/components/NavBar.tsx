import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/NavBar.module.scss";
import links from "../utils/links";
import supportLogo from "../img/Ellipse 1.png";

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const navigate = useNavigate();

  const onClickHandler = (path: string, id: number) => {
    setActiveLink(id);
    navigate(path);
  };

  return (
    <nav className={styles.Nav}>
      <div className={styles.Links}>
        {links.map((link, id) => (
          <div key={link.name}>
            <img src={link.svg} alt={link.name} />
            <span
              className={`${styles.Link} ${activeLink === id && styles.Active}`}
              onClick={() => onClickHandler(link.path, id)}
            >
              {link.name}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.Support}>
        <img
          src={supportLogo}
          className={styles.SupportLogo}
          width="65px"
          height="65px"
          alt="support logo"
        />
        <span className={styles.Name}>Кристина</span>
        <span className={styles.Text}>
          Ваш персональный помощник по работе с системой
        </span>
        <button>Написать</button>
        <span className={styles.Email}>
          E-mail <span>support@goodsurfing.org</span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
