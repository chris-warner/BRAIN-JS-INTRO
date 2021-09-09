const net = new brain.NeuralNetwork({
    // hiddenLayers:[4, 5, 6]
});

//You can hit the print button and copy the training data from dev tools and paste it here.
const data = [
  //initial dataset
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  //trained data added from print
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
  {
    input: {
      r: 0.9997737983010302,
      g: 0.8661319456688881,
      b: 0.475133581046449,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5254856509252501,
      g: 0.041433210366922824,
      b: 0.7110443385793261,
    },
    output: [1],
  },
  {
    input: {
      r: 0.38615034440360496,
      g: 0.9054823159538461,
      b: 0.8916812396245579,
    },
    output: [0],
  },
  {
    input: {
      r: 0.1259598898293539,
      g: 0.2565245059379728,
      b: 0.28360917096111216,
    },
    output: [1],
  },
  {
    input: {
      r: 0.475030832302886,
      g: 0.026376750206923205,
      b: 0.04775183805480587,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5342109809787341,
      g: 0.6978911414403783,
      b: 0.3289673842334271,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7249446357786931,
      g: 0.4018436127762721,
      b: 0.6643113444349706,
    },
    output: [1],
  },
  {
    input: {
      r: 0.40795274294310224,
      g: 0.19048392154983684,
      b: 0.9454503854017249,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9809983046294632,
      g: 0.14700903582317304,
      b: 0.07535026119625576,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8104317158289209,
      g: 0.3141607699779836,
      b: 0.9055049982194383,
    },
    output: [1],
  },
  {
    input: {
      r: 0.1966618923394139,
      g: 0.33042734908265614,
      b: 0.0006099226471270036,
    },
    output: [1],
  },
  {
    input: {
      r: 0.2471794392733333,
      g: 0.2903879234620297,
      b: 0.06769137283476145,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4333077920301476,
      g: 0.7000889538326402,
      b: 0.150105474388317,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6827048340669302,
      g: 0.35787043869970847,
      b: 0.08072637112282632,
    },
    output: [1],
  },
  {
    input: {
      r: 0.06832902053653278,
      g: 0.20310583252789605,
      b: 0.8547995054769786,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4018121436088231,
      g: 0.2251741316510445,
      b: 0.49871872387778815,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9030931135577591,
      g: 0.20481213040289115,
      b: 0.8333830861510931,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8787907370389687,
      g: 0.778575175879034,
      b: 0.11310294054532077,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5002148578252767,
      g: 0.27591584359539323,
      b: 0.2313420761295768,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3269221997657241,
      g: 0.0665988295890898,
      b: 0.029728087192449015,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5120048027063724,
      g: 0.9882221782802332,
      b: 0.6173033574181646,
    },
    output: [0],
  },
  {
    input: {
      r: 0.46872747923225866,
      g: 0.8287887861131753,
      b: 0.22879607662473744,
    },
    output: [0],
  },
  {
    input: {
      r: 0.49775786038044045,
      g: 0.1487235296189211,
      b: 0.8601411009688629,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6813097392635417,
      g: 0.5638419250311513,
      b: 0.3155497829327525,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7695450808690174,
      g: 0.43997429562543133,
      b: 0.6188191379341912,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9919579118582857,
      g: 0.25367953042416325,
      b: 0.07881279716933154,
    },
    output: [1],
  },
  {
    input: {
      r: 0.11246791858627536,
      g: 0.05854296968580086,
      b: 0.6868403842141999,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6999669159289532,
      g: 0.6744728909389037,
      b: 0.8540433371560081,
    },
    output: [0],
  },
  {
    input: {
      r: 0.37601245487660107,
      g: 0.7769935708667943,
      b: 0.27993224608262635,
    },
    output: [0],
  },
  {
    input: {
      r: 0.17121895150545785,
      g: 0.05021791190574998,
      b: 0.21556175506162978,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6381747241456148,
      g: 0.5893119586053857,
      b: 0.2426167780621835,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4990038683170597,
      g: 0.3915622409546786,
      b: 0.07365096050691133,
    },
    output: [1],
  },
  {
    input: {
      r: 0.09344928015315124,
      g: 0.6731922223131128,
      b: 0.10079677517857366,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3997775110402235,
      g: 0.1782887364941783,
      b: 0.15032511089535316,
    },
    output: [1],
  },
  {
    input: {
      r: 0.636084146823428,
      g: 0.6332292197026299,
      b: 0.797675108990529,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5999859532889373,
      g: 0.7933988118034543,
      b: 0.8979107995288642,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8997570018240892,
      g: 0.25742951148621884,
      b: 0.5721621763840736,
    },
    output: [1],
  },
  {
    input: {
      r: 0.804813398790367,
      g: 0.7656790727976202,
      b: 0.4103867276659583,
    },
    output: [0],
  },
  {
    input: {
      r: 0.14325279445791117,
      g: 0.2769914918096752,
      b: 0.6645306089672092,
    },
    output: [1],
  },
  {
    input: {
      r: 0.46601398090297774,
      g: 0.0076886250855328075,
      b: 0.3721761899025431,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6390496479179955,
      g: 0.7138371813930993,
      b: 0.4273270928598345,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5070636691921715,
      g: 0.10510730290044878,
      b: 0.8239522323863635,
    },
    output: [1],
  },
  {
    input: {
      r: 0.23192393190764915,
      g: 0.9787899344816786,
      b: 0.3601510068330933,
    },
    output: [0],
  },
  {
    input: {
      r: 0.5426783768044317,
      g: 0.5449873643701904,
      b: 0.28519335781104527,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8065915168163924,
      g: 0.9960544675187317,
      b: 0.3008604634170269,
    },
    output: [0],
  },
  {
    input: {
      r: 0.41578481790357324,
      g: 0.7276503579682285,
      b: 0.4915632819191549,
    },
    output: [0],
  },
  {
    input: {
      r: 0.6659725224255013,
      g: 0.5828563285108641,
      b: 0.954071378082775,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9294764459956233,
      g: 0.6987816892496497,
      b: 0.701549282548315,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8902233702216182,
      g: 0.2374289542005581,
      b: 0.9323475591439978,
    },
    output: [1],
  },
  {
    input: {
      r: 0.026017645750571416,
      g: 0.11407255623802914,
      b: 0.2581095127185764,
    },
    output: [1],
  },
  {
    input: {
      r: 0.24176677480239706,
      g: 0.6582418491410365,
      b: 0.8990263283489575,
    },
    output: [0],
  },
  {
    input: {
      r: 0.05704060208164652,
      g: 0.9451815007700903,
      b: 0.584742595842868,
    },
    output: [0],
  },
  {
    input: {
      r: 0.801792819527035,
      g: 0.5213144857098828,
      b: 0.4725868929195278,
    },
    output: [1],
  },
  {
    input: {
      r: 0.1889718537852516,
      g: 0.625051606723477,
      b: 0.7100793298534291,
    },
    output: [0],
  },
  {
    input: {
      r: 0.03602398791638994,
      g: 0.0362236153936335,
      b: 0.30029765358884175,
    },
    output: [1],
  },
  {
    input: {
      r: 0.04398015835584812,
      g: 0.9356220551540595,
      b: 0.8080015378653211,
    },
    output: [0],
  },
  {
    input: {
      r: 0.43729225484946,
      g: 0.16577667526750384,
      b: 0.6951518005068966,
    },
    output: [1],
  },
  {
    input: {
      r: 0.5142852180531401,
      g: 0.3752298738441797,
      b: 0.021491396312104616,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3549742993506002,
      g: 0.044953981817973165,
      b: 0.1050167436474887,
    },
    output: [1],
  },
  {
    input: {
      r: 0.4517068130726065,
      g: 0.4573663605054663,
      b: 0.5927235563472137,
    },
    output: [1],
  },
  {
    input: {
      r: 0.23238168369495216,
      g: 0.37487828136674106,
      b: 0.282855889258516,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7731885698133265,
      g: 0.8540484118934559,
      b: 0.6238910560388831,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7299779652572551,
      g: 0.4074764611304216,
      b: 0.7704374900581006,
    },
    output: [1],
  },
  {
    input: {
      r: 0.7354163011467283,
      g: 0.3956080806564488,
      b: 0.6374956938382925,
    },
    output: [1],
  },
];

//train ai
//works best when inputs are 0-1 values
net.train(data);

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