var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "ben wolin - overworld"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1579496358",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "overworld-southwest",
            "zoomLevels": 6,
            "defaultZoom": 4,
            "maxZoom": 6,
            "path": "survivalday-southwest",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ben wolin - overworld",
            "last_rendertime": 1579494886,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": false,
            "center": [
                270,
                64,
                180
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 2
        },
        {
            "name": "overworld-northeast",
            "zoomLevels": 6,
            "defaultZoom": 4,
            "maxZoom": 6,
            "path": "survivalday-northeast",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "ben wolin - overworld",
            "last_rendertime": 1579494886,
            "imgextension": "jpg",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": false,
            "center": [
                270,
                64,
                180
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
