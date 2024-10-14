let scene, camera, renderer, textMesh;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometry = new THREE.TextGeometry('Mauricio Molina', {
            font: font,
            size: 10,
            height: 2,
            curveSegments: 12,
        });

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textGeometry.center();  
        scene.add(textMesh);

        animate();
    });

}


function animate() {
    requestAnimationFrame(animate);
    if (textMesh) {
        textMesh.rotation.y += 0.01; 
        textMesh.rotation.x += 0.01;
        textMesh.rotation.z += 0.01;
        //agrego la rotacion en los tres ejes
    }

    renderer.render(scene, camera);
}

init();