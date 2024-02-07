"use strict";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Update view when resizing
window.addEventListener("resize", function () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// Create controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// AxisHelper
// const axes = new THREE.AxisHelper(50);
// scene.add(axes);

//Camera Starting position
camera.position.x = 25;
camera.position.y = 25;
camera.position.z = 25;
camera.lookAt(scene.position);

function createPlane() {
  const planeGeometry = new THREE.PlaneGeometry(200, 200, 200);
  const planeMaterial = new THREE.MeshPhongMaterial({
    color: 0x274e13,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  scene.add(plane);
}

// function toets(x = 0, y = 0) {
//   var box1 = new THREE.Mesh(
//     new THREE.CubeGeometry(10, 10, 10),
//     new THREE.MeshToonMaterial({ color: 0x0000ff })
//   );
//   box1.position.x = 2 + x;
//   box1.position.y = 2 + y;

//   var box2 = new THREE.Mesh(
//     new THREE.CubeGeometry(10, 10, 10),
//     new THREE.MeshToonMaterial({ color: 0xa4db8d })
//   );
//   box1.position.x = 8 + x;
//   box1.position.y = 8 + y;

//   scene.add(box1);
//   scene.add(box2);
// }

//Create Road

function createRoad(x = 0, z = 0, r = 0) {
  const roadGeometry = new THREE.CubeGeometry(10, 0.5, 12);
  const roadMaterial = new THREE.MeshPhongMaterial({
    color: 0x1b1b1b,
    side: THREE.FrontSide,
    wireframe: false,
  });
  const road = new THREE.Mesh(roadGeometry, roadMaterial);

  road.position.x = x;
  road.position.z = z;
  road.position.y = 0.5;
  road.rotation.y = 0.5 * Math.PI * r;
  scene.add(road);
}
function createRoadInter() {
  //Create Road Intersection

  const roadIntersectionGeometry = new THREE.CubeGeometry(12, 0.5, 12);
  const roadIntersectionMaterial = new THREE.MeshPhongMaterial({
    color: 0x1b1b1b,
    side: THREE.FrontSide,
    wireframe: false,
  });

  const roadIntersection = new THREE.Mesh(
    roadIntersectionGeometry,
    roadIntersectionMaterial
  );
  roadIntersection.position.y = 0.5;

  scene.add(roadIntersection);
}
function createMiddlewalk() {
  const middlewalkGeometry = new THREE.CubeGeometry(10, 1, 1);
  const middlewalkMaterial = new THREE.MeshPhongMaterial({
    color: 0x828282,
    side: THREE.FrontSide,
    wireframe: false,
  });
  const middlewalkWest = new THREE.Mesh(middlewalkGeometry, middlewalkMaterial);
  const middlewalkEast = new THREE.Mesh(middlewalkGeometry, middlewalkMaterial);
  const middlewalkNorth = new THREE.Mesh(
    middlewalkGeometry,
    middlewalkMaterial
  );
  const middlewalkSouth = new THREE.Mesh(
    middlewalkGeometry,
    middlewalkMaterial
  );

  middlewalkWest.position.x = -11;
  middlewalkWest.position.y = 0.5;
  middlewalkWest.position.z = 0;

  middlewalkEast.position.x = 11;
  middlewalkEast.position.y = 0.5;
  middlewalkEast.position.z = 0;

  middlewalkNorth.position.x = 0;
  middlewalkNorth.position.y = 0.5;
  middlewalkNorth.position.z = -11;
  middlewalkNorth.rotation.y = 0.5 * Math.PI;

  middlewalkSouth.position.x = 0;
  middlewalkSouth.position.y = 0.5;
  middlewalkSouth.position.z = +11;
  middlewalkSouth.rotation.y = 0.5 * Math.PI;

  scene.add(middlewalkWest);
  scene.add(middlewalkEast);
  scene.add(middlewalkNorth);
  scene.add(middlewalkSouth);
}
function createSidewalk() {
  //Create sidewalk
  const sidewalkGeometry = new THREE.CubeGeometry(80, 1, 3);
  const sidewalkMaterial = new THREE.MeshPhongMaterial({
    color: 0x828282,
    side: THREE.FrontSide,
    wireframe: false,
  });
  const sidewalkWestSouth = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  const sidewalkWestNorth = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  const sidewalkEastSouth = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  const sidewalkEastNorth = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  const sidewalkSouthWest = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  const sidewalkSouthEast = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  const sidewalkNorthEast = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  const sidewalkNorthWest = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);

  sidewalkWestSouth.position.x = -46.5;
  sidewalkWestSouth.position.y = 0.5;
  sidewalkWestSouth.position.z = 8;

  sidewalkWestNorth.position.x = -46.5;
  sidewalkWestNorth.position.y = 0.5;
  sidewalkWestNorth.position.z = -8;

  sidewalkEastSouth.position.x = 46.5;
  sidewalkEastSouth.position.y = 0.5;
  sidewalkEastSouth.position.z = 8;

  sidewalkEastNorth.position.x = 46.5;
  sidewalkEastNorth.position.y = 0.5;
  sidewalkEastNorth.position.z = -8;

  sidewalkSouthWest.rotation.y = 0.5 * Math.PI;
  sidewalkSouthWest.position.x = -8;
  sidewalkSouthWest.position.y = 0.5;
  sidewalkSouthWest.position.z = 47;

  sidewalkSouthEast.rotation.y = 0.5 * Math.PI;
  sidewalkSouthEast.position.x = 8;
  sidewalkSouthEast.position.y = 0.5;
  sidewalkSouthEast.position.z = 47;

  sidewalkNorthWest.rotation.y = 0.5 * Math.PI;
  sidewalkNorthWest.position.x = 8;
  sidewalkNorthWest.position.y = 0.5;
  sidewalkNorthWest.position.z = -47;

  sidewalkNorthEast.rotation.y = 0.5 * Math.PI;
  sidewalkNorthEast.position.x = -8;
  sidewalkNorthEast.position.y = 0.5;
  sidewalkNorthEast.position.z = -47;

  scene.add(sidewalkWestSouth);
  scene.add(sidewalkWestNorth);
  scene.add(sidewalkEastSouth);
  scene.add(sidewalkEastNorth);
  scene.add(sidewalkSouthWest);
  scene.add(sidewalkSouthEast);
  scene.add(sidewalkNorthWest);
  scene.add(sidewalkNorthEast);
}

function createRoadside() {
  const RoadsideGeometry = new THREE.CubeGeometry(1.25, 0.625, 0.625);
  const Roadside1Material = new THREE.MeshPhongMaterial({
    color: 0x444444,
    side: THREE.FrontSide,
    wireframe: false,
  });
  const Roadside2Material = new THREE.MeshPhongMaterial({
    color: 0x666666,
    side: THREE.FrontSide,
    wireframe: false,
  });

  //EastSouth
  let p = 6.625;
  let q = 7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.position.x = p;
    roadsideBlock1.position.z = 6.3125;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.position.x = q;
    roadsideBlock2.position.z = 6.3125;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p += 2.5;
    q += 2.5;
  }

  //EastNorth
  p = 6.625;
  q = 7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.position.x = p;
    roadsideBlock1.position.z = -6.3125;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.position.x = q;
    roadsideBlock2.position.z = -6.3125;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p += 2.5;
    q += 2.5;
  }

  //WestSouth
  p = -6.625;
  q = -7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.position.x = p;
    roadsideBlock1.position.z = 6.3125;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.position.x = q;
    roadsideBlock2.position.z = 6.3125;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p -= 2.5;
    q -= 2.5;
  }

  //WestNorth
  p = -6.625;
  q = -7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.position.x = p;
    roadsideBlock1.position.z = -6.3125;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.position.x = q;
    roadsideBlock2.position.z = -6.3125;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p -= 2.5;
    q -= 2.5;
  }

  //SouthEast
  p = 6.625;
  q = 7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.rotation.y = 0.5 * Math.PI;
    roadsideBlock1.position.x = 6.3125;
    roadsideBlock1.position.z = p;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.rotation.y = 0.5 * Math.PI;
    roadsideBlock2.position.x = 6.3125;
    roadsideBlock2.position.z = q;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p += 2.5;
    q += 2.5;
  }

  //NorthEast
  p = -6.625;
  q = -7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.rotation.y = 0.5 * Math.PI;
    roadsideBlock1.position.x = 6.3125;
    roadsideBlock1.position.z = p;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.rotation.y = 0.5 * Math.PI;
    roadsideBlock2.position.x = 6.3125;
    roadsideBlock2.position.z = q;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p -= 2.5;
    q -= 2.5;
  }

  //SouthWest
  p = 6.625;
  q = 7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.rotation.y = 0.5 * Math.PI;
    roadsideBlock1.position.x = -6.3125;
    roadsideBlock1.position.z = p;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.rotation.y = 0.5 * Math.PI;
    roadsideBlock2.position.x = -6.3125;
    roadsideBlock2.position.z = q;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p += 2.5;
    q += 2.5;
  }

  //NorthWest
  p = -6.625;
  q = -7.875;
  for (let i = 1; i < 34; i++) {
    const roadsideBlock1 = new THREE.Mesh(RoadsideGeometry, Roadside1Material);
    roadsideBlock1.rotation.y = 0.5 * Math.PI;
    roadsideBlock1.position.x = -6.3125;
    roadsideBlock1.position.z = p;
    roadsideBlock1.position.y = 0.75;
    scene.add(roadsideBlock1);

    const roadsideBlock2 = new THREE.Mesh(RoadsideGeometry, Roadside2Material);
    roadsideBlock2.rotation.y = 0.5 * Math.PI;
    roadsideBlock2.position.x = -6.3125;
    roadsideBlock2.position.z = q;
    roadsideBlock2.position.y = 0.75;
    scene.add(roadsideBlock2);
    p -= 2.5;
    q -= 2.5;
  }
}

function createTrafficLight(x = 0, z = 0, r = 0) {
  const trafficPolegeometry = new THREE.CylinderGeometry(0.05, 0.1, 4, 20);
  const trafficPolematerial = new THREE.MeshPhongMaterial({
    color: 0xcccc00,
    wireframe: false,
  });
  const trafficPolecylinder = new THREE.Mesh(
    trafficPolegeometry,
    trafficPolematerial
  );
  trafficPolecylinder.position.y = 2;
  trafficPolecylinder.position.x = x;
  trafficPolecylinder.position.z = z;

  scene.add(trafficPolecylinder);

  const trafficBoxGeometry = new THREE.BoxGeometry(0.6, 1.25, 1);

  const trafficBoxMaterial = new THREE.MeshPhongMaterial({
    color: 0xca7900,
    side: THREE.DoubleSide,
    wireframe: false,
  });

  const trafficBox = new THREE.Mesh(trafficBoxGeometry, trafficBoxMaterial);
  trafficBox.position.y = 3.25;
  trafficBox.position.x = x;
  trafficBox.position.z = z;
  trafficBox.rotation.y = 0.5 * Math.PI * r;
  scene.add(trafficBox);

  const redLightgeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.25, 20);
  const redLightmaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: false,
  });
  const redLightcircle = new THREE.Mesh(redLightgeometry, redLightmaterial);
  redLightcircle.rotation.x = 0.5 * Math.PI;
  redLightcircle.rotation.z = 0.5 * Math.PI * r;
  redLightcircle.position.y = 3.6;
  redLightcircle.position.z = z;
  redLightcircle.position.x = x;

  scene.add(redLightcircle);

  const yellowLightgeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.25, 20);
  const yellowLightmaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    wireframe: false,
  });
  const yellowLightcircle = new THREE.Mesh(
    yellowLightgeometry,
    yellowLightmaterial
  );
  yellowLightcircle.rotation.x = 0.5 * Math.PI;
  yellowLightcircle.rotation.z = 0.5 * Math.PI * r;
  yellowLightcircle.position.y = 3.22;
  yellowLightcircle.position.z = z;
  yellowLightcircle.position.x = x;
  scene.add(yellowLightcircle);

  const greenLightgeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.25, 20);
  const greenLightmaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
  });
  const greenLightcircle = new THREE.Mesh(
    greenLightgeometry,
    greenLightmaterial
  );
  greenLightcircle.rotation.x = 0.5 * Math.PI;
  greenLightcircle.rotation.z = 0.5 * Math.PI * r;
  greenLightcircle.position.y = 2.85;
  greenLightcircle.position.z = z;
  greenLightcircle.position.x = x;
  scene.add(greenLightcircle);
}

function createStreetLight(x = 0, z = 0, r = 0) {
  const trafficPolegeometry = new THREE.CylinderGeometry(0.05, 0.1, 4, 20);
  const trafficPolematerial = new THREE.MeshPhongMaterial({
    color: 0xcccc00,
    wireframe: false,
  });

  const trafficPolecylinder = new THREE.Mesh(
    trafficPolegeometry,
    trafficPolematerial
  );
  trafficPolecylinder.position.y = 2;
  trafficPolecylinder.position.x = x;
  trafficPolecylinder.position.z = z;
  scene.add(trafficPolecylinder);

  const trafficBoxGeometry = new THREE.BoxGeometry(0.3, 0.2, 1);

  const trafficBoxMaterial = new THREE.MeshPhongMaterial({
    color: 0xca7900,
    side: THREE.DoubleSide,
    wireframe: false,
  });

  const trafficBox = new THREE.Mesh(trafficBoxGeometry, trafficBoxMaterial);
  trafficBox.position.y = 4;
  trafficBox.position.x = x;
  trafficBox.position.z = z - 0.4;
  trafficBox.rotation.y = 0.5 * Math.PI * r;
  scene.add(trafficBox);
}

createStreetLight(20, 7, 10);
createStreetLight(30, 7, 10);
createStreetLight(-20, 7, 10);
createStreetLight(-30, 7, 10);

// Create sceen;
createPlane();

createRoad(20, 0, 0);
createRoad(30, 0, 0);
createRoad(40, 0, 0);
createRoad(50, 0, 0);
createRoad(60, 0, 0);
createRoad(70, 0, 0);

createRoad(-20, 0, 0);
createRoad(-30, 0, 0);
createRoad(-40, 0, 0);
createRoad(-50, 0, 0);
createRoad(-60, 0, 0);
createRoad(-70, 0, 0);

createRoad(0, 20, 1);
createRoad(0, 30, 1);
createRoad(0, 40, 1);
createRoad(0, 50, 1);
createRoad(0, 60, 1);
createRoad(0, 70, 1);

createRoad(0, -20, 1);
createRoad(0, -30, 1);
createRoad(0, -40, 1);
createRoad(0, -50, 1);
createRoad(0, -60, 1);
createRoad(0, -70, 1);

createRoad(11, 0, 0);
createRoad(-11, 0, 0);
createRoad(0, 11, 1);
createRoad(0, -11, 1);

createRoadInter();

createSidewalk();
createRoadside();
createMiddlewalk();

createTrafficLight(9, 7, 1);
createTrafficLight(9, 0, 1);
createTrafficLight(-9, 0, 1);
createTrafficLight(-7, 9, 0);
createTrafficLight(7, -9, 0);
createTrafficLight(0, -9, 0);
createTrafficLight(0, 9, 0);
createTrafficLight(-9, -7, 1);

//car
function cars() {
  var car = new THREE.Group();
  var car2 = new THREE.Group();

  scene.add(car);
  scene.add(car2);

  var carMat = new THREE.MeshPhongMaterial({
    wireframe: true,
  });

  var frame = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 0.5, 1.5, 2, 1, 3),
    carMat
  );

  var frame2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 0.5, 1.5, 2, 1, 3),
    carMat
  );
  frame.position.set(0, 1, 0);
  frame2.position.set(0, 1, 0);
  car.add(frame);
  car2.add(frame2);

  var cabin = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 0.5, 0.5, 2, 1, 2),
    carMat
  );

  var cabin2 = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 0.5, 0.5, 2, 1, 2),
    carMat
  );
  cabin.position.set(0, 0.5, -0.5);
  frame.add(cabin);
  cabin2.position.set(0, 0.5, 0.5);
  frame2.add(cabin2);

  // wheels
  var wheels = [];
  var wheelGeom = new THREE.CylinderBufferGeometry(0.25, 0.25, 0.25, 10);
  wheelGeom.rotateZ(Math.PI * 0.5);

  function setWheel(pos) {
    let wheel = new THREE.Mesh(wheelGeom, carMat);
    wheel.position.copy(pos);
    wheels.push(wheel);
    car.add(wheel);
  }

  setWheel(new THREE.Vector3(0.5, 0.75, 0.5));
  setWheel(new THREE.Vector3(0.5, 0.75, -0.5));
  setWheel(new THREE.Vector3(-0.5, 0.75, 0.5));
  setWheel(new THREE.Vector3(-0.5, 0.85, -0.5));

  var wheels2 = [];
  var wheelGeom2 = new THREE.CylinderBufferGeometry(0.25, 0.25, 0.25, 10);
  wheelGeom2.rotateZ(Math.PI * 0.5);

  function setWheel2(pos2) {
    let wheel2 = new THREE.Mesh(wheelGeom2, carMat);
    wheel2.position.copy(pos2);
    wheels2.push(wheel2);
    car2.add(wheel2);
  }

  setWheel2(new THREE.Vector3(0.5, 0.75, 0.5));
  setWheel2(new THREE.Vector3(0.5, 0.75, -0.5));
  setWheel2(new THREE.Vector3(-0.5, 0.75, 0.5));
  setWheel2(new THREE.Vector3(-0.5, 0.85, -0.5));

  car.position.y = 0.25;
  car.position.x = 4;
  car.position.z = -30;

  car2.position.y = 0.25;
  car2.position.x = -4;
  car2.position.z = 30;

  // var lim = 13.5;
  var clock = new THREE.Clock();
  var speed = 3;
  var dir = new THREE.Vector3(0, 0, 1).normalize();
  var move = new THREE.Vector3();
  var pos = new THREE.Vector3();
  // var lookAt = new THREE.Vector3();

  var clock2 = new THREE.Clock();
  var speed2 = -5;
  var dir2 = new THREE.Vector3(0, 0, 1).normalize();
  var move2 = new THREE.Vector3();
  var pos2 = new THREE.Vector3();

  renderer.setAnimationLoop(() => {
    move.copy(dir).multiplyScalar(speed * clock.getDelta());

    var wheelTurn = move.length();
    wheels.forEach((w) => {
      w.rotation.x += wheelTurn;
    });

    move2.copy(dir2).multiplyScalar(speed2 * clock2.getDelta());

    var wheelTurn2 = move2.length();
    wheels2.forEach((w) => {
      w.rotation.x -= wheelTurn2;
    });

    pos.copy(car.position).add(move);
    pos2.copy(car2.position).add(move2);

    car.position.copy(pos);
    car2.position.copy(pos2);
  });
}
////////////////////////////////////////////// Car 01 ////////////////////////////////////////
const car = new THREE.Group();
scene.add(car);

const carMat = new THREE.MeshNormalMaterial({
  wireframe: false,
});

const carFrame = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 0.5, 1.5, 2, 1, 3),
  carMat
);
carFrame.position.set(0, 1, 0);
car.add(carFrame);

const carCabin = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 0.5, 0.5, 2, 1, 2),
  carMat
);

carCabin.position.set(0, 0.5, -0.5);
carFrame.add(carCabin);

// wheels
const carWheels = [];
const carWheelGeom = new THREE.CylinderBufferGeometry(0.25, 0.25, 0.25, 10);
carWheelGeom.rotateZ(Math.PI * 0.5);

function carSetWheel(pos) {
  let wheel = new THREE.Mesh(carWheelGeom, carMat);
  wheel.position.copy(pos);
  carWheels.push(wheel);
  car.add(wheel);
}

carSetWheel(new THREE.Vector3(0.5, 0.75, 0.5));
carSetWheel(new THREE.Vector3(0.5, 0.75, -0.5));
carSetWheel(new THREE.Vector3(-0.5, 0.75, 0.5));
carSetWheel(new THREE.Vector3(-0.5, 0.75, -0.5));

car.position.y = 0.25;
car.position.x = 4.25;
car.position.z = -10;

let carClock = new THREE.Clock();
let carSpeed = 5;
let carDir = new THREE.Vector3(0, 0, 1).normalize();
let carMove = new THREE.Vector3();
let carPos = new THREE.Vector3();

//////////////////////////////////////////////// Car 02 //////////////////////////////////////

const car02 = new THREE.Group();
scene.add(car02);

const car02Mat = new THREE.MeshNormalMaterial({
  wireframe: false,
});

const car02Frame = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 0.5, 1.5, 2, 1, 3),
  car02Mat
);
car02Frame.position.set(0, 1, 0);
car02.add(car02Frame);

const car02Cabin = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 0.5, 0.5, 2, 1, 2),
  car02Mat
);

car02Cabin.position.set(0, 0.5, -0.5);
car02Frame.add(car02Cabin);

// wheels
const car02Wheels = [];
const car02WheelGeom = new THREE.CylinderBufferGeometry(0.25, 0.25, 0.25, 10);
car02WheelGeom.rotateZ(Math.PI * 0.5);

function car02SetWheel(pos) {
  let wheel = new THREE.Mesh(car02WheelGeom, car02Mat);
  wheel.position.copy(pos);
  car02Wheels.push(wheel);
  car02.add(wheel);
}

car02SetWheel(new THREE.Vector3(0.5, 0.75, 0.5));
car02SetWheel(new THREE.Vector3(0.5, 0.75, -0.5));
car02SetWheel(new THREE.Vector3(-0.5, 0.75, 0.5));
car02SetWheel(new THREE.Vector3(-0.5, 0.75, -0.5));

car02.position.y = 0.25;
car02.position.x = 2.5;
car02.position.z = -10;

let car02Clock = new THREE.Clock();
let car02Speed = 3;
let car02Dir = new THREE.Vector3(0, 0, 1).normalize();
let car02Move = new THREE.Vector3();
let car02Pos = new THREE.Vector3();

//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////// TRUCK //////////////////////////////////////

const truck01 = new THREE.Group();
scene.add(truck01);

const truck01Mat = new THREE.MeshNormalMaterial({
  wireframe: false,
});

const truck01Frame = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1.75, 2, 4, 2, 1, 3),
  truck01Mat
);
truck01Frame.position.set(0, 1, 0);
truck01.add(truck01Frame);

const truck01Cabin = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1.5, 1.5, 0.5, 2, 1, 2),
  truck01Mat
);

truck01Cabin.position.set(0, -0.25, -2.5);
truck01Frame.add(truck01Cabin);

const truck01Cabinfront = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1.5, 0.75, 0.75, 2, 1, 2),
  truck01Mat
);

truck01Cabinfront.position.set(0, -0.375, -0.5);
truck01Cabin.add(truck01Cabinfront);

const truck01CabinConnect = new THREE.Mesh(
  new THREE.BoxBufferGeometry(0.75, 0.25, 1, 2, 1, 2),
  truck01Mat
);

truck01CabinConnect.position.set(0, -0.6, 0.5);
truck01Cabin.add(truck01CabinConnect);

// wheels
const truck01Wheels = [];
const truck01WheelGeom = new THREE.CylinderBufferGeometry(0.35, 0.35, 0.25, 10);
truck01WheelGeom.rotateZ(Math.PI * 0.5);

function truck01SetWheel(pos) {
  let wheel = new THREE.Mesh(truck01WheelGeom, truck01Mat);
  wheel.position.copy(pos);
  truck01Wheels.push(wheel);
  truck01.add(wheel);
}

truck01SetWheel(new THREE.Vector3(0.9, 0, 1.4));
truck01SetWheel(new THREE.Vector3(0.9, 0, 0.7));
truck01SetWheel(new THREE.Vector3(-0.9, 0, 1.4));
truck01SetWheel(new THREE.Vector3(-0.9, 0, 0.7));
truck01SetWheel(new THREE.Vector3(0.9, 0, -1.4));
truck01SetWheel(new THREE.Vector3(0.9, 0, -2.75));
truck01SetWheel(new THREE.Vector3(-0.9, 0, -1.4));
truck01SetWheel(new THREE.Vector3(-0.9, 0, -2.75));

truck01.position.y = 1.1;
truck01.position.x = -2;
truck01.position.z = 14;

let truck01Clock = new THREE.Clock();
let truck01Speed = -3;
let truck01Dir = new THREE.Vector3(0, 0, 1).normalize();
let truck01Move = new THREE.Vector3();
let truck01Pos = new THREE.Vector3();

//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////// BUS 01 /////////////////////////////////////

const bus01 = new THREE.Group();
scene.add(bus01);

const bus01Mat = new THREE.MeshNormalMaterial({
  wireframe: false,
});

const bus01Frame = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1.75, 1.1, 6, 2, 1, 3),
  bus01Mat
);
bus01Frame.position.set(0, 1, 0);
bus01.add(bus01Frame);

const bus01FrameTop = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1.7, 1.1, 5.95, 2, 1, 3),
  bus01Mat
);
bus01FrameTop.position.set(0, 1, 0);
bus01Frame.add(bus01FrameTop);

//wheels
const bus01Wheels = [];
const bus01WheelGeom = new THREE.CylinderBufferGeometry(0.35, 0.35, 0.25, 10);
bus01WheelGeom.rotateZ(Math.PI * 0.5);

function bus01SetWheel(pos) {
  let wheel = new THREE.Mesh(bus01WheelGeom, bus01Mat);
  wheel.position.copy(pos);
  bus01Wheels.push(wheel);
  bus01.add(wheel);
}

bus01SetWheel(new THREE.Vector3(0.9, 0.4, 2));
bus01SetWheel(new THREE.Vector3(0.9, 0.4, 1.3));
bus01SetWheel(new THREE.Vector3(-0.9, 0.4, 2));
bus01SetWheel(new THREE.Vector3(-0.9, 0.4, 1.3));
bus01SetWheel(new THREE.Vector3(0.9, 0.4, -2.1));
bus01SetWheel(new THREE.Vector3(-0.9, 0.4, -2.1));

bus01.position.y = 0.7;
bus01.position.x = 15.5;
bus01.position.z = 1.8;
bus01.rotation.y = 0.5 * Math.PI;

let bus01Clock = new THREE.Clock();
let bus01Speed = -1.9;
let bus01Dir = new THREE.Vector3(1, 0, 0).normalize();
let bus01Move = new THREE.Vector3();
let bus01Pos = new THREE.Vector3();

////////////////////////////////////Building1//////////////////////////////////////////////////

function createBuilding(x = 0, z = 0, y = 0, r = 0) {
  const buildingGeometry = new THREE.CubeGeometry(20, 25, 20);
  const buildingMaterial = new THREE.MeshPhongMaterial({
    side: THREE.FrontSide,
    wireframe: false,
    map: new THREE.TextureLoader().load("texture/Brick.jpg"),
  });
  const building = new THREE.Mesh(buildingGeometry, buildingMaterial);

  const windowGeometry = new THREE.CubeGeometry(4, 4, 1);
  const windowMaterial = new THREE.MeshPhongMaterial({
    side: THREE.FrontSide,
    wireframe: false,
    map: new THREE.TextureLoader().load("texture/Window.jpg"),
  });

  const rwindowGeometry = new THREE.CubeGeometry(1, 4, 4);
  const rwindowMaterial = new THREE.MeshPhongMaterial({
    side: THREE.FrontSide,
    wireframe: false,
    map: new THREE.TextureLoader().load("texture/Window.jpg"),
  });
  const window = new THREE.Mesh(windowGeometry, windowMaterial);

  window.position.x = x - 7.5;
  window.position.z = z + 10;
  window.position.y = y + 9;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window);

  const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
  window2.position.x = x - 2.5;
  window2.position.z = z + 10;
  window2.position.y = y + 9;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window2);

  const window3 = new THREE.Mesh(windowGeometry, windowMaterial);
  window3.position.x = x + 2.5;
  window3.position.z = z + 10;
  window3.position.y = y + 9;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window3);

  const window4 = new THREE.Mesh(windowGeometry, windowMaterial);
  window4.position.x = x + 7.5;
  window4.position.z = z + 10;
  window4.position.y = y + 9;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window4);

  const window5 = new THREE.Mesh(windowGeometry, windowMaterial);

  window5.position.x = x - 7.5;
  window5.position.z = z + 10;
  window5.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window5);

  const window6 = new THREE.Mesh(windowGeometry, windowMaterial);
  window6.position.x = x - 2.5;
  window6.position.z = z + 10;
  window6.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window6);

  const window7 = new THREE.Mesh(windowGeometry, windowMaterial);
  window7.position.x = x + 2.5;
  window7.position.z = z + 10;
  window7.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window7);

  const window8 = new THREE.Mesh(windowGeometry, windowMaterial);
  window8.position.x = x + 7.5;
  window8.position.z = z + 10;
  window8.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window8);

  const window9 = new THREE.Mesh(windowGeometry, windowMaterial);

  window9.position.x = x - 7.5;
  window9.position.z = z + 10;
  window9.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window9);

  const window10 = new THREE.Mesh(windowGeometry, windowMaterial);
  window10.position.x = x - 2.5;
  window10.position.z = z + 10;
  window10.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window10);

  const window11 = new THREE.Mesh(windowGeometry, windowMaterial);
  window11.position.x = x + 2.5;
  window11.position.z = z + 10;
  window11.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window11);

  const window12 = new THREE.Mesh(windowGeometry, windowMaterial);
  window12.position.x = x + 7.5;
  window12.position.z = z + 10;
  window12.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(window12);

  const rwindow = new THREE.Mesh(rwindowGeometry, rwindowMaterial);

  rwindow.position.x = x + 10;
  rwindow.position.z = z + 7.5;
  rwindow.position.y = y + 9;
  // rwindow.rotation.y = y * Math.PI * r;
  scene.add(rwindow);

  const rwindow2 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow2.position.x = x + 10;
  rwindow2.position.z = z + 2.5;
  rwindow2.position.y = y + 9;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow2);

  const rwindow3 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow3.position.x = x + 10;
  rwindow3.position.z = z - 2.5;
  rwindow3.position.y = y + 9;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow3);

  const rwindow4 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow4.position.x = x + 10;
  rwindow4.position.z = z - 7.5;
  rwindow4.position.y = y + 9;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow4);

  const rwindow5 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);

  rwindow5.position.x = x + 10;
  rwindow5.position.z = z + 7.5;
  rwindow5.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow5);

  const rwindow6 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow6.position.x = x + 10;
  rwindow6.position.z = z + 2.5;
  rwindow6.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow6);

  const rwindow7 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow7.position.x = x + 10;
  rwindow7.position.z = z - 2.5;
  rwindow7.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow7);

  const rwindow8 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow8.position.x = x + 10;
  rwindow8.position.z = z - 7.5;
  rwindow8.position.y = y + 4;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow8);

  const rwindow9 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);

  rwindow9.position.x = x + 10;
  rwindow9.position.z = z + 7.5;
  rwindow9.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow9);

  const rwindow10 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow10.position.x = x + 10;
  rwindow10.position.z = z + 2.5;
  rwindow10.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow10);

  const rwindow11 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow11.position.x = x + 10;
  rwindow11.position.z = z - 2.5;
  rwindow11.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow11);

  const rwindow12 = new THREE.Mesh(rwindowGeometry, rwindowMaterial);
  rwindow12.position.x = x + 10;
  rwindow12.position.z = z - 7.5;
  rwindow12.position.y = y - 1;
  // building.rotation.y = y * Math.PI * r;
  scene.add(rwindow12);

  building.position.x = x;
  building.position.z = z;
  building.position.y = y;
  // building.rotation.y = y * Math.PI * r;
  scene.add(building);
}

createBuilding(-19.5, -19.5, 12.5, 0);
createBuilding(-45, -19.5, 12.5, 0);
createBuilding(19.5, -19.5, 12.5, 0);
/////////////////////////////////////////////////////////////////////////////////////

let spotLight = new THREE.SpotLight(0xffffff, 2.0);
spotLight.position.set(20, 4, 6.5);
spotLight.angle = (40 * Math.PI) / 180;
spotLight.target.position.set(20, -150, -130);

let spot2Light = new THREE.SpotLight(0xffffff, 2.0);
spot2Light.position.set(30, 4, 6.5);
spot2Light.angle = (40 * Math.PI) / 180;
spot2Light.target.position.set(20, -150, -130);

let spot3Light = new THREE.SpotLight(0xffffff, 2.0);
spot3Light.position.set(-20, 4, 6.5);
spot3Light.angle = (40 * Math.PI) / 180;
spot3Light.target.position.set(20, -150, -130);

let spot4Light = new THREE.SpotLight(0xffffff, 2.0);
spot4Light.position.set(-30, 4, 6.5);
spot4Light.angle = (40 * Math.PI) / 180;
spot4Light.target.position.set(20, -150, -130);

let moveCarsbool = false;
document.getElementById("Car").addEventListener("click", function () {
  moveCarsbool = true;
});

let moveBusbool = false;
document.getElementById("Bus").addEventListener("click", function () {
  moveBusbool = true;
});

let moveTruckbool = false;
document.getElementById("Truck").addEventListener("click", function () {
  moveTruckbool = true;
});
////////////////////////////////////
let skyGeo = new THREE.SphereGeometry(100, 25, 25);
let loader = new THREE.TextureLoader(),
  texture = loader.load("texture/sky3.jpg");
let material = new THREE.MeshBasicMaterial({
  map: texture,
});

let sky = new THREE.Mesh(skyGeo, material);
sky.material.side = THREE.BackSide;
scene.add(sky);

let skyGeoMoon = new THREE.SphereGeometry(100, 25, 25);
let loader1 = new THREE.TextureLoader(),
  texture1 = loader1.load("texture/moon3.jpg");
let material1 = new THREE.MeshBasicMaterial({
  map: texture1,
});

let skymoon = new THREE.Mesh(skyGeoMoon, material1);
skymoon.material.side = THREE.BackSide;

let ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

let ambient2Light = new THREE.AmbientLight(0xffffff, 0.1);

let directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 3, -5);
scene.add(directionalLight);

//Day
document.getElementById("Day").addEventListener("click", function () {
  scene.remove(ambientLight);
  scene.remove(directionalLight);
  scene.remove(sky);
  scene.remove(skymoon);
  scene.remove(spotLight);
  scene.remove(spotLight.target);
  scene.remove(spot2Light);
  scene.remove(spot2Light.target);
  scene.remove(spot3Light);
  scene.remove(spot3Light.target);
  scene.remove(spot4Light);
  scene.remove(spot4Light.target);
  scene.remove(ambient2Light);

  scene.add(sky);
  scene.add(ambientLight);
  scene.add(directionalLight);
});

//Night
document.getElementById("Night").addEventListener("click", function () {
  scene.remove(ambientLight);
  scene.remove(directionalLight);
  scene.remove(sky);
  scene.remove(skymoon);
  scene.remove(spotLight);
  scene.remove(spotLight.target);
  scene.remove(spot2Light);
  scene.remove(spot2Light.target);
  scene.remove(spot3Light);
  scene.remove(spot3Light.target);
  scene.remove(spot4Light);
  scene.remove(spot4Light.target);
  scene.remove(ambient2Light);

  scene.add(ambient2Light);
  scene.add(skymoon);
  scene.add(spotLight);
  scene.add(spotLight.target);
  scene.add(spot2Light);
  scene.add(spot2Light.target);
  scene.add(spot3Light);
  scene.add(spot3Light.target);
  scene.add(spot4Light);
  scene.add(spot4Light.target);
});

// game logic
let update = function () {
  function moveCars() {
    carMove.copy(carDir).multiplyScalar(carSpeed * carClock.getDelta());
    var wheelTurn = carMove.length();
    carWheels.forEach((w) => {
      w.rotation.x += wheelTurn;
    });
    carPos.copy(car.position).add(carMove);
    car.position.copy(carPos);

    car02Move.copy(car02Dir).multiplyScalar(car02Speed * car02Clock.getDelta());
    var wheelTurn = car02Move.length();
    car02Wheels.forEach((w) => {
      w.rotation.x += wheelTurn;
    });
    car02Pos.copy(car02.position).add(car02Move);
    car02.position.copy(car02Pos);
  }
  if (moveCarsbool == true) {
    moveCars();
  }

  function moveTruck() {
    truck01Move
      .copy(truck01Dir)
      .multiplyScalar(truck01Speed * truck01Clock.getDelta());
    var wheelTurn = truck01Move.length();
    truck01Wheels.forEach((w) => {
      w.rotation.x -= wheelTurn;
    });
    truck01Pos.copy(truck01.position).add(truck01Move);
    truck01.position.copy(truck01Pos);
  }
  if (moveTruckbool == true) {
    moveTruck();
  }

  function moveBus() {
    bus01Move.copy(bus01Dir).multiplyScalar(bus01Speed * bus01Clock.getDelta());
    var wheelTurn = bus01Move.length();
    bus01Wheels.forEach((w) => {
      w.rotation.x -= wheelTurn;
    });
    bus01Pos.copy(bus01.position).add(bus01Move);
    bus01.position.copy(bus01Pos);
  }

  if (moveBusbool == true) {
    moveBus();
  }
};
// Draw Scene
const render = function () {
  renderer.render(scene, camera);
};

// run game loop (update, render, repeat)
const GameLoop = function () {
  requestAnimationFrame(GameLoop);

  update();
  render();
};

GameLoop();

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

slider.oninput = function () {
  console.log(slider.value);
  camera.position.x = slider.value;
  camera.position.y = slider.value;
  camera.position.z = slider.value;
};

class Test {
  constructor() {
    const roadGeometry = new THREE.CubeGeometry(10, 0.5, 12);
    const roadMaterial = new THREE.MeshBasicMaterial({
      color: 0x2b2b2b,
      side: THREE.DoubleSide,
      wireframe: false,
      side: THREE.DoubleSide,
    });

    this.road = new THREE.Mesh(roadGeometry, roadMaterial);

    road.position.x = 5;
    road.position.z = 5;
    road.position.y = 0.5;
    road.rotation.y = 0.5 * Math.PI * r;

    scene.add(this.road);
  }
}

new Test();
