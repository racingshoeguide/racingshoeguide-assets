// RacingShoeGuide — Shoe & Keyword Data
// Data verified March 2026

const shoes = [
  // ── Data verified March 2026 from Nike.com, Running Warehouse, Fleet Feet, Solereview, RunRepeat, The Run Testers ──

  { id:1,  brand:'Nike',        name:'Alphafly 3',
    badge:'Maximum Propulsion', badgeType:'red',
    use:'Dual carbon plate, Air Zoom pods. Built for sub-elite marathon ambitions.',
    price:285, wasPrice:null, weight:'218g', drop:'8mm', stack:'40mm', plate:'Dual Carbon',
    score:9.5, scoreColor:'#d4200c', distances:['Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','carbon'],
    img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5a6e9b23-1e99-4b35-8b3e-f0d88afe26b8/alphafly-3-road-racing-shoes-ZqLMKB.png', fb:'🏆' },

  { id:2,  brand:'ASICS',       name:'Metaspeed Sky Tokyo',
    badge:"Editors' Pick 2026", badgeType:'red',
    use:'FF Leap + FF Turbo+ dual foam. Top-rated racer of 2025–26. Best for forefoot strikers.',
    price:270, wasPrice:null, weight:'163g', drop:'5mm', stack:'39mm', plate:'Full Carbon',
    score:9.5, scoreColor:'#d4200c', distances:['5K','10K','Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','10k','carbon'],
    img:'https://images.asics.com/is/image/asics/1013A117_400_SR_RT_GLB?$zoom$', fb:'🚀' },

  { id:3,  brand:'Puma',        name:'Fast-R Nitro Elite 3',
    badge:'Lab-Proven Fastest', badgeType:'red',
    use:'Nitro Elite A-TPU foam. Study-proven 3.15–3.62% efficiency gain over Alphafly 3.',
    price:300, wasPrice:null, weight:'187g', drop:'8mm', stack:'39mm', plate:'Full Carbon',
    score:9.4, scoreColor:'#d4200c', distances:['5K','10K','Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','10k','carbon'],
    img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_450/global/378761/01/sv01/fnd/PNA/fmt/png', fb:'⚡' },

  { id:4,  brand:'Nike',        name:'Vaporfly 4',
    badge:'Most Versatile', badgeType:'gold',
    use:'Lighter than V3. Lower 6mm drop, higher plate angle. Best all-round racer for most runners.',
    price:260, wasPrice:null, weight:'186g', drop:'6mm', stack:'35mm', plate:'Carbon Flyplate',
    score:9.2, scoreColor:'#d4200c', distances:['5K','10K','Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','10k','carbon'],
    img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/vaporfly-3-road-racing-shoes-m5rr3B.png', fb:'👟' },

  { id:5,  brand:'Adidas',      name:'Adizero Adios Pro 4',
    badge:'Most Improved', badgeType:'green',
    use:'Lighter, softer Lightstrike Pro A-TPU foam. Energy Rods 2.0. Best for midfoot/forefoot strikers.',
    price:300, wasPrice:null, weight:'200g', drop:'6mm', stack:'39mm', plate:'Carbon Energy Rods 2.0',
    score:9.2, scoreColor:'#d4200c', distances:['10K','Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','10k','carbon'],
    img:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/68ae7ea7aacd4a9ead39aec20121fae8_9366/Adizero_Adios_Pro_3_Shoes_White_GX6251_01_standard.jpg', fb:'🔵' },

  { id:6,  brand:'Saucony',     name:'Endorphin Elite 2',
    badge:'NEW 2025', badgeType:'green',
    use:'Incredirun A-TPU foam. Ultra-soft, deeply cushioned marathon weapon. 80%+ energy return.',
    price:290, wasPrice:null, weight:'213g', drop:'8mm', stack:'40mm', plate:'Carbon',
    score:9.1, scoreColor:'#d4200c', distances:['Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','carbon'],
    img:'https://images.saucony.com/is/image/Saucony/S20756-130_1?$pdpFlexLarge$&wid=580&hei=420', fb:'🔴' },

  { id:7,  brand:'New Balance', name:'SC Elite V5',
    badge:null, badgeType:null,
    use:'100% PEBA FuelCell. Lighter and faster than V4. Natural, stable feel for marathon distance.',
    price:250, wasPrice:null, weight:'210g', drop:'4mm', stack:'38mm', plate:'Carbon',
    score:9.0, scoreColor:'#c8960a', distances:['Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','carbon'],
    img:'https://nb.scene7.com/is/image/NB/MRCELPK4_nb_02_i?$pdpflexf2$&qlt=70&fmt=webp&wid=880&hei=660', fb:'🌊' },

  { id:8,  brand:'Saucony',     name:'Endorphin Pro 4',
    badge:'Best for Heel Strikers', badgeType:'gold',
    use:'Most stable super shoe. Wide base, carbon plate. Top pick for heel strikers at any distance.',
    price:225, wasPrice:null, weight:'215g', drop:'8mm', stack:'38mm', plate:'Carbon',
    score:8.9, scoreColor:'#c8960a', distances:['10K','Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','10k','carbon'],
    img:'https://images.saucony.com/is/image/Saucony/S20921-100_1?$pdpFlexLarge$&wid=580&hei=420', fb:'🟡' },

  { id:9,  brand:'Brooks',      name:'Hyperion Elite 5',
    badge:null, badgeType:null,
    use:'DNA Gold PEBA foam, Speedvault carbon plate. Stable, natural ride. Best for controlled racers.',
    price:275, wasPrice:null, weight:'196g', drop:'6mm', stack:'38mm', plate:'Carbon',
    score:8.8, scoreColor:'#c8960a', distances:['10K','Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','10k','carbon'],
    img:'https://www.brooksrunning.com/dw/image/v2/BGPB_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dwd6e38bce/images/110396/110396-165-l-hyperion-elite-4-road-racing-shoe.png?sw=500&sh=375&sm=fit', fb:'🦅' },

  { id:10, brand:'Puma',        name:'Deviate Nitro Elite 4',
    badge:null, badgeType:null,
    use:'Dramatically lighter than Elite 3 (169g). Stable, fast, forgiving. Excellent all-rounder.',
    price:230, wasPrice:null, weight:'169g', drop:'8mm', stack:'38mm', plate:'Carbon',
    score:8.9, scoreColor:'#c8960a', distances:['5K','10K','Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','10k','carbon'],
    img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_450/global/378761/01/sv01/fnd/PNA/fmt/png', fb:'🐆' },

  { id:11, brand:'Hoka',        name:'Rocket X3',
    badge:null, badgeType:null,
    use:'Hoka's most stable carbon racer. Wide base, controlled ride. Great for longer distances.',
    price:250, wasPrice:null, weight:'208g', drop:'7mm', stack:'39mm', plate:'Carbon',
    score:8.7, scoreColor:'#c8960a', distances:['Half','Marathon'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['marathon','half','carbon'],
    img:'https://images.hoka.com/is/image/hoka/1127896-BWHT_1?$pdp-gallery-2x$', fb:'🚁' },

  { id:12, brand:'Saucony',     name:'Endorphin Speed 4',
    badge:'Best Value', badgeType:'red',
    use:'Nylon plate, not carbon — but delivers most of the super shoe feel at 35% less cost.',
    price:170, wasPrice:185, weight:'213g', drop:'8mm', stack:'37mm', plate:'Nylon',
    score:8.5, scoreColor:'#c8960a', distances:['5K','10K','Half'], trail:false,
    affiliateUrl:'https://amzn.to/YOUR-LINK', cats:['half','10k','budget'],
    img:'https://images.saucony.com/is/image/Saucony/S20921-100_1?$pdpFlexLarge$&wid=580&hei=420', fb:'💛' }
]
];

const keywords = [
  { kw:'best carbon plate running shoes 2026', vol:'22,000', kd:42, intent:'Buy', page:'Homepage / Pillar Post', pri:'HIGH' },
  { kw:'vaporfly vs alphafly', vol:'8,100', kd:28, intent:'Research', page:'/vaporfly-vs-alphafly', pri:'HIGH' },
  { kw:'nike vaporfly 3 review', vol:'6,600', kd:35, intent:'Research/Buy', page:'/nike-vaporfly-3-review', pri:'HIGH' },
  { kw:'best marathon running shoes', vol:'14,800', kd:55, intent:'Buy', page:'/best-marathon-shoes', pri:'MED' },
  { kw:'adidas adizero adios pro 3 review', vol:'4,400', kd:22, intent:'Research/Buy', page:'/adizero-adios-pro-3-review', pri:'HIGH' },
  { kw:'carbon plate shoe vs regular', vol:'3,600', kd:18, intent:'Info', page:'/carbon-plate-explained', pri:'HIGH' },
  { kw:'best racing shoes half marathon', vol:'5,400', kd:31, intent:'Buy', page:'/best-half-marathon-shoes', pri:'HIGH' },
  { kw:'lightest running shoes 2026', vol:'4,200', kd:29, intent:'Buy', page:'Comparison Tool', pri:'MED' },
  { kw:'garmin forerunner 965 review', vol:'9,900', kd:38, intent:'Research/Buy', page:'/garmin-forerunner-965-review', pri:'HIGH' },
  { kw:'best gps watch for marathon runners', vol:'3,300', kd:24, intent:'Buy', page:'/best-gps-watches-runners', pri:'HIGH' },
];
