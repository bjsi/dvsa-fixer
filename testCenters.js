const testCenters = {
  "Aberdeen North": {
    address: "Cloverhill Road, Bridge of Don",
    city: "Aberdeen",
    county: "Aberdeenshire",
    postcode: "AB23 8FE"
  },
  "Aberfeldy": {
    address: "Town Hall, Crieff Road",
    city: "Aberfeldy",
    county: "Perth and Kinross County",
    postcode: "PH15 2BJ"
  },
  "Abergavenny": {
    address: "Station Road",
    city: "Abergavenny",
    county: "Monmouthshire",
    postcode: "NP7 5HT"
  },
  "Aberystwyth (Park Avenue)": {
    address: "Yr Hen Ysgol, Alexandra Road",
    city: "Aberystwyth",
    county: "Dyfed",
    postcode: "SY23 1LE"
  },
  "Airdrie": {
    address: "7 Aitchison Street, Sword Street",
    city: "Airdrie",
    county: "Lanarkshire",
    postcode: "ML6 0DA"
  },
  "Alness": {
    address: "Unit 22 Fyrish Way",
    city: "Alness",
    county: "Ross-shire",
    postcode: "IV17 0PJ"
  },
  "Alnwick": {
    address: "Roxburgh House, Green Batt",
    city: "Alnwick",
    county: "Northumberland",
    postcode: "NE66 1LA"
  },
  "Arbroath": {
    address: "1 Lochlands Drive",
    city: "Arbroath",
    county: "Angus",
    postcode: "DD11 3AT"
  },
  "Ashford (Kent)": {
    address: "Ground Floor, Civic Centre, Tannery Lane",
    city: "Ashford",
    county: "Kent",
    postcode: "TN23 1PL"
  },
  "Ashford (Middlesex)": {
    address: "18/19 Fir Tree Place, Church Road",
    city: "Ashford",
    county: "Middlesex",
    postcode: "TW15 2PH"
  },
  "Atherton MPTC": {
    address: "Gibfield Park Avenue",
    city: "Atherton",
    county: "Lancashire",
    postcode: "M46 0SY"
  },
  "Aylesbury": {
    address: "Unit 9 Ground Floor, Bell Business Park",
    city: "Aylesbury",
    county: "Buckinghamshire",
    postcode: "HP19 8JR"
  },
  "Bala": {
    address: "Unit 4, Penllyn Workshops",
    city: "Bala",
    county: "Gwynedd",
    postcode: "LL23 7SP"
  },
  "Ballater": {
    address: "The Lecture Room, Ballater Fire Station Anderson Road",
    city: "Ballater",
    county: "Aberdeenshire",
    postcode: "AB35 5QW"
  },
  "Banbury": {
    address: "3 West Bar Street",
    city: "Banbury",
    county: "Oxfordshire",
    postcode: "OX16 9SD"
  },
  "Banff": {
    address: "C/O Dept. of Employment, 23/25 Castle Street",
    city: "Banff",
    county: "Aberdeenshire",
    postcode: "AB45 1DJ"
  },
  "Bangor MPTC": {
    address: "Llandygai Industrial Estate",
    city: "Bangor",
    county: "Gwynedd",
    postcode: "LL57 4YH"
  },
  "Barking": {
    address: "84 Tanner Street",
    city: "Barking",
    county: "Essex",
    postcode: "IG11 8QF",
    availableSlots: 6
  },
  "Barnet": {
    address: "Raydean House, 15 Western Parade",
    city: "Barnet",
    county: "Middlesex",
    postcode: "EN5 1AH",
    availableSlots: 4
  },
  "Barnsley": {
    address: "West Road",
    city: "Barnsley",
    county: "South Yorkshire",
    postcode: "S75 2DH"
  },
  "Barnstaple": {
    address: "Unit 1A, Benning Court (off Riverside Road), Pottington Industrial Estate",
    city: "Barnstaple",
    county: "Devon",
    postcode: "EX31 1AB"
  },
  "Barrow-In-Furness": {
    address: "Trinity Enterprise Centre, Unit 11 Ironworks Road",
    city: "Barrow-In-Furness",
    county: "Cumbria",
    postcode: "LA14 2PN"
  },
  "Basildon MPTC": {
    address: "Paycocke Road",
    city: "Basildon",
    county: "Essex",
    postcode: "SS14 3JS"
  },
  "Basingstoke": {
    address: "Brighton Hill Centre",
    city: "Basingstoke",
    county: "Hampshire",
    postcode: "RG22 4LR"
  },
  "Bathgate": {
    address: "74 Glasgow Road",
    city: "Bathgate",
    county: "West Lothian",
    postcode: "EH48 2AG"
  },
  "Bedford": {
    address: "Portman House, 59/63 Goldington Road",
    city: "Bedford",
    county: "Bedfordshire",
    postcode: "MK40 3LT"
  },
  "Belvedere": {
    address: "33 Woolwich Road",
    city: "Belvedere",
    county: "Kent",
    postcode: "DA17 5EE",
    availableSlots: 2
  },
  "Bettyhill": {
    address: "C/O Bettyhill Post Office",
    city: "Bettyhill",
    county: "Caithness",
    postcode: "KW14 7SP"
  },
  "Beverley LGV": {
    address: "Old Beck Road, off Groveshill Road",
    city: "Beverley",
    county: "North Humberside",
    postcode: "HU17 0JG"
  },
  "Birmingham (Cocks Moor Woods)": {
    address: "Cocks Moors Woods Leisure Centre, Alcester Road, S. Kings Heath",
    city: "Birmingham",
    county: "West Midlands",
    postcode: "B14 6ER"
  },
  "Birmingham (Kings Heath)": {
    address: "955 Alcester Road South",
    city: "Birmingham",
    county: "West Midlands",
    postcode: "B14 5JA"
  },
  "Birmingham (Kingstanding)": {
    address: "205 Birdbrook Road",
    city: "Birmingham",
    county: "West Midlands",
    postcode: "B44 9UL"
  },
  "Birmingham (Shirley)": {
    address: "401 Stratford Road",
    city: "Solihull",
    county: "West Midlands",
    postcode: "B90 4AA"
  },
  "Birmingham (South Yardley)": {
    address: "Clay Lane",
    city: "South Yardley",
    county: "West Midlands",
    postcode: "B26 1EA"
  },
  "Birmingham (Sutton Coldfield)": {
    address: "110/116 Boldmere Road",
    city: "Sutton Coldfield",
    county: "West Midlands",
    postcode: "B73 5UB"
  },
  "Birmingham Garretts Green MPTC": {
    address: "Granby Avenue, Garretts Green",
    city: "Birmingham",
    county: "West Midlands",
    postcode: "B33 0TJ"
  },
  "Bishops Stortford": {
    address: "South Road",
    city: "Bishops Stortford",
    county: "Hertfordshire",
    postcode: "CM23 3LD"
  },
  "Blackburn with Darwen MPTC": {
    address: "Blackburn Interchange, Commercial Road",
    city: "Blackburn",
    county: "Lancashire",
    postcode: "BB3 0DB"
  },
  "Bletchley": {
    address: "Block 4 Government Buildings, Wilton Hostel, Wilton Avenue",
    city: "Bletchley",
    county: "Milton Keynes",
    postcode: "MK3 6DH"
  },
  "Blyth": {
    address: "Unit 3 Sextant House, Freehold Street",
    city: "Blyth",
    county: "Northumberland",
    postcode: "NE24 3BA"
  },
  "Bodmin": {
    address: "Units 32 - 36, Walker Lines Offices, Beatrice Road",
    city: "Bodmin",
    county: "Cornwall",
    postcode: "PL31 1RD"
  },
  "Bolton": {
    address: "Weston Street",
    city: "Bolton",
    county: "Lancashire",
    postcode: "BL3 2AW"
  },
  "Borehamwood": {
    address: "Unit 1 Stirling Court, Stirling Way",
    city: "Borehamwood",
    county: "Hertfordshire",
    postcode: "WD6 2BT"
  },
  "Boston": {
    address: "Unit 2 Plot 3, Redstone Industrial Estate, Spalding Road",
    city: "Boston",
    county: "Lincolnshire",
    postcode: "PE21 8AL"
  },
  "Bournemouth": {
    address: "21/23 Gillam Road",
    city: "Northbourne",
    county: "Bournemouth",
    postcode: "BH10 6BW"
  },
  "Bradford (Thornbury)": {
    address: "The Courtyard, Midpoint",
    city: "Bradford",
    county: "West Yorkshire",
    postcode: "BD3 7AY",
    availableSlots: 4
  },
  "Bradford (Heaton)": {
    address: "15 Farfield Street",
    city: "Bradford",
    county: "West Yorkshire",
    postcode: "BD09 5AS",
    availableSlots: 3
  },
  "Brecon": {
    address: "Camden Road",
    city: "Brecon",
    county: "Powys",
    postcode: "LD3 7RY",
    availableSlots: 2
  },
  "Brentwood": {
    address: "89 Warley Hill",
    city: "Brentwood",
    county: "Essex",
    postcode: "CM14 5JD",
    availableSlots: 5
  },
  "Bridgend": {
    address: "Crown Buildings, Angel Street",
    city: "Bridgend",
    county: "Mid Glamorgan",
    postcode: "CF31 4AD"
  },
  "Bridlington": {
    address: "Crown Buildings, Quay Road",
    city: "Bridlington",
    county: "North Humberside",
    postcode: "YO16 4LY"
  },
  "Bristol (Avonmouth)": {
    address: "Unit M6, Cabot Park, Merebank Road",
    city: "Avonmouth",
    county: "City of Bristol",
    postcode: "BS11 8AQ"
  },
  "Bristol (Brislington)": {
    address: "Government Buildings, Flowers Hill, Bath Road",
    city: "Bristol",
    county: "Avon",
    postcode: "BS4 5JX"
  },
  "Bristol (Southmead)": {
    address: "2 Concord Drive",
    city: "Bristol",
    county: "Avon",
    postcode: "BS10 6PZ"
  },
  "Bristol MPTC": {
    address: "Siston Centre, Kingswood",
    city: "Bristol",
    county: "Avon",
    postcode: "BS15 4GQ"
  },
  "Buckie": {
    address: "The Fire Station, East Cathcart Street",
    city: "Buckie",
    county: "Banffshire",
    postcode: "AB56 1QJ"
  },
  "Burgess Hill MPTC": {
    address: "William Way",
    city: "Burgess Hill",
    county: "West Sussex",
    postcode: "RH15 9AG"
  },
  "Burton on Trent MPTC": {
    address: "Wellington Road",
    city: "Burton on Trent",
    county: "Derbyshire",
    postcode: "DE14 2TG"
  },
  "Bury (Lancs)": {
    address: "Smith Street",
    city: "Bury",
    county: "Lancashire",
    postcode: "BL9 6HH"
  },
  "Bury St Edmunds": {
    address: "Tritron House, St Andrews Street North",
    city: "Bury St Edmunds",
    county: "Suffolk",
    postcode: "IP33 1TJ"
  },
  "Buxton": {
    address: "The Dairy, 7 Green Lane",
    city: "Buxton",
    county: "Derbyshire",
    postcode: "SK17 9DS"
  },
  "Callander": {
    address: "Burgh Chambers, South Church Street",
    city: "Callander",
    county: "Perthshire",
    postcode: "FK17 8BN"
  },
  "Cambridge (Brookmount Court)": {
    address: "Units A & B Brookmount Court, Kirkwood Road",
    city: "Cambridge",
    county: "Cambridgeshire",
    postcode: "CB4 2QH"
  },
  "Cambridge (Chesterton Road)": {
    address: "73/79 Chesterton Road",
    city: "Cambridge",
    county: "Cambridgeshire",
    postcode: "CB4 3AP"
  },
  "Cambridge (Cowley Road)": {
    address: "Cowley Road",
    city: "Cambridge",
    county: "Cambridgeshire",
    postcode: "CB4 0DT"
  },
  "Campbeltown": {
    address: "Crown Buildings, Hall Street",
    city: "Campbeltown",
    county: "Argyll",
    postcode: "PA28 6BD"
  },
  "Cannock": {
    address: "Suite 3 ground floor, Commerce House, Ridings Park",
    city: "Cannock",
    county: "Staffordshire",
    postcode: "WS11 7FJ"
  },
  "Canterbury": {
    address: "25 New Dover Road",
    city: "Canterbury",
    county: "Kent",
    postcode: "CT1 3AS"
  },
  "Cardiff (Llanishen)": {
    address: "Thornbury House, Unit 11 Lambourne Crescent, Cardiff Business Park",
    city: "Cardiff",
    county: "South Glamorgan",
    postcode: "CF14 5GF"
  },
  "Cardiff (Fairwater)": {
    address: "30 Norbury Road",
    city: "Cardiff",
    county: "South Glamorgan",
    postcode: "CF5 3AU"
  },
  "Cardigan": {
    address: "Crown Buildings, Napier Street",
    city: "Cardigan",
    county: "Dyfed",
    postcode: "SA43 1ED"
  },
  "Carlisle MPTC": {
    address: "Port Road Business Park",
    city: "Carlisle",
    county: "Cumbria",
    postcode: "CA2 7AF"
  },
  "Carmarthen": {
    address: "Ty Myrddin, Crown Building, Old Station Road",
    city: "Carmarthen",
    county: "Dyfed",
    postcode: "SA31 1GS"
  },
  "Castle Douglas": {
    address: "Carlingwark Cottage, Carlingwark Arc, Buchan Street",
    city: "Castle Douglas",
    county: "Kirkcudbrightshire",
    postcode: "DG7 1TH"
  },
  "Cheetham Hill": {
    address: "Alderglen Road",
    city: "Manchester",
    county: "Greater Manchester",
    postcode: "M8 0TD"
  },
  "Chelmsford (Hanbury Road)": {
    address: "Hanbury Road, Widford Industrial Estate",
    city: "Chelmsford",
    county: "Essex",
    postcode: "CM1 3DR"
  },
  "Cheltenham": {
    address: "Bishopsgate House, 94 All Saints Road",
    city: "Cheltenham",
    county: "Gloucestershire",
    postcode: "GL52 2HQ"
  },
  "Chertsey": {
    address: "Unit 4, The Forum, Hanworth Industrial Estate",
    city: "Chertsey",
    county: "Surrey",
    postcode: ""
  },
  "Chester MPTC": {
    address: "Front Parade Ground, Saighton Camp, Huntington",
    city: "Chester",
    county: "Cheshire",
    postcode: "CH3 5UE"
  },
  "Chesterfield": {
    address: "Bus Garage Approach Road, Stonegravels",
    city: "Chesterfield",
    county: "Derbyshire",
    postcode: "S41 7LF"
  },
  "Chichester": {
    address: "Wyman House, Shopwhyke Road",
    city: "Chichester",
    county: "West Sussex",
    postcode: "PO20 2AA"
  },
  "Chingford": {
    address: "Doric House, 128 Station Road",
    city: "Chingford",
    county: "Greater London",
    postcode: "E4 6AD",
    availableSlots: 1
  },
  "Chippenham": {
    address: "Unit 11 Cavalier Court, Bumpers Farm",
    city: "Chippenham",
    county: "Wiltshire",
    postcode: "SN14 6LH"
  },
  "Chorley": {
    address: "Rossall Road",
    city: "Chorley",
    county: "Lancashire",
    postcode: "PR06 0BT"
  },
  "Clacton-on-Sea": {
    address: "103/105 Carnarvon Road",
    city: "Clacton-on-Sea",
    county: "Essex",
    postcode: "CO15 6PR"
  },
  "Colchester": {
    address: "Grange Way",
    city: "Colchester",
    county: "Essex",
    postcode: "CO2 8HF"
  },
  "Congleton": {
    address: "27 West Street",
    city: "Congleton",
    county: "Cheshire",
    postcode: "CW12 1JN"
  },
  "Coventry (Bayton Road)": {
    address: "42 Bayton Road",
    city: "Coventry",
    county: "West Midlands",
    postcode: "CV7 9EJ"
  },
  "Crawley": {
    address: "Unit 2 The Pavillions, Brighton Road Pease Pottage",
    city: "Crawley",
    county: "West Sussex",
    postcode: "RH11 9BJ"
  },
  "Crewe": {
    address: "6 Nile Street",
    city: "Crewe",
    county: "Cheshire",
    postcode: "CW2 7LL"
  },
  "Crieff": {
    address: "Crieff Fire Station, Broich Road",
    city: "Crieff",
    county: "Perthshire",
    postcode: "PH7 3SB"
  },
  "Croydon": {
    address: "111 Canterbury Road",
    city: "Croydon",
    county: "Surrey",
    postcode: "CR0 3HH",
    availableSlots: 3
  },
  "Cumnock": {
    address: "The Town Hall, Hall Terrace",
    city: "Cumnock",
    county: "East Ayrshire",
    postcode: "KA18 1BY"
  },
  "Darlington MPTC": {
    address: "Yarm Road, High Point Business Park",
    city: "Darlington",
    county: "County Durham",
    postcode: "DL1 4PW"
  },
  "Derby (Sinfin Lane)": {
    address: "Ordnance Cottage, Sinfin Lane",
    city: "Derby",
    county: "Derbyshire",
    postcode: "DE24 9GL"
  },
  "Doncaster": {
    address: "Shaftesbury Avenue, Intake",
    city: "Doncaster",
    county: "South Yorkshire",
    postcode: "DN02 6DT"
  },
  "Dorchester": {
    address: "Government Buildings, Prince of Wales Road",
    city: "Dorchester",
    county: "Dorset",
    postcode: "DT1 1PU"
  },
  "Dumbarton": {
    address: "C/O The Benefits Agency, 15 Meadowbank Street",
    city: "Dumbarton",
    county: "Dunbartonshire",
    postcode: "G82 1SJ"
  },
  "Dumfries": {
    address: "161 Brooms Road",
    city: "Dumfries",
    county: "Dumfriesshire",
    postcode: "DG1 2SH"
  },
  "Dundee": {
    address: "Block 23B, Kilspindie Place, Dunsinane Industrial Estate",
    city: "Dundee",
    county: "Angus",
    postcode: "DD2 3QH"
  },
  "Dunfermline": {
    address: "Estantia House, Pitreavie Drive",
    city: "Dunfermline",
    county: "Fife",
    postcode: "KY11 8UH"
  },
  "Dunoon": {
    address: "C/O The Job Centre, George Street",
    city: "Dunoon",
    county: "Argyll",
    postcode: "PA23 8BB"
  },
  "Duns": {
    address: "Scottish Borders Council, 8 Newton Street",
    city: "Duns",
    county: "Berwickshire",
    postcode: "TD11 3A"
  },
  "Eastbourne": {
    address: "1 Coastguard Cottages, 84 Wartling Road",
    city: "Eastbourne",
    county: "Sussex",
    postcode: "BN22 7PT"
  },
  "Edinburgh (Currie)": {
    address: "13-15 Bryce Road",
    city: "Edinburgh",
    county: "Edinburgh",
    postcode: "EH14 5LT"
  },
  "Edinburgh (Musselburgh) MPTC": {
    address: "Newhailes Industrial Estate, Newhailes Road, Olivebank",
    city: "Musselburgh",
    county: "East Lothian",
    postcode: "EH21 6SL"
  },
  "Elgin": {
    address: "Crown Buildings, 21 Trinity Road",
    city: "Elgin",
    county: "Morayshire",
    postcode: "IV30 1UE"
  },
  "Elswick": {
    address: "Unit 2, Sirius House",
    city: "Newcastle-upon-Tyne",
    county: "Tyne and Wear",
    postcode: "NE4 7YL"
  },
  "Enfield LGV": {
    address: "33 Brancroft Way, Brimsdown",
    city: "Enfield",
    county: "Middlesex",
    postcode: "EN3 7NJ"
  },
  "Enfield MPTC": {
    address: "Solar Way",
    city: "Enfield",
    county: "Middlesex",
    postcode: "EN3 7XY",
    availableSlots: 5
  },
  "Erith MPTC": {
    address: "Crabtree, Manorway North",
    city: "Belvedere",
    county: "Kent",
    postcode: "DA17 6LJ"
  },
  "Exeter MPTC": {
    address: "Thoverton Road, Marsh Barton",
    city: "Exeter",
    county: "Devon",
    postcode: "EX2 8FS"
  },
  "Failsworth": {
    address: "2 Partington Street",
    city: "Manchester",
    county: "Greater Manchester",
    postcode: "M35 9RD"
  },
  "Falkirk": {
    address: "11 Maggiewoods Loan",
    city: "Falkirk",
    county: "Stirlingshire",
    postcode: "FK1 5HR"
  },
  "Farnborough (Aldershot) MPTC": {
    address: "35 Hercules Way",
    city: "Farnborough",
    county: "Hampshire",
    postcode: "GU14 6UU"
  },
  "Folkestone": {
    address: "Palting House Trinity Road",
    city: "Folkestone",
    county: "Kent",
    postcode: "CT20 2RH"
  },
  "Forfar": {
    address: "38 Prior Road",
    city: "Forfar",
    county: "Angus",
    postcode: "DD8 3DT"
  },
  "Fort William": {
    address: "St Marys Manse, Belford Road",
    city: "Fort William",
    county: "Inverness-shire",
    postcode: "PH33 6BT"
  },
  "Fraserburgh": {
    address: "Warld's End Basement Office Suite, 11 Dalrymple Street",
    city: "Fraserburgh",
    county: "Aberdeenshire",
    postcode: "AB43 9BH"
  },
  "Galashiels L + LGV": {
    address: "1 Croft Street",
    city: "Galashiels",
    county: "Selkirkshire",
    postcode: "TD1 3BH"
  },
  "Garston (Speke)": {
    address: "69 Woolton Road",
    city: "Liverpool",
    county: "Merseyside",
    postcode: "L19 5ND"
  },
  "Gateshead MPTC": {
    address: "Waterside Drive, Dunston",
    city: "Gateshead",
    county: "Tyne and Wear",
    postcode: "NE11 9HU"
  },
  "Gillingham L + LGV": {
    address: "Unit 4 The Courtyard, Campus Way, Gillingham Business Park",
    city: "Gillingham",
    county: "Kent",
    postcode: "ME8 0NZ"
  },
  "Girvan": {
    address: "3 Beach Pavilion",
    city: "Girvan",
    county: "Ayrshire",
    postcode: "KA26 9PH"
  },
  "Glasgow (Anniesland)": {
    address: "351 Anniesland Road",
    city: "Glasgow",
    county: "Strathclyde",
    postcode: "G13 1XS"
  },
  "Glasgow (Baillieston)": {
    address: "341 Springhill Parkway, Glasgow Business Park",
    city: "Glasgow",
    county: "Glasgow",
    postcode: "G69 6GA"
  },
  "Glasgow (Shieldhall) MPTC": {
    address: "Bogmoor Road, ShieldHall",
    city: "Glasgow",
    county: "Glasgow",
    postcode: "G51 4TH"
  },
  "Glasgow (Springburn Park)": {
    address: "Springburn Park, 14A Balornock Road",
    city: "Glasgow",
    county: "Glasgow",
    postcode: "G21 3UH"
  },
  "Gloucester MPTC": {
    address: "Green Farm Business Park, Falcon Close, Quedgeley",
    city: "Gloucester",
    county: "Gloucestershire",
    postcode: "GL2 4LY"
  },
  "Golspie": {
    address: "Golspie Fire Station, Back Road",
    city: "Golspie",
    county: "Sutherland",
    postcode: "KW10 6SP"
  },
  "Goodmayes": {
    address: "98 Goodmayes Road",
    city: "Ilford",
    county: "Essex",
    postcode: "IG3 9UZ",
    availableSlots: 9
  },
  "Grantham (Somerby)": {
    address: "Spitalgate Airfield, Blue Harbour",
    city: "Grantham",
    county: "Lincolnshire",
    postcode: "NG31 7TX"
  },
  "Grantown-on-Spey": {
    address: "Grantown-on-Spey Fire Station, Woodside Avenue",
    city: "Grantown on Spey",
    county: "Morayshire",
    postcode: "PH26 3JR"
  },
  "Gravesend": {
    address: "25 Pelham Road",
    city: "Gravesend",
    county: "Kent",
    postcode: "DA11 0HU"
  },
  "Greenford (Horsenden Lane)": {
    address: "96 Horsenden Lane North",
    city: "Greenford",
    county: "Middlesex",
    postcode: "UB6 7QH"
  },
  "Greenock": {
    address: "19A Union Street",
    city: "Greenock",
    county: "Renfrewshire",
    postcode: "PA16 8DD"
  },
  "Grimsby (Coldwater)": {
    address: "Estate Road 1, South Humberside Trading Estate, Pyewipe",
    city: "Grimsby",
    county: "Lincolnshire",
    postcode: "DN31 2TB"
  },
  "Guildford L + LGV": {
    address: "Slyfield Industrial Estate off Moorfield Road",
    city: "Guildford",
    county: "Surrey",
    postcode: "GU1 1SA"
  },
  "Haddington": {
    address: "Herdmanflatt",
    city: "Haddington",
    county: "East Lothian",
    postcode: "EH41 4NG"
  },
  "Halifax": {
    address: "11 Cross Street West, Pellon",
    city: "Halifax",
    county: "West Yorkshire",
    postcode: "HX02 0HA"
  },
  "Hamilton": {
    address: "30 Selkirk Street",
    city: "Hamilton",
    county: "South Lanarkshire",
    postcode: "ML3 6RQ"
  },
  "Harrogate": {
    address: "Walcot, Alexandra Road",
    city: "Harrogate",
    county: "North Yorkshire",
    postcode: "HG1 5JS"
  },
  "Hartlepool": {
    address: "Unit 20, Newburn Bridge Industrial Estate, Mainsforth Terrace",
    city: "Hartlepool",
    county: "County Durham",
    postcode: "TS25 1TZ"
  },
  "Hastings": {
    address: "Heron House, 149/159 London Road",
    city: "St Leonards on Sea",
    county: "East Sussex",
    postcode: "TN37 6LB"
  },
  "Hawick": {
    address: "Hawick Burnfoot Community Hub, 89 Brunfoot Road",
    city: "Hawick",
    county: "Roxburgh",
    postcode: "TD9 8EJ"
  },
  "Hayes (Middlesex)": {
    address: "Fourways House Rigby Lane Swallowfield Way",
    city: "Hayes",
    county: "Middlesex",
    postcode: "UB3 1ET"
  },
  "Heckmondwike": {
    address: "Tower Buildings, High Street",
    city: "Heckmondwike",
    county: "West Yorkshire",
    postcode: "WF16 0AS"
  },
  "Hendon": {
    address: "21 Aviation Square, Beaufort Park",
    city: "London",
    county: "London",
    postcode: "NW9 5TZ"
  },
  "Hereford": {
    address: "1 Faraday Road, Westfield Trading Estate",
    city: "Hereford",
    county: "Hereford and Worcester",
    postcode: "HR4 9NS"
  },
  "Herne Bay MPTC": {
    address: "Alfira Business Park, Margate Road, Thanet Way",
    city: "Herne Bay",
    county: "Kent",
    postcode: "CT6 6LA"
  },
  "Hexham": {
    address: "St Andrews House, Haugh Lane",
    city: "Hexham",
    county: "Northumberland",
    postcode: "NE46 3EW"
  },
  "Heysham": {
    address: "1A Sugham Lane",
    city: "Heysham",
    county: "Lancashire",
    postcode: "LA03 2DR"
  },
  "High Wycombe (Bucks)": {
    address: "Trenchard House, Wellington Road, Cressex Business Park",
    city: "High Wycombe",
    county: "Buckinghamshire",
    postcode: "HP12 3PS"
  },
  "Hinckley": {
    address: "33 Brookside",
    city: "Hinckley",
    county: "Leicestershire",
    postcode: "LE10 2TG"
  },
  "Hither Green": {
    address: "42-44 Ennersdale Road",
    city: "London",
    county: "London",
    postcode: "SE13 6JD",
    availableSlots: 0
  },
  "Hornchurch": {
    address: "75 Station Lane",
    city: "Hornchurch",
    county: "Essex",
    postcode: "RM12 6JX"
  },
  "Horsforth": {
    address: "Room 013 Woodside House, 261 Low Lane",
    city: "Leeds",
    county: "West Yorkshire",
    postcode: "LS18 5NY"
  },
  "Huddersfield": {
    address: "Waverley House, Waverley Road",
    city: "Huddersfield",
    county: "West Yorkshire",
    postcode: "HD01 5NA"
  },
  "Hull MPTC": {
    address: "Reservoir Rd, Off Clough Rd",
    city: "Kingston upon Hull",
    county: "North Humberside",
    postcode: "HU6 7PY"
  },
  "Huntly": {
    address: "Huntly Fire Station, Depot Road",
    city: "Huntly",
    county: "Aberdeenshire",
    postcode: "AB54 8JX"
  },
  "Hyde": {
    address: "23 Perrin Street",
    city: "Hyde",
    county: "Cheshire",
    postcode: "SK14 1JE"
  },
  "Inverness DTC": {
    address: "Ground Floor Suite B1, Elm House, Cradlehall Business Park",
    city: "Inverness",
    county: "Inverness",
    postcode: "IV2 5GH"
  },
  "Ipswich MPTC": {
    address: "Central Avenue / Bluestem Road, Ransomes Europark",
    city: "Ipswich",
    county: "Suffolk",
    postcode: "IP3 9RR"
  },
  "Islay Island": {
    address: "Post Office Main Street",
    city: "Bowmore",
    county: "Argyll and Bute",
    postcode: "PA43 7JH"
  },
  "Isle of Islay (Port Ellen)": {
    address: "Glen Eckdale Airfield",
    city: "Port Ellen",
    county: "Argyll",
    postcode: "PA42 7AS"
  },
  "Isles of Scilly": {
    address: "Town Hall",
    city: "St Marys",
    county: "Isles of Scilly",
    postcode: "TR21 0LW"
  },
  "Isleworth": {
    address: "Worton Hall, Worton Road",
    city: "Isleworth",
    county: "Middlesex",
    postcode: "TW7 6ER"
  },
  "Kelso": {
    address: "Croall Bryson Garage, Roxburgh Works, Pinnaclehill Industrial Estate",
    city: "Kelso",
    county: "Roxburghshire",
    postcode: "TD5 8DW"
  },
  "Kendal": {
    address: "Eskdale House, Shap Road",
    city: "Kendal",
    county: "Cumbria",
    postcode: "LA09 6NQ"
  },
  "Kettering MPTC": {
    address: "Orion Way, Kettering Business Park",
    city: "Kettering",
    county: "Northamptonshire",
    postcode: "NN15 6NL"
  },
  "Kilmarnock": {
    address: "71 Whatriggs Road",
    city: "Kilmarnock",
    county: "East Ayrshire",
    postcode: "KA1 3RB"
  },
  "Kings Lynn MPTC": {
    address: "Rollesby Road, Hardwick Industrial Estate",
    city: "Kings Lynn",
    county: "Norfolk",
    postcode: "PE30 4LS"
  },
  "Kingussie": {
    address: "Kingussie Shinty Club, The Market Stance, Ruthven Road",
    city: "Kingussie",
    county: "Inverness-shire",
    postcode: "PH21 1EN"
  },
  "Kirkcaldy MPTC": {
    address: "10 Randolph Place",
    city: "Kirkcaldy",
    county: "Fife",
    postcode: "KY1 2YX"
  },
  "Lairg": {
    address: "Lairg Fire Station, Main Street",
    city: "Lairg",
    county: "Sutherland",
    postcode: "IV27 4DB"
  },
  "Lampeter": {
    address: "Government Buildings, Pontfaen Road",
    city: "Lampeter",
    county: "Dyfed",
    postcode: "SA48 7BL"
  },
  "Launceston": {
    address: "St Johns, Western Road",
    city: "Launceston",
    county: "Cornwall",
    postcode: "PL15 7AU"
  },
  "Lee on the Solent MPTC": {
    address: "The Richard Sainsbury Building, Daedalus, Chark Lane",
    city: "Lee on the Solent",
    county: "Hants",
    postcode: "PO13 9YA"
  },
  "Leeds (Harehills)": {
    address: "Hillcrest House, 386 Harehills Lane",
    city: "Leeds",
    county: "West Yorkshire",
    postcode: "LS9 6NF"
  },
  "Leicester (Gipsy Lane)": {
    address: "Opposite Oliver Road",
    city: "Leicester",
    county: "Leicestershire",
    postcode: "LE4 6RH"
  },
  "Leicester (South Wigston) MPTC": {
    address: "Land At Tigers Close",
    city: "Leicester",
    county: "Leicestershire",
    postcode: "LE18 4WS"
  },
  "Leighton Buzzard": {
    address: "Van Dyke Road",
    city: "Leighton Buzzard",
    county: "Bedfordshire",
    postcode: "LU7 3HA"
  },
  "Lerwick (Shetland)": {
    address: "Isleburgh House, King Harald Street",
    city: "Lerwick",
    county: "Isle of Shetland",
    postcode: "ZE1 0DJ"
  },
  "Letchworth": {
    address: "Jackmans Place",
    city: "Letchworth",
    county: "Hertfordshire",
    postcode: "SG6 1RF"
  },
  "Lichfield": {
    address: "Lower Sanford Street",
    city: "Lichfield",
    county: "West Midlands",
    postcode: "WS13 6RB"
  },
  "Lincoln MPTC": {
    address: "Earlsfield Close Off Sadler Road",
    city: "Lincoln",
    county: "Lincolnshire",
    postcode: "LN6 3RT"
  },
  "Llandrindod Wells": {
    address: "Government Buildings, Spa Road East",
    city: "Llandrindod Wells",
    county: "Powys",
    postcode: "LD1 5HA"
  },
  "Llanelli": {
    address: "Toft Place, Llanerch",
    city: "Llanelli",
    county: "Dyfed",
    postcode: "SA15 3SB"
  },
  "Lochgilphead": {
    address: "County Offices, Manse Brae",
    city: "Lochgilphead",
    county: "Argyll",
    postcode: "PA31 8QU"
  },
  "Longbenton": {
    address: "Government Buildings, Whitley Road",
    city: "Newcastle Upon Tyne",
    county: "Tyne and Wear",
    postcode: "NE12 9SE"
  },
  "Loughborough": {
    address: "Pinfold Gate Car Park, Pinfold Gate Road",
    city: "Loughborough",
    county: "Leicestershire",
    postcode: "LE11 1BG"
  },
  "Loughton": {
    address: "Crown Buildings, 284 High Road",
    city: "Loughton",
    county: "Essex",
    postcode: "IG10 1RB"
  },
  "Louth": {
    address: "Zenith House, North Holme Road",
    city: "Louth",
    county: "Lincolnshire",
    postcode: "LN11 0HQ"
  },
  "Lower Gornal": {
    address: "19/21 Lake Street",
    city: "Nr Dudley",
    county: "West Midlands",
    postcode: "DY3 2AU"
  },
  "Lowestoft": {
    address: "Rishton House, Clapham Road",
    city: "Lowestoft",
    county: "Suffolk",
    postcode: "NR32 1RL"
  },
  "Ludlow": {
    address: "54 Broad Street",
    city: "Ludlow",
    county: "Shropshire",
    postcode: "SY8 1GN"
  },
  "Luton": {
    address: "6/10 Adelaide Street",
    city: "Luton",
    county: "Bedfordshire",
    postcode: "LU1 5BT"
  },
  "Macclesfield": {
    address: "10 Bridge Street",
    city: "Macclesfield",
    county: "Cheshire",
    postcode: "SK11 6EG"
  },
  "Maidstone": {
    address: "Unit 1 North Court, South Park Business Village Armstrong Road",
    city: "Maidstone",
    county: "Kent",
    postcode: "ME15 6JZ"
  },
  "Mallaig": {
    address: "Mallaig and Morar Community Centre, West Bay",
    city: "Mallaig",
    county: "Inverness-shire",
    postcode: "PH41 4PX"
  },
  "Malton": {
    address: "3 Milton Avenue",
    city: "Malton",
    county: "North Yorkshire",
    postcode: "YO17 0LB"
  },
  "Melton Mowbray": {
    address: "Crown Building, 50/52 Scalford Road",
    city: "Melton Mowbray",
    county: "Leicestershire",
    postcode: "LE13 1JY"
  },
  "Merthyr Tydfil": {
    address: "Government Buildings, Castle Street",
    city: "Merthyr Tydfil",
    county: "Mid Glamorgan",
    postcode: "CF47 8TX"
  },
  "Middlesbrough": {
    address: "Maxwell Road",
    city: "Middlesbrough",
    county: "Cleveland",
    postcode: "TS03 8TE"
  },
  "Mill Hill": {
    address: "Unit 9 Grannard Business Centre Bunns Lane",
    city: "London",
    county: "Greater London",
    postcode: "NW7 2DQ"
  },
  "Mitcham (London)": {
    address: "Redhouse Road",
    city: "Mitcham",
    county: "Surrey",
    postcode: "CR0 3AQ"
  },
  "Monmouth": {
    address: "Old Dixon Road",
    city: "Monmouth",
    county: "Monmouthshire",
    postcode: "NP25 3DP"
  },
  "Montrose": {
    address: "Inchbraoch House, Harbour Offices, South Quay, Ferryden",
    city: "Montrose",
    county: "Angus",
    postcode: "DD10 9SL"
  },
  "Morden": {
    address: "10 Tudor Drive",
    city: "Morden",
    county: "Surrey",
    postcode: "SM4 4PE",
    availableSlots: 8
  },
  "Nelson": {
    address: "Cobden Street",
    city: "Nelson",
    county: "Lancashire",
    postcode: "BB09 0AH"
  },
  "Newbury": {
    address: "Newtown Road",
    city: "Newbury",
    county: "Berkshire",
    postcode: "RG14 7EB"
  },
  "Newcastle-under-Lyme": {
    address: "Parklands Clayton Lane, Trent Vale",
    city: "Stoke-On-Trent",
    county: "Staffordshire",
    postcode: "ST4 6PQ"
  },
  "Newport MPTC": {
    address: "Stephenson Street Off Corporation Road, Liswerry",
    city: "Newport",
    county: "Monmouthshire",
    postcode: "NP19 4XH"
  },
  "Newton Abbot": {
    address: "Vander House, Brunel Road",
    city: "Newton Abbot",
    county: "Devon",
    postcode: "TQ12 4YQ"
  },
  "Norris Green": {
    address: "Falklands Approach, Parthenon Drive",
    city: "Liverpool",
    county: "Merseyside",
    postcode: "L11 5BR"
  },
  "Northallerton": {
    address: "Elder House, East Road",
    city: "Northallerton",
    county: "North Yorkshire",
    postcode: "DL06 1NU"
  },
  "Northampton": {
    address: "Gladstone Business Centre, Gladstone Road",
    city: "Northampton",
    county: "Northamptonshire",
    postcode: "NN5 7QG"
  },
  "Northwich (Northern)": {
    address: "4 Felix Road, Winnington",
    city: "Northwich",
    county: "Cheshire",
    postcode: "CW08 4BU"
  },
  "Norwich MPTC": {
    address: "Peachman Way, Broadlands Business Park, Thorpe St Andrew",
    city: "Norwich",
    county: "Norfolk",
    postcode: "NR7 0WE"
  },
  "Nottingham (Chalfont Drive)": {
    address: "Block 6 Room F4, Government Buildings, Chalfont Drive",
    city: "Nottingham",
    county: "Nottinghamshire",
    postcode: "NG8 3RF"
  },
  "Nottingham (Colwick) MPTC": {
    address: "Private Road No 5, Colwick Industrial Estate",
    city: "Nottingham",
    county: "Nottinghamshire",
    postcode: "NG4 2JU"
  },
  "Nuneaton": {
    address: "54 Vernons Lane",
    city: "Nuneaton",
    county: "Warwickshire",
    postcode: "CV10 8AA"
  },
  "Oban": {
    address: "Cameron House, Albany Street",
    city: "Oban",
    county: "Argyll",
    postcode: "PA34 4AE"
  },
  "Orkney (Kirkwall)": {
    address: "Pickaquoy Road",
    city: "Kirkwall",
    county: "Orkney County",
    postcode: "KW15 1RR"
  },
  "Oxford (Cowley)": {
    address: "James Wolfe Road",
    city: "Oxford",
    county: "Oxfordshire",
    postcode: "OX4 2PY"
  },
  "Paisley": {
    address: "Textile House, 3 Duke Street",
    city: "Paisley",
    county: "Renfrewshire",
    postcode: "PA2 6RF"
  },
  "Peebles": {
    address: "Tweeddale District Council, Rosetta Road",
    city: "Peebles",
    county: "Peeblesshire",
    postcode: "EH45 8DN"
  },
  "Pembroke Dock": {
    address: "The Captain Superintendent's Building, Royal Dockyard",
    city: "Pembroke Dock",
    county: "Dyfed",
    postcode: "SA72 6TD"
  },
  "Penzance": {
    address: "1 Alverton Terrace",
    city: "Penzance",
    county: "Cornwall",
    postcode: "TR18 4JH"
  },
  "Perth": {
    address: "111 Rannoch Road",
    city: "Perth",
    county: "Perthshire",
    postcode: "PH1 2DF"
  },
  "Peterborough MPTC": {
    address: "Second Drove, Fengate",
    city: "Peterborough",
    county: "Cambridgeshire",
    postcode: "PE1 5XA"
  },
  "Peterhead": {
    address: "Suite 21, Burnside Business Centre, Burnside Rd",
    city: "Peterhead",
    county: "Aberdeenshire",
    postcode: "AB42 3AW"
  },
  "Pinner": {
    address: "221 Tolcarne Drive",
    city: "Pinner",
    county: "Middlesex",
    postcode: "HA5 2DZ"
  },
  "Pitlochry": {
    address: "The Hall, West Moulin Road",
    city: "Pitlochry",
    county: "Perthshire",
    postcode: "PH16 5EA"
  },
  "Plymouth MPTC": {
    address: "Ernesettle Lane",
    city: "Plymouth",
    county: "Devon",
    postcode: "PL5 2EY"
  },
  "Pontefract": {
    address: "Baghill Station, Station Lane",
    city: "Pontefract",
    county: "West Yorkshire",
    postcode: "WF8 1RB"
  },
  "Pontypridd": {
    address: "18 Pwllgwaun Road",
    city: "Pontypridd",
    county: "Mid Glamorgan",
    postcode: "CF37 1HH"
  },
  "Portsmouth": {
    address: "Fort Southwick, James Callaghan Drive",
    city: "Fareham",
    county: "Hampshire",
    postcode: "PO17 6AR"
  },
  "Preston": {
    address: "Chain Caul Road",
    city: "Preston",
    county: "Lancashire",
    postcode: "PR2 2PD"
  },
  "Reading": {
    address: "220 Elgar Road South",
    city: "Reading",
    county: "Berkshire",
    postcode: "RG2 0DE"
  },
  "Reddish (Northern)": {
    address: "26/28 Broadstone Road",
    city: "Reddish",
    county: "Cheshire",
    postcode: "SK5 7AE"
  },
  "Redditch (Worcestershire)": {
    address: "Elm Road",
    city: "Redditch",
    county: "Worcestershire",
    postcode: "B97 6HJ"
  },
  "Reigate": {
    address: "7 Slipshatch Road, Woodhatch",
    city: "Reigate",
    county: "Surrey",
    postcode: "RH2 8HA"
  },
  "Rhyl": {
    address: "Victoria Road",
    city: "Rhyl",
    county: "Denbighshire",
    postcode: "LL18 2EL"
  },
  "Rochdale": {
    address: "Blueberry Business Park, Unit 5 Ground Floor, Kingsway",
    city: "Rochdale",
    county: "Lancashire",
    postcode: "OL16 5AF"
  },
  "Rotherham MPTC": {
    address: "Mangham Way, Off Mangham Rd",
    city: "Rotherham",
    county: "South Yorkshire",
    postcode: "S61 4RL"
  },
  "Rothesay (Bute Island)": {
    address: "C/O Dept. of Employment, 9 King Street",
    city: "Rothesay",
    county: "Isle of Bute",
    postcode: "PA20 0DE"
  },
  "Rugby": {
    address: "Aspect House, 66B Somers Road",
    city: "Rugby",
    county: "Warwickshire",
    postcode: "CV22 7DH"
  },
  "Sale": {
    address: "36/38 Poplar Grove",
    city: "Sale",
    county: "Cheshire",
    postcode: "M33 7ER"
  },
  "Salisbury": {
    address: "Rougemont Close",
    city: "Salisbury",
    county: "Wiltshire",
    postcode: "SP1 1LY"
  },
  "West Wickham": {
    address: "56 Glebe Way",
    city: "West Wickham",
    county: "Kent",
    postcode: "BR4 0RL",
    availableSlots: 6
  }
};

// Export the object for use in other files
module.exports = testCenters; 