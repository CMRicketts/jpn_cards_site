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
GET https://www.jpn-cards.com/v2/card/id=11002
```

Response:

```javascript
{
   "data":[
      {
         "id":11002,
         "setData":{
            "name":"Dragon Blade",
            "printedTotal":"55",
            "total":55,
            "year":"None",
            "image_url":"https://assets.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png",
            "set_url":"https://www.tcgcollector.com/cards/jp/dragon-blade"
         },
         "name":"Serperior",
         "types":[
            "Grass"
         ],
         "hp":130,
         "evolvesFrom":"Servine",
         "effect":[
            {
               "name":"Royal Heal",
               "text":"At any time between turns, heal 10 damage from each of your Pokémon.",
               "type":"Ability"
            }
         ],
         "attacks":[
            {
               "name":"Leaf Tornado",
               "cost":[
                  "Grass",
                  "Colorless"
               ],
               "convertedEnergyCost":2,
               "damage":"60",
               "text":"Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like."
            }
         ],
         "rules":[
            "None"
         ],
         "weaknesses":[
            {
               "type":"Fire",
               "value":"×2"
            }
         ],
         "resistances":null,
         "retreatCost":[
            "Colorless"
         ],
         "convertedRetreatCost":1,
         "supertype":"Pokémon",
         "subtypes":[
            ""
         ],
         "rarity":"Ultra Rare",
         "cardLegalities":{
            "Unlimited":"True",
            "Standard":"False",
            "Expanded":"False"
         },
         "artist":"None",
         "imageUrl":"https://assets.tcgcollector.com/build/images/default-card-image.789f6232.png",
         "cardUrl":"https://tcgcollector.com/cards/25305",
         "sequenceNumber":54,
         "printedNumber":"54"
      }
   ],
   "page":1,
   "pageSize":1,
   "count":1,
   "totalCount":1
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
| type | currently unsupported. will be updated. |
| p_no| string printed number | 
| uuid | integer cards' UUID | 

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
GET https://www.jpn-cards.com/v2/card/id=1598?name=Pawniard&illustrator=Tomokazu%20Komiya&p_no=50&set_id=9
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
        "image_url": "https://content.tcgcollector.com/content/images/63/08/71/63087185abcff5448baa0a5cb0005ff20fe3b341349cdf1a68751fb9230f2dff.png",
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
      "imageUrl": "https://content.tcgcollector.com/content/images/a9/80/c4/a980c443029f86cee8cebff777851a377a7606df5593dd16be2a5b20e646cabd.jpg",
      "cardUrl": "https://tcgcollector.com/cards/37629",
      "sequenceNumber": 50,
      "printedNumber": "50",
      "uuid": 16616909
    }
  ],
  "page": 1,
  "pageSize": 1,
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
  "name": "Lost Abyss",
  "source_url": "https://www.tcgcollector.com/cards/jp/lost-abyss",
  "image_url": "https://content.tcgcollector.com/content/images/62/08/30/620830370591a88a97a699ac672968e3d299e9a6b5eeb4d8541386e6fa8878fe.png",
  "language": "JPN",
  "year": "2022",
  "date": "None",
  "card_count": 127,
  "printed_count": 127,
  "set_code": "s11",
  "uuid":72218005
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
  "image_url": "https://assets.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png",
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