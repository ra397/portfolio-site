// CustomOverlay Demo
const customOverlayMap = new google.maps.Map(document.getElementById("customOverlayMap"), {
    center: {lat: 41.56366911194603, lng: -93.33646292697766},
    zoom: 6,
    minZoom: 4,
    maxZoom: 12,
    clickableIcons: false,
    disableDefaultUI: true,
});

const img = new Image();
img.src = "./assets/cat.png";

const bbox = {
    "sw": {
        "lng": -97.688726148,
        "lat": 40.344952682
    },
    "ne": {
        "lng": -90.217149722,
        "lat": 43.574378869
    }
};

const overlay = customOverlay(img.src, bbox, customOverlayMap);

// RasterGenerator Demo
const rasterGeneratorMap = new google.maps.Map(document.getElementById("rasterGeneratorMap"), {
    center: {lat: 38.66952840280871, lng: -96.19290823947766},
    zoom: 4,
    minZoom: 3,
    maxZoom: 12,
    clickableIcons: false,
    disableDefaultUI: true,
});

async function loadAndDisplayPopulationRaster() {
    const  { data, width, dtype } = await fetch('./assets/usa_pop.json').then(r => r.json());
    const bytes = Uint8Array.from(atob(data), c => c.charCodeAt(0));
    const populationArray = new Uint16Array(bytes.buffer);

    const colorMap = [
        { min: 0,     max: 1,      rgba: [0, 0, 0, 0] },           // No population - transparent
        { min: 1,     max: 10,     rgba: [255, 255, 212, 255] },    // Pale yellow
        { min: 10,    max: 50,     rgba: [254, 240, 178, 255] },    // Light yellow
        { min: 50,    max: 100,    rgba: [254, 217, 142, 255] },    // Yellow-orange
        { min: 100,   max: 250,    rgba: [253, 187, 104, 255] },    // Light orange
        { min: 250,   max: 500,    rgba: [253, 141, 60, 255] },     // Orange
        { min: 500,   max: 1000,   rgba: [252, 78, 42, 255] },      // Red-orange
        { min: 1000,  max: 2500,   rgba: [227, 26, 28, 255] },      // Red
        { min: 2500,  max: 5000,   rgba: [189, 0, 38, 255] },       // Dark red
        { min: 5000,  max: 10000,  rgba: [143, 0, 51, 255] },       // Crimson
        { min: 10000, max: 25000,  rgba: [103, 0, 61, 255] },       // Dark magenta
        { min: 25000, max: 55001,  rgba: [63, 0, 60, 255] },        // Deep purple-black
    ];
    const bbox = {
        "sw": {
            "lng": -126.672711178,
            "lat": 19.804486768
        },
        "ne": {
            "lng": -65.939069416,
            "lat": 56.942856349
        }
    };
    const image = new RasterGenerator(populationArray, width, populationArray.length / width, colorMap);
    const imageUrl = await image.generateUrl();
    const overlay = customOverlay(imageUrl, bbox, rasterGeneratorMap);
    overlay.setOpacity(0.7);
}

loadAndDisplayPopulationRaster();

// MarkerCollection Demo
async function loadAndDisplayCollegeMarkers() {
    const markersMap = new google.maps.Map(document.getElementById("markersMap"), {
        center: {lat: 38.66952840280871, lng: -96.19290823947766},
        zoom: 4,
        minZoom: 3,
        maxZoom: 12,
        clickableIcons: false,
        disableDefaultUI: true,
    });

    const collegesData = await fetch("./assets/usa_colleges.json").then(r => r.json());
    const markers = new MarkerCollection(markersMap);
    for (const college of collegesData) {
        const [lat, lng, name] = college;
        markers.add(lat, lng, { name });
    }
    markers.setColor("red");
    markers.setSize(2.5);
}

loadAndDisplayCollegeMarkers();