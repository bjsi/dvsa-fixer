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
    postcode: "IG11 8QF"
  },
  "Barnet": {
    address: "Raydean House 15/17 Western Parade",
    city: "Barnet",
    county: "Middlesex",
    postcode: "EN5 1AD"
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
    postcode: "DA17 5EE"
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
    postcode: "BD3 7AY"
  },
  "Bradford (Heaton)": {
    address: "15 Farfield Street",
    city: "Bradford",
    county: "West Yorkshire",
    postcode: "BD09 5AS"
  },
  "Brecon": {
    address: "Camden Road",
    city: "Brecon",
    county: "Powys",
    postcode: "LD3 7RY"
  },
  "Brentwood": {
    address: "89 Warley Hill",
    city: "Brentwood",
    county: "Essex",
    postcode: "CM14 5JN"
  },
  "Bridgend": {
    address: "Crown Buildings, Angel Street",
    city: "Bridgend",
    county: "Mid Glamorgan",
    postcode: "CF31 4AD"
  }
};

// Export the object for use in other files
module.exports = testCenters; 