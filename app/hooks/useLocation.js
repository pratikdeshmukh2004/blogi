import * as Locations from "expo-location";
import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const { granted } = await Locations.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Locations.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return location;
};

export default useLocation;
