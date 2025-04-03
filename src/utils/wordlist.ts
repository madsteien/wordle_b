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
  "etterlate", // leave behind
  "fascinere", // fascinate
  "forskning", // research
  "forteller", // narrator
  "forvente",  // expect
  "fremtiden", // the future
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
  "kunstnere", // artists
  "kvaliteter", // qualities
  "landskap",  // landscape
  "langsomt",  // slowly
  "leilighet", // apartment
  "mennesker", // people
  "muligheter", // opportunities
  "nasjonalt", // nationally
  "nødvendig", // necessary
  "omgivelse", // surroundings
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
  "tilfeldig", // random
  "tilstand",  // condition
  "universitet", // university
  "utdanning", // education
  "utvikling", // development
  "variasjon", // variation
  "velferden", // welfare
  "vitenskap", // science
  "økonomisk", // economic
  "øyeblikk",  // moment
  "aktivitet", // activity
  "ambassade", // embassy
  "ansvarlig", // responsible
  "appellere", // to appeal
  "atmosfære", // atmosphere
  "behandling", // treatment
  "betydelig", // significant
  "bibliotek", // library
  "bursdagen", // the birthday
  "byråkrati", // bureaucracy
  "deltakere", // participants
  "demokrati", // democracy
  "dirigente", // conductor
  "diskusjon", // discussion
  "dokument", // document
  "effektiv", // effective
  "eksklusiv", // exclusive
  "elektrisk", // electrical
  "eliminere", // eliminate
  "engasjert", // engaged
  "erkjenne", // acknowledge
  "etablerte", // established
  "fantastisk", // fantastic
  "favoritt", // favorite
  "fenomene", // phenomena
  "ferdigmat", // ready meal
  "festivalen", // the festival
  "fjellside", // mountainside
  "flyktning", // refugee
  "forbruker", // consumer
  "foredrag", // lecture
  "forfatter", // author
  "forkjølet", // having a cold
  "formiddag", // morning
  "fortrolig", // confidential
  "forutsatt", // provided
  "fotografer", // photographers
  "frekvens", // frequency
  "frivillig", // voluntary
  "fruktkake", // fruit cake
  "fuglesang", // birdsong
  "fysiologi", // physiology
  "gebursdag", // birthday
  "gjennomsøk", // search through
  "gratulere", // congratulate
  "grunnskole", // primary school
  "gjestehus", // guest house
  "handelsfag", // commerce studies
  "havresekk", // oat bag
  "helgefest", // weekend party
  "helsevern", // health care
  "hjemmelag", // home team
  "hovedstad", // capital city
  "hurtigbåt", // express boat
  "høytaler", // loudspeaker
  "identitet", // identity
  "illustrere", // illustrate
  "innbygger", // resident
  "innføring", // introduction
  "innspilt", // recorded
  "inspirere", // inspire
  "integrert", // integrated
  "invitasjon", // invitation
  "journaler", // journals
  "jubileum", // anniversary
  "juleaften", // christmas eve
  "kakepynt", // cake decoration
  "kalkulator", // calculator
  "kamerater", // comrades
  "kampanje", // campaign
  "kandidat", // candidate
  "kapasitet", // capacity
  "karakterer", // grades
  "kattunge", // kitten
  "kjevebein", // jawbone
  "klassiker", // classic
  "kollegaer", // colleagues
  "kommune", // municipality
  "kompetent", // competent
  "konferanse", // conference
  "konflikt", // conflict
  "konkurrer", // compete
  "konstant", // constant
  "kontinent", // continent
  "kulturhus", // cultural center
  "kunstner", // artist
  "kystvakt", // coast guard
  "lederskap", // leadership
  "landskamp", // international match
  "legitimere", // legitimize
  "lettelser", // reliefs
  "leveranse", // delivery
  "livsstil", // lifestyle
  "lykkelig", // happy
  "lærerikt", // educational
  "lørdagen", // the saturday
  "magistrat", // magistrate
  "maktkamp", // power struggle
  "mandager", // mondays
  "markering", // marking
  "maritime", // maritime
  "maskinen", // the machine
  "materiell", // material
  "medisiner", // medicines
  "mellomrom", // space
  "mengdeord", // quantifier
  "merkelig", // strange
  "militære", // military
  "minoritet", // minority
  "monografi", // monograph
  "mottaker", // recipient
  "musikalsk", // musical
  "myndighe", // authority
  "målrettet", // targeted
  "nattklubb", // nightclub
  "nedlegges", // to close down
  "nesehorn", // rhinoceros
  "nominert", // nominated
  "nyhetsavis", // newspaper
  "nåværende", // current
  "offentlig", // public
  "omsetning", // turnover
  "ordningen", // the arrangement
  "orientere", // orient
  "overgang", // transition
  "pappesker", // cardboard boxes
  "parlament", // parliament
  "pasient",  // patient
  "pengeskap", // safe
  "permanent", // permanent
  "plattform", // platform
  "politikk", // politics
  "president", // president
  "prioriter", // prioritize
  "profilbild", // profile picture
  "prosjekt", // project
  "protokoll", // protocol
  "prøvetid", // probation
  "påskeegg", // easter egg
  "rasistisk", // racist
  "redigere", // edit
  "referent", // secretary
  "registrer", // register
  "relativt", // relatively
  "resultat", // result
  "rettighet", // right
  "risikere", // risk
  "rådhuset", // the town hall
  "salatbar", // salad bar
  "samarbeid", // cooperation
  "sannsynlig", // likely
  "semester", // semester
  "servitør", // waiter
  "sjokolade", // chocolate
  "skattelov", // tax law
  "skjermbild", // screenshot
  "skolebenk", // school desk
  "skriftlig", // written
  "skyskraper", // skyscraper
  "slagmark", // battlefield
  "snakkende", // talking
  "solnedgang", // sunset
  "sommerfugl", // butterfly
  "spesialist", // specialist
  "språkkurs", // language course
  "stabiliser", // stabilize
  "standard", // standard
  "statistikk", // statistics
  "stavkirke", // stave church
  "stemmerett", // voting right
  "studielån", // student loan
  "støttelag", // support team
  "svimmelhet", // dizziness
  "symbolsk", // symbolic
  "synspunkt", // viewpoint
  "søvnløshet", // insomnia
  "takknemlig", // grateful
  "telefonen", // the telephone
  "temperatur", // temperature
  "testamente", // testament
  "tidsskrift", // journal
  "tilbehør", // accessories
  "tilfeldig", // random
  "tiltrekke", // attract
  "tjenester", // services
  "tolkning", // interpretation
  "tradisjon", // tradition
  "triumfere", // triumph
  "troverdig", // credible
  "tryllekunst", // magic art
  "trykkeri", // printing works
  "turområde", // hiking area
  "tømmerflåte", // timber raft
  "ulykkelig", // unhappy
  "umulighet", // impossibility
  "underviser", // teacher
  "urettmessig", // unjustified
  "uromoment", // disruptive element
  "utbytte",  // dividend
  "utfordring", // challenge
  "utkjøring", // delivery
  "utsettelse", // postponement
  "utveksling", // exchange
  "valgfritt", // optional
  "vaktmester", // caretaker
  "vannkraft", // hydropower
  "varemerke", // trademark
  "vedlikehold", // maintenance
  "veiledning", // guidance
  "verdifull", // valuable
  "verneutstyr", // protective equipment
  "vibrerende", // vibrating
  "vikariat", // substitute position
  "viljesterk", // strong-willed
  "virkemidler", // means
  "vitenskaper", // sciences
  "voldelige", // violent
  "våpenbruk", // use of weapons
  "ytringsfri", // free speech
  "zoologisk", // zoological
  "ærbødig",  // respectful
  "økosystem", // ecosystem
  "ørkensand", // desert sand
  "østkanten", // east side
  "åndedrett", // breathing
  "åpenbart", // obvious
  "årsakslov", // causation law
  "weissbier",
  "erdringer",
  "bokstaver",
  "amsterdam",
];

// Function to check if a word is valid
export const isValidWord = (word: string): boolean => {
  return validWords.includes(word.toLowerCase());
};