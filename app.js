// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const melkMeisje = new Model('assets/models/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-6.396, 0.104, -8.750);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0, 45.45, 0);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-1.827, 0.043, -0.427);
cuberoom.setScale(-2.636, 0.690, 1.485);
cuberoom.setRotation(-0.76, -36.95, 0);

// create some text
const lamText = new Text('Lisse Art Museum');
lamText.setPosition(-0.1, 2.2, -2.9);
lamText.setFontsize(10);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, -38, 0);

// create an image
const image1 = new XRImage('assets/images/Lisse-049.jpg');
image1.setPosition(-13.951, 2.056, -3.035);
image1.setRotation(-0.74, 43, 178);
image1.setScale(1.5, 1.5, 1.5);

// create an imageí
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(4.139, 1.900, -3.642);
image2.setRotation(0, -39, -1);
image2.setScale(1.5, 1.5, 1.5);

// create an imageí
const image3 = new XRImage('assets/images/Lisse-043.jpg');
image3.setPosition(7.828, 1.900, 5.017);
image3.setRotation(0, -127, 0);
image3.setScale(1.5, 1.5, 1.5);


// create a 360 image
const image360 = new Sky('assets/LamIngang.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-12.10, 35.035, 13.183);
spotLight.setTarget(melkMeisje);

// listen for an event
image1.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘Food Chain Project’ van kunstenaar Itamar Gilboa.");
image1.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image2.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Werkplaats van kunstenaar Folkert de Jong");
image2.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image3.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk van kunstenaar Sabine Tol");
image3.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");

melkMeisje.addEventListener('click', () => 
    document.getElementById('extraText').innerHTML = "Melkmeisje van Vermeer");