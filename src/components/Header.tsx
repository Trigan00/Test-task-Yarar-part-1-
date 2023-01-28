import React from "react";
import styles from "../styles/Header.module.scss";
import logoImage from "../img/svg/logoImage.svg";
import logoText from "../img/svg/logoText.svg";
import oval from "../img/Oval 7.png";
import userLogo from "../img/Oval 6.png";
import fav from "../img/svg/fav.svg";
import message from "../img/svg/message.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Left}>
        <img src={logoImage} className={styles.LogoImg} alt="logo" />
        <img
          src={logoText}
          className={styles.LogoText}
          alt="Good Surfing logo"
        />
        <div className={styles.Lang}>
          ru
          <div className={styles.Rectangle} />
        </div>
      </div>
      <div className={styles.Right}>
        <img
          src={oval}
          className={styles.Oval}
          width="30px"
          height="30px"
          alt="oval"
        />
        <span className={styles.Organization}>
          Природный парк "Вулканы Камчатки"
        </span>
        <img src={fav} className={styles.FavImg} alt="fav" />
        <img src={message} className={styles.Message} alt="message" />
        <div className={styles.Acc}>
          <span>Владислав</span>
          <img
            src={userLogo}
            className={styles.UserLogo}
            width="30px"
            height="30px"
            alt="user logo"
          />
          <div className={styles.Rectangle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
