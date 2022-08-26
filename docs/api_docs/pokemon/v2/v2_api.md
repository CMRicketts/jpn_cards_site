## Japanese Pokemon TCG Version 2 API Queries

* * *

### Card Queries

#### Get A Card

Get a single card's information based on its unique identifier.

* * * 

##### HTTP Request
```bash
GET https://jpn-cards.com/v2/card/id=<id>
```

URL Parameters:

| Parameter | Description |
|---|---|
| id | integer id of the card |

* * * 

##### Example

HTTP Request:

```bash
GET https://jpn-cards.com/v2/card/id=11002
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
GET https://jpn-cards.com/v2/card/
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
GET https://www.jpn-cards.com/v2/card/id=240?name=Clefable&illustrator=Sekio&p_no=20&set_id=1
```

Response:

```javascript
{
  "data": [
    {
      "id": 240,
      "setData": {
        "name": "Dark Phantasma",
        "printedTotal": "99",
        "total": 99,
        "year": "None",
        "image_url": "https://content.tcgcollector.com/content/images/10/cc/27/10cc27ec6c88f4d22175f0a07aa9763adac1f332bfabb653c3763b9650c5e987.png",
        "set_url": "https://www.tcgcollector.com/cards/jp/dark-phantasma"
      },
      "name": "Clefable",
      "types": [
        "Psychic"
      ],
      "hp": 100,
      "evolvesFrom": "Clefairy",
      "effect": [
        {
          "name": "Mystic Protection",
          "text": "All of your Pokémon take 30 less damage from the attacks of your opponent's Dragon Pokémon (after applying Weakness and Resistance). You can't apply more than 1 Mystic Protection Ability at a time.",
          "type": "Ability"
        }
      ],
      "attacks": [
        {
          "name": "Moon Impact",
          "cost": [
            "Psychic",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "90"
        }
      ],
      "rules": [
        "None"
      ],
      "weaknesses": [
        {
          "type": "Metal",
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
        ""
      ],
      "rarity": "Uncommon",
      "cardLegalities": {
        "Unlimited": "True",
        "Standard": "False",
        "Expanded": "False"
      },
      "artist": "Sekio",
      "imageUrl": "https://content.tcgcollector.com/content/images/cf/38/e0/cf38e0dd52341a43edfd90b2d46e8294d5d8b758d4abb8fa9d1724809d17a273.jpg",
      "cardUrl": "https://tcgcollector.com/cards/37907",
      "sequenceNumber": 20,
      "printedNumber": "20"
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

Get a single set's information based on its unique identifier.

##### HTTP Request
```bash
GET https://jpn-cards.com/v2/set/<id>
```

URL Parameters:

| Parameter | Description |
|---|---|
| id | integer id of the set |

* * * 

##### Example

HTTP Request:

```bash
GET https://jpn-cards.com/v2/set/1
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
  "set_code": "s11"
}
```

* * *

#### Get All Sets

Get all sets and their information.

##### HTTP Request
```bash
GET https://jpn-cards.com/v2/set/
```

URL Parameters:

None

* * * 

##### Example

HTTP Request:

```bash
GET https://jpn-cards.com/v2/set/
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
    "set_code": "10ms"
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
    "set_code": "11ms"
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
    "set_code": "s8a"
  },
  ...
]
```

* * *