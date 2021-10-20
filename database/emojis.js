const baseUrl = 'https://emojipedia-us.s3.amazonaws.com/source/skype/289'

module.exports = {
  e_valence: [
    { id: 0.1,
      name: '😠 Angry Face',
      url: `${baseUrl}/pouting-face_1f621.png`,
      description: ['anger', 'grumpiness', 'irritation', 'disgust', 'outrage']
    },
    { id: 0.2,
      name: '😭 Loudly Crying Face',
      url: `${baseUrl}/loudly-crying-face_1f62d.png`,
      description: ['inconsolable grief']
    },
    { id: 0.3,
      name: '😢 Crying Face',
      url: `${baseUrl}/crying-face_1f622.png`,
      description: ['moderate degree of sadness', 'pain']
    },
    { id: 0.4,
      name: '🥴 Woozy Face',
      url: `${baseUrl}/woozy-face_1f974.png`,
      description: ['intoxication', 'infatuation', 'bewilderment', 'irritation', 'disgust', 'exhaustion', 'wackiness']
    },
    {
      id: 0.5,
      name: '☹️ Frowning Face',
      url: `${baseUrl}/frowning-face_2639-fe0f.png`,
      description: ['moderate concern','disappointment', 'affectionate', 'sadness', 'missing a loved one']
    },
    { id: 0.6,
      name: '🙁 Slightly Frowning Face',
      url: `${baseUrl}/slightly-frowning-face_1f641.png`,
      description: ['mild degree of concern', 'disappointment', 'sadness']
    },
    { id: 0.7,
      name: '😀 Happy Face',
      url: `${baseUrl}/grinning-face_1f600.png`,
      description: ['pleasure', 'good cheer', 'humor']
    },
    { id: 0.8,
      name: '☺️ Smiling Face',
      url: `${baseUrl}/smiling-face-with-smiling-eyes_1f60a.png`,
      description: ['warm', 'positive', 'love', 'happiness', 'gratitude']
    },
    { id: 0.9,
      name: '😁 Beaming Face with Smiling Eyes',
      url: `${baseUrl}/beaming-face-with-smiling-eyes_1f601.png`,
      description: ['radiant', 'gratified happiness']
    },
    { id: 1.0,
      name: '🥰 Smiling Face with Hearts',
      url: `${baseUrl}/smiling-face-with-hearts_1f970.png`,
      description: [ 'happy', 'affectionate','being in love']
    }
  ],
  e_danceability: [
    { id: 0.0,
      name: '🧍‍♀️ Woman Standing',
      url: `${baseUrl}/woman-standing_1f9cd-200d-2640-fe0f.png`,
      description: 'Least danceable'
    },
    { id: 0.5,
      name: '🛹 Skateboard',
      url: `${baseUrl}/skateboard_1f6f9.png`,
      description: 'Right danceable'
    },
    { id: 1,
      name: '🕺 Man Dancing',
      url: `${baseUrl}/man-dancing_1f57a.png`,
      description: 'Most danceable'
    }
  ],
  e_energy: [
    { id: 0,
      name: '🧘‍♀️ Woman in Lotus Position',
      url: `${baseUrl}/woman-in-lotus-position_1f9d8-200d-2640-fe0f.png`,
      description: 'Slow pace, quite, soft'
    },
    {
      id: 0.25,
      name: '🚶 Walking',
      url: `${baseUrl}/person-running_1f3c3.png`,
      description: 'Slow-medium pace'
    },
    {
      id: 0.5,
      name: '🚗 Driving',
      url: `${baseUrl}/automobile_1f697.png`,
      description: 'Medium pace'
    },
    { id: 0.75,
      name: '✈️ Airplane',
      url: `${baseUrl}/airplane_2708-fe0f.png`,
      description: 'Fast pace'
    },
    { id: 1,
      name: '🚀 Rocket',
      url:`${baseUrl}/rocket_1f680.png`,
      description: 'Super-fast pace, loudest, nosisy'
    }
  ],
  e_instrumentalness: [
    { id: 0.0,
      name: '🎤Microphone',
      url: `${baseUrl}/microphone_1f3a4.png`,
      description: 'Low confidence to instrumental(vocal)'
    },
    { id: 0.5,
      name: '🎶 Musical Notes',
      url: `${baseUrl}/musical-notes_1f3b6.png`,
      description: 'Medium confidence to instrumental'
    },
    { id: 1,
      name: '🎺 Trumpet',
      url: `${baseUrl}/saxophone_1f3b7.png`,
      description: 'High confidence to instrumental'
    }
  ]
}
