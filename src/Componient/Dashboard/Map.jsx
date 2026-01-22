import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function ATMMap() {
  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(() => {
    if (locationDenied) return;

    const map = L.map("map").setView([37.0902, -95.7129], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    if (!navigator.geolocation) {
      setLocationDenied(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        map.setView([latitude, longitude], 14);

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup("You are here")
          .openPopup();
      },
      () => {
        setLocationDenied(true);
      }
    );

    return () => map.remove();
  }, [locationDenied]);

  // 🔴 FALLBACK UI (Google Maps iframe)
  if (locationDenied) {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24191.63546718769!2d-74.02853380251251!3d40.71901958746316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20banking%20street%20financial%20district%20new%20york%20ny%2010001!5e0!3m2!1sen!2sng!4v1768820273730!5m2!1sen!2sng"
        width="100%"
        height="600"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ borderRadius: "12px", border: "0" }}
      />
    );
  }

  return (
    <div
      id="map"
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    />
  );
}
