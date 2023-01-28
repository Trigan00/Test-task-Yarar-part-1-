import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";
import React, { useEffect, useState } from "react";
import styles from "../styles/MyMap.module.scss";

interface MyMapProps {
  address: string;
  getData: (data: any) => void;
}

const MyMap: React.FC<MyMapProps> = ({ address, getData }) => {
  const [mapState, setMapState] = useState<{ center: number[]; zoom: number }>({
    center: [55.76, 37.64],
    zoom: 10,
  });
  const [coord, setCoord] = useState<number[]>([]);

  const findPlace = (place: string) => {
    try {
      const ymaps = window.ymaps;
      ymaps.geocode(place).then((result: any) => {
        const firstGeoObject = result.geoObjects.get(0);
        const coords = firstGeoObject.geometry.getCoordinates();
        getData(firstGeoObject.properties.getAll());
        setCoord(coords);
        setMapState({ center: coords, zoom: 12 });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (address.trim()) {
      const timer = setTimeout(() => {
        findPlace(address);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [address]);

  return (
    <div className={styles.Map}>
      <YMaps>
        <Map state={mapState} width={"100%"} height={"170px"}>
          <Placemark
            geometry={{ type: "Point", coordinates: coord }}
            options={{
              preset: "islands#circleDotIcon",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default MyMap;
