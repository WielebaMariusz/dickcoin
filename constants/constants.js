
const API_KEY = 'd54bcb243305d56aefcb5683e7c444b8'
const CURRENCYS = [
  "1337",
  "18C",
  "1MT",
  "1SG",
  "1ST",
  "1WO",
  "1X2",
  "2248",
  "2X2",
  "3DC",
  "404",
  "42",
  "4XB",
  "777",
  "7E",
  "808TA",
  "999",
  "A",
  "A1",
  "AAA",
  "AAACOIN",
  "AAC",
  "AAT",
  "ABB",
  "ABBC",
  "ABL",
  "ABS",
  "ABST",
  "ABT",
  "ABTC",
  "ABYSS",
  "AC3",
  "ACA",
  "ACAT",
  "ACD",
  "ACDC",
  "ACM",
  "ACN",
  "ACT",
  "ACTN",
  "ACTP",
  "AD",
  "ADA",
  "ADAB",
  "ADABEAR",
  "ADABULL",
  "ADB",
  "ADDR",
  "ADE",
  "ADI",
  "ADK",
  "ADL",
  "ADMN",
  "ADN",
  "ADRX",
  "ADS",
  "ADVC",
  "ADX",
  "AE",
  "AEM",
  "AEN",
  "AEON",
  "AER",
  "AERGO",
  "AFC",
  "AFIN",
  "AFRI",
  "AFRO",
  "AFROX",
  "AGET",
  "AGI",
  "AGLT",
  "AGRINOVUS",
  "AGU",
  "AGVC",
  "AIAS",
  "AID",
  "AIDOC",
  "AIE",
  "AION",
  "AK12",
  "AKRO",
  "ALA",
  "ALADDIN",
  "ALGO",
  "ALGOBEAR",
  "ALGOBULL",
  "ALLBI",
  "ALLBIH",
  "ALLUVA",
  "ALTBEAR",
  "ALTBULL",
  "ALTM",
  "ALTOM",
  "AMB",
  "AMM",
  "AMMBR",
  "AMO",
  "AMON",
  "ANCT",
  "ANDES",
  "ANI",
  "ANJ",
  "ANK",
  "ANKR",
  "ANON",
  "ANT",
  "ANTR",
  "ANTY",
  "AOG",
  "APL",
  "APM",
  "APPC",
  "APR",
  "AQX",
  "ARBITOOL",
  "ARCEE",
  "ARCONA",
  "ARCT",
  "ARCTIC",
  "ARDR",
  "ARDX",
  "AREPA",
  "ARG",
  "ARI",
  "ARION",
  "ARK",
  "ARM",
  "ARMR",
  "ARMS",
  "ARN",
  "ARO",
  "ARPA",
  "ARQ",
  "ARRR",
  "ART",
  "ARTE",
  "ARX",
  "ASA",
  "ASAFE2",
  "ASIMI",
  "AST",
  "ATHEIOS",
  "ATL",
  "ATLS",
  "ATMCASH",
  "ATN",
  "ATO",
  "ATOM",
  "ATOMBEAR",
  "ATOMBULL",
  "ATP",
  "ATX",
  "AUC",
  "AUDAX",
  "AUNIT",
  "AUSC",
  "AUTO",
  "AUX",
  "AVA",
  "AVINOC",
  "AVT",
  "AXE",
  "AXEL",
  "AXL",
  "AXPR",
  "AYA",
  "AZ",
  "B1P",
  "B2B",
  "B2BCOIN",
  "B2C",
  "BAAS",
  "BAD",
  "BAK",
  "BALKAN",
  "BAN",
  "BANCA",
  "BAND",
  "BANKCOINCASH",
  "BARE",
  "BARIN",
  "BAT",
  "BAX",
  "BB",
  "BBP",
  "BBR",
  "BBS",
  "BBT",
  "BBTC",
  "BC",
  "BCASH",
  "BCCX",
  "BCD",
  "BCDT",
  "BCEO",
  "BCF",
  "BCG",
  "BCH",
  "BCHBEAR",
  "BCHBULL",
  "BCHIP",
  "BCI",
  "BCL",
  "BCN",
  "BCNA",
  "BCP",
  "BCPT",
  "BCPX",
  "BCV",
  "BCX",
  "BCZ",
  "BDG",
  "BDP",
  "BDX",
  "BEAM",
  "BEARSHIT",
  "BECN",
  "BEENG",
  "BEER",
  "BEET",
  "BELA",
  "BELL",
  "BEN",
  "BENZ",
  "BENZI",
  "BEPRO",
  "BERN",
  "BERRY",
  "BET",
  "BETDICE",
  "BETN",
  "BETR",
  "BETXC",
  "BF",
  "BFT",
  "BGC",
  "BGF",
  "BGG",
  "BGT",
  "BHIG",
  "BHP",
  "BHT",
  "BIA",
  "BIFI",
  "BIH",
  "BIN",
  "BIO",
  "BION",
  "BIR",
  "BIRD",
  "BIS",
  "BIT",
  "BITB",
  "BITBAR",
  "BITBULL",
  "BITC",
  "BITCOEN",
  "BITCOINUS",
  "BITCURRENCY",
  "BITE",
  "BITG",
  "BITHEREUM",
  "BITHOLD",
  "BITRUE",
  "BITTO",
  "BITTORRENT",
  "BITUSD",
  "BITZ",
  "BIX",
  "BIXCPRO",
  "BIZZ",
  "BKBT",
  "BKG",
  "BKK",
  "BKX",
  "BLACK",
  "BLAST",
  "BLC",
  "BLK",
  "BLNC",
  "BLOCK",
  "BLOCKBURN",
  "BLOCKCHAINCOM",
  "BLOCKSTACK",
  "BLOCKSTAMP",
  "BLOCMONEY",
  "BLOOD",
  "BLRY",
  "BLT",
  "BLTV",
  "BLUR",
  "BLZ",
  "BM",
  "BMAX",
  "BMC",
  "BMX",
  "BNANA",
  "BNB",
  "BNBBEAR",
  "BNBBULL",
  "BNK",
  "BNODE",
  "BNT",
  "BNTY",
  "BNY",
  "BOA",
  "BOLDMANCAPITAL",
  "BOLENUM",
  "BOLI",
  "BOLT",
  "BOMB",
  "BON",
  "BONO",
  "BOO",
  "BOOMTOKEN",
  "BOS",
  "BOST",
  "BOTX",
  "BOUTS",
  "BOX",
  "BPAKC",
  "BPC",
  "BPER",
  "BPK",
  "BPLC",
  "BPN",
  "BPX",
  "BQT",
  "BQTX",
  "BRAZ",
  "BRD",
  "BRIK",
  "BRO",
  "BRT",
  "BRX",
  "BRYLLITE",
  "BRZX",
  "BSC",
  "BSG",
  "BSH",
  "BSN",
  "BST",
  "BSTN",
  "BSTX",
  "BSV",
  "BSVBEAR",
  "BSVBULL",
  "BSVG",
  "BTA",
  "BTAD",
  "BTBL",
  "BTC",
  "BTC2",
  "BTCB2",
  "BTCBEAR",
  "BTCBULL",
  "BTCF",
  "BTCHEDGE",
  "BTCL",
  "BTCM",
  "BTCN",
  "BTCONE",
  "BTCR",
  "BTCSILVER",
  "BTCT",
  "BTCUI",
  "BTCV",
  "BTCZ",
  "BTD",
  "BTDX",
  "BTG",
  "BTK",
  "BTKN",
  "BTM",
  "BTMX",
  "BTMXBEAR",
  "BTMXBULL",
  "BTNT",
  "BTR",
  "BTRD",
  "BTRL",
  "BTS",
  "BTSA",
  "BTSC",
  "BTSCOIN",
  "BTSE",
  "BTT",
  "BTTR",
  "BTU",
  "BTW",
  "BTX",
  "BU",
  "BUC",
  "BUCK",
  "BUL",
  "BULL",
  "BULLSHIT",
  "BUNNY",
  "BURST",
  "BUSD",
  "BUT",
  "BUX",
  "BUZZ",
  "BVK",
  "BVT",
  "BXC",
  "BXK",
  "BXZ",
  "BYRON",
  "BYTS",
  "BZ",
  "BZE",
  "BZNT",
  "BZO",
  "BZT",
  "BZX",
  "C20",
  "C2XT",
  "C3W",
  "C4C",
  "CADN",
  "CAG",
  "CAJ",
  "CAN",
  "CAPP",
  "CARD",
  "CASH2",
  "CASHBERY",
  "CAT2",
  "CATCOIN",
  "CATT",
  "CB",
  "CBC",
  "CBEX",
  "CBIX7",
  "CBOX",
  "CBR",
  "CBT",
  "CBX",
  "CCC2",
  "CCCM",
  "CCM",
  "CCN",
  "CCO",
  "CCRB",
  "CCTC",
  "CDL",
  "CDT",
  "CDZC",
  "CEC",
  "CEEK",
  "CEL",
  "CELR",
  "CENNZ",
  "CENT",
  "CENTAURI",
  "CETH",
  "CFC",
  "CFL",
  "CGEN",
  "CHA",
  "CHAI",
  "CHAN",
  "CHAT",
  "CHEESE",
  "CHG",
  "CHI",
  "CHND",
  "CHP",
  "CHR",
  "CHRT",
  "CHSB",
  "CHTC",
  "CHZ",
  "CICC",
  "CIV",
  "CJT",
  "CKUSD",
  "CLB",
  "CLC",
  "CLG",
  "CLO",
  "CLOAK",
  "CLPC",
  "CLT",
  "CMCN",
  "CMCT",
  "CMIT",
  "CMM",
  "CMT",
  "CMTR",
  "CNB",
  "CNC",
  "CNCT",
  "CND",
  "CNN",
  "CNNS",
  "CNP",
  "CNRG",
  "CNUS",
  "CNYX",
  "COB",
  "COCOS",
  "COF",
  "COFI",
  "COINCLAIM",
  "COLX",
  "COMMODITYADNETWORK",
  "COMMUNITY",
  "CON",
  "CORN",
  "CORONA",
  "COS",
  "COSM",
  "COSPLAY",
  "COT",
  "COTI",
  "COV",
  "COVA",
  "COVC",
  "COVID",
  "COW",
  "CP",
  "CP2",
  "CPAY",
  "CPC",
  "CPP",
  "CPT",
  "CPU",
  "CPX",
  "CRAD",
  "CRCL",
  "CRCT",
  "CRE",
  "CREA",
  "CREBIT",
  "CREX",
  "CRM",
  "CRN",
  "CRO",
  "CROAT",
  "CRON",
  "CRP",
  "CRPT",
  "CRTS",
  "CRU",
  "CRUZ",
  "CRW",
  "CRYP",
  "CRYPT",
  "CRYPTO",
  "CRYPTOBOSSCOIN",
  "CRYPTONODES",
  "CS",
  "CSC",
  "CSCJ",
  "CSE",
  "CSM",
  "CSNP",
  "CSOUL",
  "CSP",
  "CSTL",
  "CTAG",
  "CTXC",
  "CUR",
  "CURE",
  "CUTE",
  "CV",
  "CVA",
  "CVC",
  "CVCC",
  "CVCOIN",
  "CVD",
  "CVNT",
  "CVT",
  "CWN",
  "CWV",
  "CXO",
  "CYB",
  "CYBER",
  "CYBEREITS",
  "CYFM",
  "CYG",
  "CYL",
  "CZR",
  "DAC",
  "DACC",
  "DADI",
  "DAG",
  "DAGT",
  "DAI",
  "DANG",
  "DAPPT",
  "DAPS",
  "DASH",
  "DASHD",
  "DASHG",
  "DAT",
  "DATA",
  "DATX",
  "DAV",
  "DAVP",
  "DAX",
  "DBC",
  "DBIX",
  "DBT",
  "DC",
  "DCH",
  "DCN",
  "DCR",
  "DCS",
  "DCT",
  "DCW",
  "DCY",
  "DDAM",
  "DDD",
  "DDK",
  "DDN",
  "DDR",
  "DEAL",
  "DEALT",
  "DEC",
  "DEEP",
  "DEEX",
  "DEL",
  "DEMA",
  "DENT",
  "DEQ",
  "DERO",
  "DEV",
  "DEX",
  "DFN",
  "DFS",
  "DFT",
  "DGB",
  "DGC",
  "DGD",
  "DGTX",
  "DGX",
  "DICE",
  "DIM",
  "DIN",
  "DIVI",
  "DKYC",
  "DLN",
  "DLT",
  "DLTT",
  "DLX",
  "DMB",
  "DMC",
  "DMME",
  "DMT",
  "DNA2",
  "DNR",
  "DNT",
  "DOCK",
  "DOCT",
  "DOGE",
  "DOGEBEAR",
  "DOGEBULL",
  "DOLLAR",
  "DOPE",
  "DOSNETWORK",
  "DOT",
  "DOTIOU",
  "DOVU",
  "DOW",
  "DPH",
  "DPT",
  "DRA",
  "DREAM",
  "DREAMSCAPE",
  "DREP",
  "DRG",
  "DRGN",
  "DRGNBEAR",
  "DRGNBULL",
  "DRM",
  "DRT",
  "DRVF",
  "DSC",
  "DSLA",
  "DSR",
  "DST",
  "DT",
  "DTA",
  "DTEM",
  "DTR",
  "DTX",
  "DUDGX",
  "DUO",
  "DUSK",
  "DVP",
  "DVT",
  "DWS",
  "DX",
  "DXO",
  "DXR",
  "DXT",
  "DYNMT",
  "EAC",
  "EAI",
  "EAPC",
  "EASYMINE",
  "EBASE",
  "EBC",
  "EBK",
  "ECA",
  "ECASH",
  "ECHT",
  "ECIT",
  "ECO",
  "ECOM",
  "ECOREAL",
  "ECP",
  "ECR",
  "ECTE",
  "ECU",
  "EDC",
  "EDG",
  "EDGE",
  "EDN",
  "EDO",
  "EDR",
  "EDU",
  "EER",
  "EGCC",
  "EGEM",
  "EGOLD",
  "EGR",
  "EGT",
  "EGWCAP",
  "EJOB",
  "EKO",
  "EKT",
  "ELA",
  "ELAC",
  "ELD",
  "ELEC",
  "ELEVATO",
  "ELF",
  "ELICOIN",
  "ELITE",
  "ELPH",
  "ELT",
  "ELTCOIN",
  "ELY",
  "EMANATE",
  "EMC",
  "EMC2",
  "EMD",
  "EMRALS",
  "EMRX",
  "EMS",
  "ENCRYPTOTELETH2",
  "ENDORSIT",
  "ENG",
  "ENJ",
  "ENQ",
  "ENT",
  "ENTS",
  "ENY",
  "EOS",
  "EOSBEAR",
  "EOSBULL",
  "EOSDAC",
  "EOSDT",
  "EPAY",
  "EPH",
  "EPIC",
  "EPWR",
  "EQUAD",
  "ERC20",
  "ERC223",
  "ERD",
  "ERISTICA",
  "ERK",
  "ERT",
  "ESBC",
  "ESCB",
  "ESCX",
  "ESH",
  "ESK",
  "ESN",
  "ESP",
  "ESR",
  "ESS",
  "ETA",
  "ETC",
  "ETCBEAR",
  "ETCBULL",
  "ETCR",
  "ETGP",
  "ETH",
  "ETHBEAR",
  "ETHBNT",
  "ETHBULL",
  "ETHO",
  "ETHOS",
  "ETHPLO",
  "ETI",
  "ETK",
  "ETL",
  "ETM",
  "ETN",
  "ETOR",
  "ETP",
  "ETT",
  "ETTOKEN",
  "ETX",
  "ETZ",
  "EUBC",
  "EUM",
  "EUNO",
  "EURS",
  "EURX",
  "EVC",
  "EVE",
  "EVED",
  "EVENCOIN",
  "EVI",
  "EVN",
  "EVOS",
  "EVR",
  "EVX",
  "EVY",
  "EVZ",
  "EWT",
  "EXCC",
  "EXCHBEAR",
  "EXCHBULL",
  "EXCL",
  "EXE",
  "EXMOCOIN",
  "EXO",
  "EXOR",
  "EXP",
  "EXPO",
  "EXRN",
  "EXRT",
  "EXY",
  "EZY",
  "F1C",
  "FAB",
  "FACE",
  "FAIRGAME",
  "FAITH",
  "FAT",
  "FAW",
  "FBN",
  "FCH",
  "FCL",
  "FCQ",
  "FCT",
  "FDN",
  "FDR",
  "FDS",
  "FDT",
  "FDZ",
  "FED",
  "FEEX",
  "FEMI",
  "FET",
  "FF1",
  "FGP",
  "FIDEXEXCHANGE",
  "FIH",
  "FINS",
  "FIRE",
  "FIXNETWORK",
  "FJC",
  "FK",
  "FLASH",
  "FLC",
  "FLETA",
  "FLEX",
  "FLITS",
  "FLO",
  "FLOT",
  "FLP",
  "FLS",
  "FNB",
  "FNTB",
  "FOAM",
  "FOFB",
  "FOIN",
  "FOOD",
  "FOPAY",
  "FORCEPROTOCOL",
  "FORESTPLUS",
  "FOREX",
  "FORTKNOXTER",
  "FOTA",
  "FOXT",
  "FPT",
  "FREE",
  "FRM",
  "FSCC",
  "FSHN",
  "FSN",
  "FST",
  "FT1",
  "FTB",
  "FTC",
  "FTI",
  "FTM",
  "FTN",
  "FTX",
  "FTXBERNIE",
  "FTXBIDEN",
  "FTXPETE",
  "FTXTOKEN",
  "FTXTRUMP",
  "FUEL",
  "FUN",
  "FUND",
  "FUNTIMECOIN",
  "FUZE",
  "FXC",
  "FXN",
  "FXP",
  "FXT",
  "FXTC",
  "FYP",
  "FZ",
  "FZZ",
  "GALI",
  "GAME",
  "GAMESTARS",
  "GANA",
  "GARD",
  "GARK",
  "GAS",
  "GASTROADVISOR",
  "GAT",
  "GB",
  "GBC",
  "GBT",
  "GBX",
  "GBYTE",
  "GCG",
  "GCH",
  "GCN",
  "GCR",
  "GCZ",
  "GDAC",
  "GDR",
  "GEM",
  "GEN",
  "GENT",
  "GEO",
  "GET",
  "GFNCASH",
  "GFUN",
  "GGC",
  "GHOST",
  "GHT",
  "GIC",
  "GIN",
  "GIO",
  "GJCO",
  "GLEEC",
  "GLEX",
  "GLOB",
  "GLT",
  "GMAC",
  "GMAT",
  "GMB",
  "GMCI",
  "GMR",
  "GNO",
  "GNT",
  "GNX",
  "GNY",
  "GO",
  "GOAT",
  "GOB",
  "GOLD",
  "GOLDL",
  "GOM2",
  "GOMICS",
  "GON",
  "GOOC",
  "GOS",
  "GOSS",
  "GOT",
  "GOXT",
  "GPKR",
  "GPS",
  "GPT",
  "GR1",
  "GRFT",
  "GRG",
  "GRID",
  "GRIN",
  "GRN",
  "GRS",
  "GRT",
  "GRVC",
  "GRX",
  "GSC",
  "GSR",
  "GSX",
  "GT",
  "GTC",
  "GTM",
  "GTN",
  "GTO",
  "GTX",
  "GUNTHY",
  "GUP",
  "GUSD",
  "GUSS",
  "GUTS",
  "GVC",
  "GVE",
  "GVT",
  "GXC",
  "GXE",
  "GXT",
  "GXX",
  "GZE",
  "GZRO",
  "HAND",
  "HAPPY",
  "HARMONY",
  "HARON",
  "HASH2",
  "HBAR",
  "HBRS",
  "HBT",
  "HBZ",
  "HC",
  "HDAC",
  "HDD",
  "HDS",
  "HEALTHRETAIL",
  "HELI",
  "HELP",
  "HELPICO",
  "HER",
  "HERB",
  "HERBCOIN",
  "HERC",
  "HETH",
  "HG",
  "HGT",
  "HIT",
  "HIVE",
  "HLIX",
  "HLS",
  "HLT",
  "HMQ",
  "HNDC",
  "HNI",
  "HNS",
  "HNST",
  "HNT",
  "HODL",
  "HOLD",
  "HOR",
  "HOSP",
  "HOT",
  "HPB",
  "HPOT",
  "HPT",
  "HQT",
  "HQX",
  "HRD",
  "HT",
  "HTB",
  "HTBEAR",
  "HTBULL",
  "HTL",
  "HTML",
  "HUBBS",
  "HUE",
  "HUM",
  "HUNT",
  "HUSD",
  "HUSH",
  "HUSL",
  "HVN",
  "HWC",
  "HWI",
  "HYC",
  "HYDRO",
  "HYN",
  "HYPRO",
  "HYPX",
  "HYT",
  "IBTC",
  "IC",
  "ICE",
  "ICOL",
  "ICOM",
  "ICOO",
  "ICR",
  "ICX",
  "IDAI",
  "IDH",
  "IDHUB",
  "IDRT",
  "IDT",
  "IDXM",
  "IEOS",
  "IETH",
  "IFC",
  "IFV",
  "IFX24",
  "IGF",
  "IGG",
  "IGNIS",
  "IHF",
  "IHT",
  "IIC",
  "ILC",
  "ILK",
  "IMBTC",
  "IMG",
  "IMGC",
  "IMP2",
  "IMPCN",
  "IMPL",
  "IMT",
  "INB",
  "INBOX",
  "IND",
  "INF",
  "INFS",
  "INFT",
  "INK",
  "INN",
  "INNBC",
  "INNBCL",
  "INS",
  "INSN",
  "INSTAR",
  "INT",
  "INTU",
  "INVE",
  "INXT",
  "IOC",
  "ION",
  "IONC",
  "IOST",
  "IOT",
  "IOTW",
  "IOTX",
  "IOUX",
  "IOWN",
  "IPL",
  "IPS",
  "IPT",
  "IPUX",
  "IPX",
  "IQ",
  "IQCASH",
  "IQF",
  "IRD",
  "IRIS",
  "IST",
  "ITC",
  "ITI",
  "ITN",
  "ITT",
  "IVY",
  "IWAY",
  "IX",
  "IXI",
  "IXT",
  "JAC",
  "JACK",
  "JAN",
  "JAR",
  "JCT",
  "JDC",
  "JET",
  "JEWS",
  "JIC",
  "JMC",
  "JNB",
  "JNT",
  "JOB",
  "JOB2",
  "JOINT",
  "JOOS",
  "JOY",
  "JOYS",
  "JRT",
  "JS",
  "JUL",
  "JUMP",
  "JUP",
  "JURM",
  "JWL",
  "KAASO",
  "KALI",
  "KAN",
  "KAT",
  "KAVA",
  "KBC",
  "KBOT",
  "KC",
  "KCASH",
  "KCS",
  "KEC",
  "KED",
  "KEMA",
  "KEY",
  "KEY2",
  "KICK",
  "KIN",
  "KISC",
  "KK",
  "KLKS",
  "KLN",
  "KMD",
  "KNC",
  "KNDC",
  "KNL",
  "KNOW",
  "KNT",
  "KOD",
  "KOLIN",
  "KORIS",
  "KOTO",
  "KRB",
  "KREDS",
  "KRL",
  "KRT",
  "KSC",
  "KSH",
  "KT",
  "KTETH",
  "KTS",
  "KTY",
  "KUBO",
  "KVI",
  "KWH",
  "KZC",
  "LA",
  "LABX",
  "LAMB",
  "LAMBO",
  "LATINO",
  "LAX",
  "LBA",
  "LBC",
  "LBR",
  "LBTC",
  "LC",
  "LC+",
  "LCC",
  "LCP",
  "LCS",
  "LCX",
  "LDCN",
  "LDOGE",
  "LEMO",
  "LEND",
  "LEOBULL",
  "LEOTOKEN",
  "LEPEN",
  "LET",
  "LEVL",
  "LEXIT",
  "LFEC",
  "LGO",
  "LHCOIN",
  "LHT",
  "LIB",
  "LICC",
  "LIF",
  "LIFE",
  "LIKE",
  "LILI",
  "LINA",
  "LINK",
  "LINKA",
  "LINKBEAR",
  "LINKBULL",
  "LIQ",
  "LIT",
  "LITB",
  "LITHIUM",
  "LIZA",
  "LKK",
  "LKN",
  "LKRC",
  "LKU",
  "LKY",
  "LMCH",
  "LN",
  "LNC",
  "LND",
  "LNKO",
  "LOBS",
  "LOC",
  "LOG",
  "LOKI",
  "LOL",
  "LOOM",
  "LOT",
  "LOTO",
  "LPS",
  "LPT",
  "LQD",
  "LRC",
  "LRM",
  "LSK",
  "LST7",
  "LTB",
  "LTC",
  "LTCBEAR",
  "LTCBULL",
  "LTFN",
  "LTG",
  "LTHN",
  "LTO",
  "LUCKY",
  "LUCKYBIT",
  "LUD",
  "LUN",
  "LUNA",
  "LUNES",
  "LUX",
  "2 LVL",
  "LVT",
  "LVTC",
  "LXT",
  "LYM",
  "LYRA",
  "LYTX",
  "MAG",
  "MAGICCUBE",
  "MAID",
  "MALW",
  "MAN",
  "MANA",
  "MANNA",
  "MAO",
  "MAPC",
  "MAPR",
  "MAR",
  "MARC",
  "MAS",
  "MASH",
  "MATIC",
  "MATICBEAR",
  "MATICBULL",
  "MATREXCOIN",
  "MAXCOIN",
  "MAXTOKEN",
  "MAYA",
  "MB",
  "MBGL",
  "MBIT",
  "MBL",
  "MBS",
  "MCASH",
  "MCM",
  "MCN",
  "MCO",
  "MCPC",
  "MCR",
  "MCT",
  "MDA",
  "MDS",
  "MDT",
  "MDTK",
  "ME",
  "MED",
  "MEDIBIT",
  "MEDIC",
  "MEDICALTOKENCURRENCY",
  "MEET",
  "MEME",
  "MEQ",
  "MER",
  "MERCA",
  "MERGE",
  "MERI",
  "MES",
  "MESG",
  "MET",
  "META",
  "METM",
  "METP",
  "MEX",
  "MEXC",
  "MFC",
  "MFT",
  "MGCTOKEN",
  "MGO",
  "MGX",
  "MHC",
  "MIB",
  "MIC3",
  "MICK",
  "MICRO",
  "MICROBTC",
  "MIDAS",
  "MIDBEAR",
  "MIDBULL",
  "MIG",
  "MIN",
  "MIR",
  "MITH",
  "MITX",
  "MIX",
  "MIXBLOCKCHAIN",
  "MKEY",
  "MKR",
  "MLC",
  "MLN",
  "MLR",
  "MMO",
  "MNC",
  "MND",
  "MNG",
  "MNM",
  "MNP",
  "MNR",
  "MNX",
  "MOBI",
  "MOC",
  "MODEX",
  "MODL",
  "MODX",
  "MOF",
  "MOG",
  "MOGX",
  "MOIN",
  "MOJO",
  "MON",
  "MONA",
  "MONETA",
  "MONEYCASHMINER",
  "MONK",
  "MOON",
  "MOR",
  "MORE",
  "MOTA",
  "MOX",
  "MOZOX",
  "MPAY",
  "MPG",
  "MPL",
  "MRC",
  "MRI",
  "MRK",
  "MRPH",
  "MSD",
  "MSR",
  "MT",
  "MTCN",
  "MTH",
  "2 MTL",
  "MTLMC3",
  "MTN",
  "MTNS",
  "MTT",
  "MTV",
  "MTX",
  "MUE",
  "MUSK",
  "MUXE",
  "MVC",
  "MVG",
  "MVL",
  "MVP",
  "MVT",
  "MWAT",
  "MWC",
  "MXC",
  "MXM",
  "MXT",
  "MYB",
  "MYO",
  "MYST",
  "MYTH",
  "MYTV",
  "MYU",
  "MZI",
  "N8V",
  "NABI",
  "NACA",
  "NAH",
  "NANJ",
  "NANO",
  "NAS",
  "NAT",
  "NAV",
  "NAVY",
  "NAX",
  "NBAI",
  "NBC",
  "NBR",
  "NCASH",
  "NCC",
  "NCT",
  "NDT",
  "NDX",
  "NEBL",
  "NEC",
  "NEET",
  "NEEX",
  "NEO",
  "NET2",
  "NEU",
  "NEW",
  "NEWOS",
  "NEX",
  "NEXO",
  "NEXXO",
  "NG",
  "NGC",
  "NGOT",
  "NIL",
  "NILU",
  "NIM",
  "NIOSHARES",
  "NIRX",
  "NIX",
  "NKC",
  "NKN",
  "NLC2",
  "NLG",
  "NLINK",
  "NMN",
  "NMR",
  "NNC",
  "NOA",
  "NOBS",
  "NODE",
  "NOIANETWORK",
  "NOIZ",
  "NOKU",
  "NOR",
  "NOS",
  "NOTE",
  "NOVA",
  "NOVACHAIN",
  "NPCOIN",
  "NPLC",
  "NPX",
  "NPXS",
  "NPXSXEM",
  "NRC",
  "NRG",
  "NRP",
  "NRVE",
  "NSD",
  "NSG",
  "NST",
  "NT",
  "NTBC",
  "NTK",
  "NTK2",
  "NTM",
  "NTR",
  "NTRN",
  "NUG",
  "NUKO",
  "NULS",
  "NVC",
  "NVT",
  "NWC",
  "NXCT",
  "NXS",
  "NXT",
  "NYC",
  "NYE",
  "NYEX",
  "NYX",
  "NYZO",
  "NZL",
  "NZO",
  "OAX",
  "OBITS",
  "OCC",
  "OCE",
  "OCEAN",
  "OCN",
  "OCUL",
  "ODE",
  "ODEX",
  "ODIN",
  "OES",
  "OGN",
  "OGO",
  "OGODS",
  "OK",
  "OKB",
  "OKBBEAR",
  "OKBBULL",
  "OKNC",
  "OKS",
  "OLT",
  "OMB",
  "OMEGA",
  "OMG",
  "ONE2",
  "ONLEXPA",
  "ONT",
  "ONTGAS",
  "ONYX",
  "OOT",
  "OPCX",
  "OPEN",
  "OPQ",
  "OPT",
  "OPTI",
  "ORBS",
  "ORC",
  "ORE",
  "ORM",
  "ORME",
  "ORS",
  "OS76",
  "OSC",
  "OSCH",
  "OST",
  "OTB",
  "OURO",
  "OVO",
  "OWC",
  "OWO",
  "OXT",
  "P2P",
  "P2PX",
  "P2T",
  "PAC",
  "PAI",
  "PAK",
  "PAL",
  "PAN",
  "PANDA",
  "PANTOS",
  "PAPER",
  "PAR",
  "PARALLELCOIN",
  "PART",
  "PARTNER",
  "PASC",
  "PASS",
  "PAT",
  "PAX",
  "PAXEX",
  "PAXG",
  "PAXGBEAR",
  "PAXGBULL",
  "PAY",
  "PBL",
  "PBTT",
  "PC",
  "PCI",
  "PCL",
  "PCT",
  "PCX",
  "PEC",
  "PEG2",
  "PELO",
  "PENC",
  "PENG",
  "PEPECASH",
  "PEPS",
  "PERL",
  "PESS",
  "PETH",
  "PGC",
  "PGN",
  "PHC",
  "PHL",
  "PHN",
  "PHON",
  "PHR",
  "PHX",
  "PI",
  "PIA",
  "PIASA",
  "PIB",
  "PINK",
  "PIPL",
  "PIPS",
  "PIRATE",
  "PIRL",
  "PIT",
  "PITCH",
  "PIVX",
  "PIXIECOIN",
  "PKG",
  "PKT",
  "PLA",
  "PLAIR",
  "PLANET",
  "PLAY",
  "PLBT",
  "PLF",
  "PLM",
  "PLR",
  "PLTC",
  "PLU",
  "PLUG",
  "PLURA",
  "PLUS1",
  "PMA",
  "PMC2",
  "PMEER",
  "PND",
  "PNK",
  "PNT",
  "PNX",
  "PNY",
  "POA",
  "POCC",
  "POE",
  "POINT",
  "POK",
  "POLIS",
  "POLL",
  "POLY",
  "POMAC",
  "PONZI",
  "POPULARCOIN",
  "PORTAL",
  "PORTE",
  "POSQ",
  "POST",
  "POW",
  "POWR",
  "PPC",
  "PPP",
  "PPT",
  "PPY",
  "PRA",
  "PRE",
  "PRES",
  "PRIV",
  "PRIX",
  "PRJ",
  "PRKL",
  "PRO",
  "PROB",
  "PROPS",
  "PROUD",
  "PROXYNODE",
  "PRS",
  "PRSN",
  "PRV",
  "PRX",
  "PSB",
  "PSC",
  "PST",
  "PTI",
  "PTM",
  "PTN",
  "PTON",
  "PTOY",
  "PTX",
  "PUSD",
  "PUTINCOIN",
  "PVT",
  "PWR",
  "PXC",
  "PXG",
  "PXL",
  "PYLNT",
  "PYN",
  "PYRO",
  "PZM",
  "QASH",
  "QBC",
  "QBIT",
  "QBS",
  "QBT",
  "QBX",
  "QC",
  "QCH",
  "QCX",
  "QEC",
  "QKC",
  "QLC",
  "QMC",
  "QNO",
  "QNT",
  "QNTU",
  "QOVARCOIN",
  "QRK",
  "QRL",
  "QSP",
  "QT",
  "QTUM",
  "QTV",
  "QUAN",
  "QUIN",
  "QUN",
  "QUOT",
  "QURA",
  "QWC",
  "R",
  "RABBIT",
  "RAC",
  "RADS",
  "RAGNA",
  "RAISE",
  "RAP",
  "RAS",
  "RAVEN",
  "RAWCOIN",
  "RBTC",
  "RBY",
  "RC",
  "RCCC",
  "RCN",
  "RCOIN",
  "RDAN",
  "RDCT",
  "RDD",
  "RDN",
  "REA",
  "RED",
  "REDI",
  "REE",
  "REEX",
  "REL",
  "REM",
  "REN",
  "REOSC",
  "REP",
  "REPO",
  "REQ",
  "RES",
  "RESQ",
  "REX",
  "RFR",
  "RHEA",
  "RICH",
  "RIF",
  "RIL",
  "RIPPED",
  "RIT",
  "RITO",
  "RLC",
  "RLT",
  "RLX",
  "RMC",
  "RMESH",
  "ROCK2",
  "ROCO",
  "ROE",
  "ROGER",
  "ROM",
  "ROOBEE",
  "ROX",
  "RPC",
  "RPD",
  "RPG",
  "RPI",
  "RPIL",
  "RPL",
  "RPZX",
  "RSGP",
  "RSR",
  "RTE",
  "RTH",
  "RTO",
  "2 RUB",
  "RUFF",
  "RUPX",
  "RVC",
  "RVN",
  "RXCC",
  "RYO2",
  "S4F",
  "S8",
  "SAFECOIN",
  "SAGA",
  "SAI",
  "SAIT",
  "SALT",
  "SAM",
  "SAN",
  "SAP",
  "SAPP",
  "SAPPCHAIN",
  "SAROS",
  "SATURN",
  "SATX",
  "2 SBD",
  "SBE",
  "SBP",
  "SBTC",
  "SC",
  "SCAP",
  "SCC",
  "SCCN",
  "SCCOIN",
  "SCL",
  "SCOL",
  "SCP",
  "SCRIV",
  "SCS",
  "SCSX",
  "SCTCOIN",
  "SCV",
  "SDGO",
  "SDR",
  "SDS",
  "SEAD",
  "SEC",
  "SEELE",
  "SEKO",
  "SEM",
  "SEND",
  "SENSE",
  "SENT",
  "SERV",
  "SEXC",
  "SFT",
  "SFX",
  "SGA",
  "SGC2",
  "SHA",
  "SHB",
  "SHE",
  "SHIP",
  "SHK",
  "SHORTY",
  "SHX",
  "SIAMBITCOIN",
  "SIB",
  "SIERRA",
  "SIG",
  "SILK",
  "SIN",
  "SINS",
  "SIX",
  "SKB",
  "SKC",
  "SKE",
  "SKIN",
  "SKM",
  "SKP",
  "SKRT",
  "SKT",
  "SKY",
  "SLD",
  "SLS",
  "SLT2",
  "SLV",
  "SLX",
  "SMA",
  "SMART",
  "SMDX",
  "SMT",
  "SNB",
  "SNBL",
  "SNC",
  "SNG",
  "SNGLS",
  "SNL",
  "SNM",
  "SNO",
  "SNOV",
  "SNOW",
  "SNPC",
  "SNT",
  "SNTR",
  "SNX",
  "SOAR",
  "SOC",
  "SOCKS",
  "SOFTCHAIN",
  "SOLO",
  "SOLVE",
  "SON",
  "SONIQ",
  "SONO",
  "SORA",
  "SOUL",
  "SOV",
  "SOVE",
  "SPANK",
  "SPAREPART",
  "SPC",
  "SPD",
  "SPDX",
  "SPEC",
  "SPF",
  "SPHERE",
  "SPHR",
  "SPHTX",
  "SPIKE",
  "SPIRIT",
  "SPN",
  "SPND",
  "SPRK",
  "SPRKL",
  "SPT",
  "SQR",
  "SRCOIN",
  "SREUR",
  "SRK",
  "SRN",
  "SS",
  "SSC",
  "SSN",
  "SSP",
  "SST",
  "SSX",
  "STAKECUBE",
  "STAR",
  "STEEM",
  "STEEP",
  "STK",
  "STKCOIN",
  "STL",
  "STO",
  "STO2",
  "STONE",
  "STORJ",
  "STORM",
  "STPT",
  "STPX",
  "STR",
  "STRAT",
  "STREAMIT",
  "STRMS",
  "STRX",
  "STS",
  "STX",
  "SUB",
  "SUGAR",
  "SUM",
  "SUMO",
  "SUN",
  "SUNC",
  "SUPER",
  "SUPERTRON",
  "SUR",
  "SURE2",
  "SVD",
  "SVR",
  "SVSC",
  "SW",
  "SWAMP",
  "SWAP",
  "SWAT",
  "SWC",
  "SWET",
  "SWFTC",
  "SWIFT",
  "SWIPP",
  "SWL",
  "SWM",
  "SWT",
  "SWTC",
  "SXC",
  "SXCC",
  "SXDT",
  "SXP",
  "SYM",
  "SYNC",
  "SYNX",
  "SYS",
  "T9",
  "TAC",
  "TAG",
  "TALAO",
  "TAN",
  "TAO",
  "TAT",
  "TAU",
  "TAVITT",
  "TBC2",
  "TBE",
  "TCASH",
  "TCAT",
  "TCC",
  "TCH",
  "TCO",
  "TCT",
  "TCZ",
  "TDP",
  "TDX",
  "TEAM",
  "TEL",
  "TELOS",
  "TEM",
  "TENA",
  "TER",
  "TERA",
  "TFD",
  "TFG1",
  "TFUEL",
  "TFUND",
  "THAN",
  "THAR",
  "THC",
  "THETA",
  "THEX",
  "THRN",
  "THS",
  "THX",
  "TIE",
  "TILY",
  "TIME",
  "TIMEC",
  "TIOX",
  "TIPS",
  "TIV",
  "TKN",
  "TKO",
  "TKP",
  "TKT",
  "TKX",
  "TKY",
  "TLC",
  "TLR",
  "TLS",
  "TLX",
  "TMED",
  "TMTG",
  "TNB",
  "TNC",
  "TNET",
  "TNJ",
  "TNS",
  "TNT",
  "TNX",
  "TOA",
  "TOIS",
  "TOK",
  "TOL",
  "TOMO",
  "TOMOBEAR",
  "TOMOBULL",
  "2 TOP",
  "TOPB",
  "TOPC",
  "TOPTEN",
  "TOR",
  "TOS",
  "TOSC",
  "TOTO",
  "TOUCH",
  "TOUCHCON",
  "TOUR",
  "TPD",
  "TRAC",
  "TRANSFERCOIN",
  "TRAT",
  "TRB",
  "TRC",
  "TREASUREFINANCIALCOIN",
  "TREMISS",
  "TRIAS",
  "TRIG",
  "TRIO",
  "TRM",
  "TRON",
  "TROY",
  "TROYTRADE",
  "TRP",
  "TRST",
  "TRTL",
  "TRTT",
  "TRUE",
  "TRUMP",
  "TRX",
  "TRXBEAR",
  "TRXBULL",
  "TRXC",
  "TRYB",
  "TRYBBEAR",
  "TRYBBULL",
  "TSHP",
  "TT",
  "TTC",
  "TTN",
  "TTP",
  "TUBE",
  "TUN",
  "TUSD",
  "TUT",
  "TUX",
  "TWINS",
  "TYC",
  "TYPE",
  "TYT",
  "TZC",
  "U",
  "UAT",
  "UBC",
  "UBEX",
  "UBN",
  "UBQ",
  "UBT",
  "UBU",
  "UC",
  "UCC",
  "UCT",
  "UCX",
  "UDOO",
  "UGAS",
  "UGD",
  "UIP",
  "UIS",
  "UKC",
  "UKG",
  "ULG",
  "UMC2",
  "UMO",
  "UND",
  "UNI",
  "UNIFY",
  "UNIT",
  "UNITS",
  "UNO",
  "UNOC",
  "UNRC",
  "UNY",
  "UOS",
  "UPP",
  "UPT",
  "UPX",
  "URAC",
  "URX",
  "USAT",
  "USC",
  "USDC",
  "USDEX",
  "USDG",
  "USDK",
  "USDS",
  "USDT",
  "USDT20",
  "USE",
  "USERVICE",
  "USPAY",
  "UT",
  "UTK",
  "UTT",
  "UUU",
  "UVU",
  "VALOR",
  "VARIUS",
  "VAULT",
  "VBK",
  "VCO",
  "VDG",
  "VDL",
  "VDX",
  "VECO",
  "VECT",
  "VEDX",
  "VEE",
  "VEEN",
  "VEGI",
  "VEIL",
  "VEO",
  "VERA",
  "VERI",
  "VEST",
  "VET",
  "VEX",
  "VGTN",
  "VGW",
  "VIA",
  "VIB",
  "VIBE",
  "VIDT",
  "VIDY",
  "VINCI",
  "VINDAXCOIN",
  "VIOG",
  "VIP",
  "VIRIDI",
  "VITAE",
  "VITE",
  "VITES",
  "VJC",
  "VKT",
  "VLC",
  "VLS",
  "VLU",
  "VLX",
  "VME",
  "VNDC",
  "VNTCHAIN",
  "VOLLAR",
  "VOT",
  "VOTECOIN",
  "VRA",
  "VRC",
  "VREX",
  "VRS",
  "VRSC",
  "VSC",
  "VSF",
  "VSL",
  "VSX",
  "VSYS",
  "VTAR",
  "VTC",
  "VTHO",
  "VTX3",
  "VULC",
  "VULCOIN",
  "WABI",
  "WADS",
  "WAGE",
  "WAN",
  "WAVES",
  "WAWLLET",
  "WAX",
  "WAXP",
  "WBB",
  "WBBC",
  "WBET",
  "WBL",
  "WBT",
  "WBTC",
  "WC",
  "WCDC",
  "WCH",
  "WCO",
  "WCT",
  "WEB",
  "WEBCHAIN",
  "WEBD",
  "WEBN",
  "WEC",
  "WEST",
  "WETH",
  "WFX",
  "WGC",
  "WGP",
  "WGR",
  "WHEN",
  "WHT",
  "WIC",
  "WICC",
  "WIKEN",
  "WIKI",
  "WILD",
  "WIN",
  "WINCASH",
  "WINGS",
  "WINK",
  "WIRE",
  "WISH",
  "WITCHAIN",
  "WIX",
  "WLF",
  "WLO",
  "WMP",
  "WMPRO",
  "WNL",
  "WOM",
  "WOONK",
  "WORLDCOIN",
  "WORX",
  "WOW",
  "WOWNERO",
  "WPR",
  "WPX",
  "WR",
  "WRX",
  "WSC",
  "WSX",
  "WTC",
  "WTL",
  "WTM",
  "WTP",
  "WXC",
  "WXT",
  "WYX",
  "X42",
  "X8X",
  "XAP",
  "XAUR",
  "XAUT",
  "XAX",
  "XBASE",
  "XBG",
  "XBI",
  "XBP",
  "XBS",
  "XBY",
  "XCASH",
  "XCE",
  "XCF",
  "XCHF",
  "XCO",
  "XCT",
  "XCZM",
  "XDB",
  "XDCE",
  "XDN",
  "XDNA",
  "XEM",
  "XENO",
  "XES",
  "XFC",
  "XGCS",
  "XGG",
  "XGK",
  "XGOX",
  "XGS",
  "XHD",
  "XHV",
  "XIN",
  "XIO",
  "XIRO",
  "XJO",
  "XKN",
  "XLAB",
  "XLM",
  "XLN",
  "XLPG",
  "XLQ",
  "XLR",
  "XMC",
  "XMD",
  "XMOO",
  "XMR",
  "XMV",
  "XMX",
  "XMY",
  "XNB",
  "XNK",
  "XNS",
  "XNS2",
  "XNV",
  "XOV",
  "XPC",
  "XPH",
  "XPM",
  "XPN",
  "XPR",
  "XPX",
  "XQC",
  "XQR",
  "XRC",
  "XRD",
  "XRM",
  "XRP",
  "XRPBEAR",
  "XRPBULL",
  "XRPC",
  "XSCOIN",
  "XSG",
  "XSHOP",
  "XSM",
  "XSPC",
  "XSPEC",
  "XST",
  "XT",
  "XTA",
  "XTNC",
  "XTP",
  "XTZ",
  "XTZBEAR",
  "XTZBULL",
  "XUC",
  "XUEZ",
  "XVG",
  "XVP",
  "XWO",
  "XWP",
  "XYO",
  "XZC",
  "YAP",
  "YCC",
  "YEC",
  "YEE",
  "YEED",
  "YLC",
  "YLD",
  "YNN",
  "YO",
  "YOC",
  "YOU",
  "YOYOW",
  "YTN",
  "YUN",
  "ZAG",
  "ZAIF",
  "ZANO",
  "ZAP",
  "ZAT",
  "ZB",
  "ZBA",
  "ZBUX",
  "ZCC",
  "ZCN",
  "ZCR",
  "ZDX",
  "ZEC",
  "ZEL",
  "ZEN",
  "ZEONN",
  "ZER",
  "ZEROBANK",
  "ZET",
  "ZEUS",
  "ZFL",
  "ZIL",
  "ZJLT",
  "ZLA",
  "ZLN",
  "ZLS",
  "ZMN",
  "ZMY",
  "ZND",
  "ZNN",
  "ZNZ",
  "ZOC",
  "ZP",
  "ZPAY",
  "ZRC",
  "ZRX",
  "ZSC",
  "ZTC",
  "ZTTL",
  "ZUM",
  "ZXC",
  "ZYN"
  ];

module.exports = { API_KEY, CURRENCYS };