import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const GlobalMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTVybzNsMzQwNnc4MmpyMzdqbTR5cmtxIn0.VKeySwToM5fJUzY5rwYZ5A';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [-40, 20],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(10, 20, 40)',
        'high-color': 'rgb(30, 50, 80)',
        'horizon-blend': 0.3,
      });
    });

    // Add markers for key ports
    const ports = [
      { name: 'USA - Gulf Coast', coords: [-90, 29] },
      { name: 'USA - East Coast', coords: [-74, 40] },
      { name: 'USA - West Coast', coords: [-118, 34] },
      { name: 'Mexico', coords: [-99, 19] },
      { name: 'Brazil', coords: [-43, -23] },
      { name: 'Canada', coords: [-123, 49] },
      { name: 'Egypt', coords: [31, 30] },
      { name: 'Guyana', coords: [-58, 6] },
      { name: 'Trinidad & Tobago', coords: [-61, 11] },
      { name: 'Lebanon', coords: [35, 34] },
      { name: 'Angola', coords: [13, -9] },
    ];

    ports.forEach(port => {
      const el = document.createElement('div');
      el.className = 'w-4 h-4 bg-accent rounded-full border-2 border-white shadow-glow animate-pulse';
      
      new mapboxgl.Marker(el)
        .setLngLat(port.coords as [number, number])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<strong>${port.name}</strong>`))
        .addTo(map.current!);
    });

    // Rotation animation
    const secondsPerRevolution = 180;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;

    function spinGlobe() {
      if (!map.current) return;
      
      const zoom = map.current.getZoom();
      if (!userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', () => { spinGlobe(); });

    spinGlobe();

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default GlobalMap;
