var APP_DATA = {
  "scenes": [
    {
      "id": "0-dry-kitchen",
      "name": "DRY KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.005328391805178967,
        "pitch": 0.01778917973548033,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.4057285957705048,
          "pitch": 0.00010739707689921829,
          "rotation": 6.283185307179586,
          "target": "1-wet-kitchen"
        },
        {
          "yaw": -0.641666836302754,
          "pitch": 0.0893184750701792,
          "rotation": 1.5707963267948966,
          "target": "2-hall-way"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wet-kitchen",
      "name": "WET KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-hall-way",
      "name": "HALL WAY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.03918086075906402,
        "pitch": 0.015265566047133916,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.012680117838742,
          "pitch": 0.5109778714201738,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.034576758903121174,
        "pitch": 0.0025442610078556527,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.7714968008804792,
          "pitch": 0.06289317684112561,
          "rotation": 2.356194490192345,
          "target": "0-dry-kitchen"
        },
        {
          "yaw": 1.0076368563843694,
          "pitch": 0.03190638288516112,
          "rotation": 7.853981633974483,
          "target": "2-hall-way"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "KONI 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
