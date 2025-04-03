// A collection of valid 9-letter words for our word game in English and Norwegian

export const validWords: string[] = [
  // English 9-letter words
  "bratwurst", // Our target word
  "advertise",
  "aftermath",
  "backstage",
  "beautiful",
  "challenge",
  "chocolate",
  "christmas",
  "community",
  "confident",
  "dangerous",
  "dedicated",
  "democracy",
  "disgusted",
  "duplicate",
  "education",
  "equipment",
  "excellent",
  "excursion",
  "expansion",
  "expensive",
  "fantastic",
  "furniture",
  "gathering",
  "generator",
  "gentleman",
  "guarantee",
  "highlight",
  "identical",
  "implement",
  "important",
  "influence",
  "institute",
  "insurance",
  "interview",
  "introduce",
  "invention",
  "knowledge",
  "landscape",
  "lightning",
  "magnitude",
  "megaphone",
  "memoranda",
  "modernize",
  "narrative",
  "necessary",
  "nutrition",
  "objective",
  "overboard",
  "paragraph",
  "permanent",
  "plaintiff",
  "pollution",
  "principle",
  "processor",
  "pronounce",
  "publicity",
  "recognize",
  "recommend",
  "reference",
  "regularly",
  "sanctuary",
  "sensitive",
  "sentiment",
  "signature",
  "stimulate",
  "stopwatch",
  "structure",
  "technique",
  "telephone",
  "temporary",
  "transport",
  "universal",
  "unlimited",
  "variation",
  "wonderful",
  "yesterday",
  
  // Norwegian 9-letter words
  "anerkjent", // recognized
  "antagelse", // assumption
  "arbeider",  // worker
  "avbildet",  // depicted
  "begrenset", // limited
  "bestemmer", // decides
  "bevegelse", // movement
  "blomstre",  // blossom
  "definerer", // defines
  "detaljert", // detailed
  "diktatur",  // dictatorship
  "eksempel",  // example
  "eksistere", // exist
  "enestående", // unique
  "enklere",   // simpler
  "etterlate", // leave behind
  "fascinere", // fascinate
  "forskning", // research
  "forteller", // narrator
  "forvente",  // expect
  "fremtiden", // the future
  "fullstendig", // complete
  "fungerer",  // functions
  "garantere", // guarantee
  "generelt",  // generally
  "handling",  // action
  "historisk", // historical
  "hjemmeside", // homepage
  "hverdagen", // everyday life
  "idrettslag", // sports team
  "innebærer", // involves
  "interesse", // interest
  "kjærlighet", // love
  "kontroller", // controller
  "korrupsjon", // corruption
  "kunstnerisk", // artistic
  "kvaliteter", // qualities
  "landskap",  // landscape
  "langsomt",  // slowly
  "leilighet", // apartment
  "mennesker", // people
  "muligheter", // opportunities
  "nasjonalt", // nationally
  "nødvendig", // necessary
  "omgivelser", // surroundings
  "oppfordre", // encourage
  "oppmerksom", // attentive
  "overflate", // surface
  "personlig", // personal
  "politikere", // politicians
  "prinsippet", // the principle
  "prosessor", // processor
  "påvirkning", // influence
  "reflektere", // reflect
  "respektere", // respect
  "rettferdig", // fair
  "samfunnet", // society
  "sikkerhet", // security
  "situasjon", // situation
  "skikkelig", // properly
  "spennende", // exciting
  "strategisk", // strategic
  "strukturer", // structures
  "tilgjengelig", // available
  "tilstand",  // condition
  "universitet", // university
  "utdanning", // education
  "utvikling", // development
  "variasjon", // variation
  "velfungerende", // well-functioning
  "vitenskaper", // sciences
  "økonomisk", // economic
  "øyeblikk",  // moment
];

// Function to check if a word is valid
export const isValidWord = (word: string): boolean => {
  return validWords.includes(word.toLowerCase());
};