// components/CustomMap.tsx
import React, { useEffect, useRef } from 'react';

const CustomMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: google.maps.Map | null = null;

    if (window.google && mapRef.current) {
      map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -23.5505, lng: -46.6333 }, // Coordenadas de São Paulo
        zoom: 12,
      });
    }

    return () => {
      if (map) {
        map = null; // Limpa o mapa ao desmontar o componente
      }
    };
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default CustomMap;
