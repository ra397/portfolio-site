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

const overlay = customOverlay(img.src, bbox, customOverlayMap, /* different image */)