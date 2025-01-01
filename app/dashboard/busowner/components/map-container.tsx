"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useState, useEffect, ChangeEvent } from "react";
import busIconUrl from "@/public/images/bus-station.png";
import coordinates from "@/constants/map.json";
import { axiosAuthInstance } from "@/services/axios/axios";
import { TBus } from "@/types/types";
import { LatLngTuple } from "leaflet";

type Coordinates = LatLngTuple[];

const BusLocation = () => {
  const [busData, setBusData] = useState([]);
  const [currentCoord, setCurrentCoord] = useState<Coordinates>([]);
  const [coordinate, setCoordinate] = useState<LatLngTuple[]>([]);
  const busRoutes = coordinates;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/bus");
        setBusData(response?.data);
        const coords: LatLngTuple[] = response?.data?.data.map((bus: TBus) => [
          bus?.currentLocation?.latitude,
          bus?.currentLocation?.longitude,
        ]);
        setCoordinate(coords);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, [busData]);

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(event.target.value);
    if (selectedIndex === -1) {
      setCurrentCoord([]);
    } else {
      setCurrentCoord(busRoutes.coordinates[selectedIndex] as LatLngTuple[]);
    }
  };

  return (
    <>
      <h1 className="pb-10">Track your live bus Location in here</h1>
      <div>
        <MapContainer
          style={{
            height: "70vh",
            width: "100%",
            borderRadius: "10px",
          }}
          center={[28.261501948498378, 83.97219108030293] as LatLngTuple}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div className="leaflet-top leaflet-right">
            <div className="leaflet-control p-2">
              <select
                onChange={handleDropdownChange}
                className="p-2 rounded-md"
              >
                <option value={-1}>Select Route</option>
                {busRoutes.coordinates.map((_, index) => (
                  <option key={index} value={index}>
                    Route {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {currentCoord.length > 0 && (
            <Polyline
              positions={currentCoord}
              color="red"
              weight={10}
              opacity={0.4}
            />
          )}

          {coordinate.map((coords, index) => (
            <Marker
              key={index}
              position={coords}
              icon={
                new L.Icon({
                  iconUrl: busIconUrl.src,
                  iconRetinaUrl: busIconUrl.src,
                  iconSize: [30, 30],
                  iconAnchor: [12.5, 41],
                  popupAnchor: [0, -41],
                })
              }
            >
              <Popup>
                <div>Bus</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default BusLocation;
