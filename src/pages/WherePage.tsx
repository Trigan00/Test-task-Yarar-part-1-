import React, { useState } from "react";
import MyMap from "../components/MyMap";
import styles from "../styles/pages/WherePage.module.scss";
import MyInput from "../UI/MyInput";

const WherePage: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<any>();

  // useEffect(() => {
  //   const ymaps: any = window.ymaps;
  //   const a = new ymaps.SuggestView("address");
  // }, []);

  const getData = (data: any) => {
    setData(data);
  };

  const sendData = () => {
    const allData = { city, data };
    console.log("Все данные геообъекта: ", allData);
  };

  return (
    <div className={styles.Wrapper}>
      <h1>Где вы находитесь или будете принимать волонтёров</h1>
      <div className={styles.Inputs}>
        <MyInput
          name="address"
          label="Адрес"
          value={address}
          onChange={(event: any) => setAddress(event.target.value)}
        />
        <MyInput
          name="city"
          label="Ближайший к месту город"
          value={city}
          onChange={(event: any) => setCity(event.originalEvent.select)}
        />
        <MyMap address={address} getData={getData} />
      </div>
      <button className={styles.Button} onClick={sendData}>
        Дальше
      </button>
    </div>
  );
};

export default WherePage;
