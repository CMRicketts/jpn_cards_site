## Japanese Pokemon TCG Version 2 API Queries

* * *

### Card Queries

#### Get A Card

Get a single card's information based on its unique identifier.

* * * 

##### HTTP Request
```bash
GET https://www.jpn-cards.com/v2/card/id=<id>
```

URL Parameters:

| Parameter | Description |
|---|---|
| id | integer id of the card |

* * * 

##### Example

HTTP Request:

```bash
GET https://www.jpn-cards.com/v2/card/id=9700
```

Response:

```javascript
{
  "data": [
    {
      "id": 9700,
      "setData": {
        "name": "Awakening Psychic King",
        "printed_count": "88",
        "card_count": 88,
        "year": "None",
        "image_url": "https://static.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png",
        "set_url": "https://www.tcgcollector.com/cards/jp/awakening-psychic-king"
      },
      "name": "Serperior",
      "types": [
        "Grass"
      ],
      "hp": 140,
      "evolvesFrom": "Servine",
      "effect": [],
      "attacks": [
        {
          "name": "Coil",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "40",
          "text": "During your next turn, this Pokémon's attacks do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
        },
        {
          "name": "Slashing Strike",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "80",
          "text": "This Pokémon can't use Slashing Strike during your next turn."
        }
      ],
      "rules": [
        "None"
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": null,
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "supertype": "Pokémon",
      "subtypes": [
        "Stage 2"
      ],
      "rarity": "Uncommon",
      "cardLegalities": {
        "Unlimited": "True",
        "Standard": "False",
        "Expanded": "False"
      },
      "artist": "You Iribi",
      "imageUrl": "https://static.tcgcollector.com/content/images/c4/e2/55/c4e25508257025c44486c7eb05a357be88e5245f60a2ccaba2d50355871389dc.jpg",
      "cardUrl": "https://tcgcollector.com/cards/22921",
      "sequenceNumber": 7,
      "printedNumber": "7",
      "uuid": 71766756,
      "prices": [
        {
          "priceAmount": 300,
          "priceCurrency": "USD Cents",
          "dateUpdated": "05/14/2024",
          "listingUrl": "https://www.pricecharting.com/game/pokemon-japanese-awakening-psychic-king/serperior-7",
          "vendor": "Price Charting",
          "variant": "Regular",
          "condition": "Ungraded"
        }
      ]
    }
  ],
  "page": 1,
  "pageSize": 250,
  "count": 1,
  "totalCount": 1
}
```

#### Get Multiple Cards

Get one or more cards based on more broad metadata.

* * * 

##### HTTP Request
```bash
GET https://www.jpn-cards.com/v2/card/
```

URL Parameters:

All URL parameters are optional, but at least one must be included.

| Parameter | Description |
|---|---|
| id | integer id of the card |
| name | string name of the card |
| set_id | integer id of the set the card is in | 
| illustrator | string name of the illustrator/artist |
| p_no| string printed number | 
| uuid | integer cards' UUID | 
| rarity | string the cards' rarity |
| subtype | string one of the cards' subtype |
| type | string the type the pokemon is |
| set_code | string the set code of the set that the card belongs to |

You can also combine multiple URL Parameters together, like

```bash
GET https://www.jpn-cards.com/v2/card/illustrator=Shigenori%20Negishi&name=Dusknoir
```

For values with spaces or other special characters in them, you're able to just pass it in normally or URL-encoded. For example, the following queries will return the same data.

```bash
GET https://www.jpn-cards.com/v2/card/name=darkrai v
```

```bash
GET https://www.jpn-cards.com/v2/card/name=darkrai%20v
```

* * * 

##### Example

HTTP Request:

```bash
GET https://www.jpn-cards.com/v2/card/id=1598?name=Pawniard&illustrator=Tomokazu%20Komiya&p_no=50&set_id=9&set_code=s10D
```

Response:

```javascript
{
  "data": [
    {
      "id": 1598,
      "setData": {
        "name": "Time Gazer",
        "printed_count": "88",
        "card_count": 88,
        "year": "None",
        "image_url": "https://static.tcgcollector.com/content/images/63/08/71/63087185abcff5448baa0a5cb0005ff20fe3b341349cdf1a68751fb9230f2dff.png",
        "set_url": "https://www.tcgcollector.com/cards/jp/time-gazer"
      },
      "name": "Pawniard",
      "types": [
        "Metal"
      ],
      "hp": 60,
      "evolvesFrom": "None",
      "effect": [],
      "attacks": [
        {
          "name": "Reckless Charge",
          "cost": [
            "Metal"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "This Pokémon also does 10 damage to itself."
        }
      ],
      "rules": [
        "None"
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": null,
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "supertype": "Pokémon",
      "subtypes": [
        "Basic"
      ],
      "rarity": "Common",
      "cardLegalities": {
        "Unlimited": "True",
        "Standard": "False",
        "Expanded": "False"
      },
      "artist": "Tomokazu Komiya",
      "imageUrl": "https://static.tcgcollector.com/content/images/a9/80/c4/a980c443029f86cee8cebff777851a377a7606df5593dd16be2a5b20e646cabd.jpg",
      "cardUrl": "https://tcgcollector.com/cards/37629",
      "sequenceNumber": 50,
      "printedNumber": "50",
      "uuid": 16616909,
      "prices": [
        {
          "priceAmount": 50,
          "priceCurrency": "JPY",
          "dateUpdated": "03/13/2023",
          "listingUrl": "https://www.cardrush-pokemon.jp/product/34651",
          "vendor": "cardrush",
          "variant": "Regular",
          "condition": "A+"
        },
        {
          "priceAmount": 30,
          "priceCurrency": "JPY",
          "dateUpdated": "03/13/2023",
          "listingUrl": "https://www.c-labo-online.jp/product/193266",
          "vendor": "clabo",
          "variant": "Regular",
          "condition": "NM"
        },
        {
          "priceAmount": 50,
          "priceCurrency": "JPY",
          "dateUpdated": "03/13/2023",
          "listingUrl": "https://shopping.fullcomp.jp//shopdetail/000000051240/p_s10d/page2/price_desc/",
          "vendor": "fullcomp",
          "variant": "Regular",
          "condition": "A+"
        },
        {
          "priceAmount": 149,
          "priceCurrency": "USD Cents",
          "dateUpdated": "05/15/2024",
          "listingUrl": "https://www.pricecharting.com/game/pokemon-japanese-time-gazer/pawniard-50",
          "vendor": "Price Charting",
          "variant": "Regular",
          "condition": "Ungraded"
        },
        {
          "priceAmount": 30,
          "priceCurrency": "JPY",
          "dateUpdated": "03/13/2023",
          "listingUrl": "https://yuyu-tei.jp/game_poc/carddetail/cardpreview.php?VER=s10D&CID=10050&MODE=sell",
          "vendor": "yuyu-tei",
          "variant": "Regular",
          "condition": "NM"
        }
      ]
    }
  ],
  "page": 1,
  "pageSize": 250,
  "count": 1,
  "totalCount": 1
}
```

* * *

### Set Queries

#### Get A Set

Get a single set's information based on its unique identifier `id` or `uuid`.

##### HTTP Request
ID: 

```bash
GET https://www.jpn-cards.com/v2/set/<id>
```

UUID: 

```bash
GET https://www.jpn-cards.com/v2/set/uuid/<id>
```

URL Parameters:

| Parameter | Description |
|---|---|
| id | integer id of the set |
| uuid | integer uuid of the set |

* * * 

##### Example

HTTP Request:

ID: 

```bash
GET https://www.jpn-cards.com/v2/set/1
```

Response:

```javascript
{
  "id": 1,
  "name": "Incandescent Arcana",
  "source_url": "https://www.tcgcollector.com/cards/jp/incandescent-arcana",
  "image_url": "https://static.tcgcollector.com/content/images/70/96/58/70965861e023d8ba18efc5ed298ce15ed466cbec5b2be78afb737bccb710fcbe.png",
  "language": "JPN",
  "year": "2022",
  "date": "September 2, 2022",
  "card_count": 94,
  "printed_count": 68,
  "set_code": "s11a",
  "uuid": 72218005
}
```

UUID: 

```bash
GET https://www.jpn-cards.com/v2/set/uuid/87454757
```

Response:

```javascript
{
  "id": 260,
  "name": "Gold, Silver, to a New World...",
  "source_url": "https://www.tcgcollector.com/cards/jp/gold-silver-to-a-new-world",
  "image_url": "https://static.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png",
  "language": "JPN",
  "year": "2000",
  "date": "February 4, 2000",
  "card_count": 96,
  "printed_count": 96,
  "set_code": "neo1",
  "uuid": 87454757
}
```

* * *

#### Get All Sets

Get all sets and their information.

##### HTTP Request
```bash
GET https://www.jpn-cards.com/v2/set/
```

URL Parameters:

None

* * * 

##### Example

HTTP Request:

```bash
GET https://www.jpn-cards.com/v2/set/
```

Response:

```javascript
[
  {
    "id": 291,
    "name": "10th Movie Commemoration Set",
    "source_url": "https://www.tcgcollector.com/cards/jp/10th-movie-commemoration-set",
    "image_url": "https://assets.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png",
    "language": "JPN",
    "year": "2007",
    "date": "None",
    "card_count": 11,
    "printed_count": 11,
    "set_code": "10ms",
    "uuid":81271647
  },
  {
    "id": 290,
    "name": "11th Movie Commemoration Set",
    "source_url": "https://www.tcgcollector.com/cards/jp/11th-movie-commemoration-set",
    "image_url": "https://assets.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png",
    "language": "JPN",
    "year": "2008",
    "date": "None",
    "card_count": 9,
    "printed_count": 9,
    "set_code": "11ms",
    "uuid":19835893
  },
  {
    "id": 16,
    "name": "25th Anniversary Collection",
    "source_url": "https://www.tcgcollector.com/cards/jp/25th-anniversary-collection",
    "image_url": "https://content.tcgcollector.com/content/images/6c/db/e6/6cdbe627099c229a2f1bcd205728d318377b218e7e92c2e54fbc3266c4048525.png",
    "language": "JPN",
    "year": "2021",
    "date": "None",
    "card_count": 38,
    "printed_count": 38,
    "set_code": "s8a",
    "uuid":27124441
  },
  ...
]
```

* * *

### Other Queries

#### Get All Artists

Get all card artists

##### HTTP Request

```bash
GET https://www.jpn-cards.com/v2/card/artists
```

##### URL Parameters:

`None`

##### Response:

```javascript
[
  "tetsuya koizumi",
  "Rianti Hidayat",
  "Hironobu Yoshida",
  "DOM",
  "kanahei",
  "D.A.G Inc.",
  "Hideaki Hakozaki",
  "Yukiko Baba",
  "Yusuke Ishikawa",
  "zig",
  "Pani Kobayashi",
  "KIYOTAKA OSHIYAMA",
  "Zu-Ka",
  ...
]
```

#### Get All Subtypes

Get all card Subtypes

##### HTTP Request

```bash
GET https://www.jpn-cards.com/v2/card/subtypes
```

##### URL Parameters:

`None`

##### Response:

```javascript
[
  "Single Strike",
  "Stage 2",
  "Supporter",
  "Rapid Strike Trainer",
  "Trainer ?",
  "d",
  "Hisuian",
  "Basic",
  "Full Art",
  "Shining",
  ...
]
```

#### Get All Rarities

Get all card rarities

##### HTTP Request

```bash
GET https://www.jpn-cards.com/v2/card/rarities
```

##### URL Parameters:

`None`

##### Response:

```javascript
[
  "LEGEND",
  "Prism Rare",
  "Rare",
  "Rare Shining",
  "Super Rare",
  "Ultra Rare",
  "Character Rare",
  "None",
  "Rare Holo LV.X",
  "Shiny",
  "Shiny Super Rare",
  ...
]
```

#### Get All Vendors

Get all vendors who contribute prices to the API. Under development.

##### HTTP Request

```bash
GET https://www.jpn-cards.com/v2/card/vendors
```

##### URL Parameters:

`None`

##### Response:

```javascript
[
  {
    "name": "cardrush",
    "url": "PLACEHOLDER"
  },
  {
    "name": "clabo",
    "url": "PLACEHOLDER"
  },
  {
    "name": "fullcomp",
    "url": "PLACEHOLDER"
  },
  {
    "name": "Price Charting",
    "url": "PLACEHOLDER"
  },
  {
    "name": "yuyu-tei",
    "url": "PLACEHOLDER"
  }
]
```

#### Get All Variants

Get all card variants observed in pricing data. Under development.

##### HTTP Request

```bash
GET https://www.jpn-cards.com/v2/card/variants
```

##### URL Parameters:

`None`

##### Response:

```javascript
[
  ...,
  "15th Anniversary",
  "1st Edition",
  "600 Fan Club",
  "Cracked Ice",
  "Ditto",
  ...,
]
```