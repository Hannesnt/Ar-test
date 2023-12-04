
/*import 'https://cdn.jsdelivr.net/gh/aframevr/aframe@1.2.0/dist/aframe-master.min.js';
import 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js';

document.querySelector('a-scene').addEventListener('loaded', () => {
  const arScene = document.querySelector('a-scene');
  const marker = document.querySelector('a-marker');
  const detectedSurface = document.querySelector('#furniture');

  marker.addEventListener('markerFound', () => {
    console.log('Marker found!');
    detectedSurface.setAttribute('visible', 'true');
  });

  marker.addEventListener('markerLost', () => {
    console.log('Marker lost!');
    detectedSurface.setAttribute('visible', 'false');
  });

  detectedSurface.addEventListener('touchstart', () => {
    placeFurnitureOnSurface();
  });

  function placeFurnitureOnSurface() {
    const intersection = getSurfaceIntersection();
    if (intersection) {
      const { point, normal } = intersection;
      detectedSurface.object3D.position.copy(point);
      detectedSurface.object3D.rotation.set(0, THREE.Math.RAD2DEG * normal.x, 0);
      detectedSurface.setAttribute('visible', 'true');
    }
  }

  function getSurfaceIntersection() {
    const raycaster = new THREE.Raycaster();
    const intersections = [];

    raycaster.setFromCamera({ x: 0, y: 0 }, arScene.camera);
    arScene.object3D.updateMatrixWorld();
    raycaster.ray.intersectObject(detectedSurface.object3D, false, intersections);

    return intersections.length > 0 ? intersections[0] : null;
  }
});
*/