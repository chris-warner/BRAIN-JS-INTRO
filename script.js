const net = new brain.NeuralNetwork({
    // hiddenLayers:[4, 5, 6]
});

const data = [
    {
        input: { r: 0, g: 0, b: 0 },
        output: [1]
    },
    {
        input: { r: 1, g: 1, b: 1 },
        output: [0]
    }
]

const data2 = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.3275485530405937,
      g: 0.9093477339832903,
      b: 0.9421283352388958,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4997894047236271,
      g: 0.6270361162466389,
      b: 0.3850438286992135,
    },
    output: [1],
  },
  {
    input: {
      r: 0.37639816212421406,
      g: 0.2590886655274982,
      b: 0.1158542929346329,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9886886639899206,
      g: 0.5766915618740833,
      b: 0.4744118562876234,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6044818686462416,
      g: 0.3820824036884718,
      b: 0.3986160295985104,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2311688945455166,
      g: 0.18246048110408153,
      b: 0.9842646039916296,
    },
    output: [1],
  },
  {
    input: {
      r: 0.08344981077587565,
      g: 0.6991030407883279,
      b: 0.4340400438412737,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6429436772356154,
      g: 0.052437636488569694,
      b: 0.5839338584475937,
    },
    output: [1],
  },
  {
    input: {
      r: 0.22907538838056918,
      g: 0.3576723282606138,
      b: 0.08806305739513776,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2568293868763587,
      g: 0.8774139544307649,
      b: 0.38362261796446506,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5209435261639019,
      g: 0.4863425027162631,
      b: 0.42830080747282917,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6039375717487125,
      g: 0.23552772936324162,
      b: 0.9499816102352361,
    },
    output: [1],
  },
  {
    input: {
      r: 0.28435582280799343,
      g: 0.1305286411961466,
      b: 0.06623440670466652,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3368535524405143,
      g: 0.002688083085997661,
      b: 0.8072099202131979,
    },
    output: [1],
  },
  {
    input: {
      r: 0.20366203515404946,
      g: 0.7664176517681791,
      b: 0.27497359665733856,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7753318865638805,
      g: 0.07602412413437043,
      b: 0.6343468155255527,
    },
    output: [1],
  },
  {
    input: {
      r: 0.39307570314962015,
      g: 0.7130656765349237,
      b: 0.61138526287724,
    },
    output: [0],
  },
  {
    input: {
      r: 0.08950868103938436,
      g: 0.6891656192107805,
      b: 0.6181800629828804,
    },
    output: [0],
  },
  {
    input: {
      r: 0.670871439189854,
      g: 0.24594426668973113,
      b: 0.09825128895814328,
    },
    output: [1],
  },
  {
    input: {
      r: 0.18998123307077308,
      g: 0.13315797391047046,
      b: 0.1149697377597465,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3234539542862891,
      g: 0.9672466182347992,
      b: 0.9501237079594316,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6631376358661136,
      g: 0.5595106881884748,
      b: 0.8602685904004967,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7281745567144371,
      g: 0.5747123907553997,
      b: 0.5720001138532906,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9435638118368812,
      g: 0.7542936368748634,
      b: 0.35943692017474405,
    },
    output: [0],
  },
];

//train ai
//works best when inputs are 0-1 values
net.train(data2);

const colorE1 = document.getElementById('color');
const guessE1 = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');
let color;
setRandomColor();

whiteButton.addEventListener('click', () => {
    chooseColor(1);
});

blackButton.addEventListener('click', () => {
    chooseColor(0);
});

printButton.addEventListener('click', print);

function chooseColor(value) {
    data.push({

        input: color,
        output: [value]
    });
    setRandomColor();
}

function print() {
    console.log(JSON.stringify(data));
}

function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }
    const guess = net.run(color)[0];
    guessE1.style.color = guess > .5 ? '#FFF' : '#000';
    colorE1.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
}