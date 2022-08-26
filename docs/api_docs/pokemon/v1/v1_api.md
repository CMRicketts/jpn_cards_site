## Japanese Pokemon TCG Version 2 API Queries

* * *

### Card Queries

#### Get A Card

Get a single card's information based on its unique identifier.

* * * 

##### HTTP Request
```bash
GET https://jpn-cards.com/card/id=<id>
```

URL Parameters:

| Parameter | Description |
|---|---|
| id | integer id of the card |

* * * 

##### Example

HTTP Request:

```bash
GET https://jpn-cards.com/card/id=267
```

Response:

```javascript
[
  {
    "id": 267,
    "setId": 4,
    "name": "Eelektross",
    "sequenceNumber": 34,
    "printedNumber": "34",
    "imageUrl": "https://content.tcgcollector.com/content/images/c9/79/fd/c979fde3902d4f4bf01de14245acd37f8bf2949fba61265f3950f0b7a22a6988.jpg",
    "hp": 160,
    "evolvesFrom": "Eelektrik",
    "effect": "None",
    "attacks": "Lightning/Upper Shock/40\r\nIf this Pokémon evolved from Eelektrik during this turn, your opponent`s Active Pokémon is now Paralyzed.\r\nLightning-Colorless-Colorless/Wild Charge/160\r\nThis Pokémon also does 30 damage to itself.",
    "rules": "None",
    "weakness": "Fighting",
    "resistance": "None",
    "retreatCost": "Colorless-Colorless-Colorless",
    "cardType": "Pokémon",
    "rarity": "U",
    "cardFormat": "None",
    "illustrator": "OKACHEKE",
    "cardUrl": "https://www.tcgcollector.com/cards/34489/eelektross-eevee-heroes-034-069",
    "setName": "Eevee Heroes",
    "type": "Lightning"
  }
]
```

#### Get Multiple Cards

Get one or more cards based on more broad metadata.

* * * 

##### HTTP Request
```bash
GET https://jpn-cards.com/card/
```

URL Parameters:

All URL parameters are optional, but at least one must be included.

| Parameter | Description |
|---|---|
| id | integer id of the card |
| name | string name of the card |
| set_id | integer id of the set the card is in | 
| illustrator | string name of the illustrator/artist |
| type | the pokemon's type |
| p_no| string printed number | 

You can also combine multiple URL Parameters together, like

```bash
GET https://www.jpn-cards.com/card/illustrator=Shigenori%20Negishi&name=Dusknoir
```

For values with spaces or other special characters in them, you're able to just pass it in normally or URL-encoded. For example, the following queries will return the same data.

```bash
GET https://www.jpn-cards.com/card/name=arceus v
```

```bash
GET https://www.jpn-cards.com/card/name=arceus%20v
```

* * * 

##### Example

HTTP Request:

```bash
GET https://www.jpn-cards.com/card/name=Clefable&illustrator=Sekio&p_no=20&id=17724
```

Response:

```javascript
[
  {
    "id": 17724,
    "setId": 270,
    "name": "Clefable",
    "sequenceNumber": 20,
    "printedNumber": "20",
    "imageUrl": "https://content.tcgcollector.com/content/images/cf/38/e0/cf38e0dd52341a43edfd90b2d46e8294d5d8b758d4abb8fa9d1724809d17a273.jpg",
    "hp": -1,
    "evolvesFrom": "Clefairy",
    "effect": "None",
    "attacks": "Psychic-Colorless-Colorless/Moon Impact/90",
    "rules": "None",
    "weakness": "Metal",
    "resistance": "None",
    "retreatCost": "Colorless-Colorless",
    "cardType": "Pokémon",
    "rarity": "Uncommon",
    "cardFormat": "None",
    "illustrator": "Sekio",
    "cardUrl": "https://www.tcgcollector.com/cards/37907",
    "setName": "Dark Phantasma",
    "type": "Psychic"
  }
]
```

* * *

### Set Queries

#### Get A Set

Get a single set's information based on its unique identifier.

##### HTTP Request
```bash
GET https://jpn-cards.com/set/<id>
```

URL Parameters:

| Parameter | Description |
|---|---|
| id | integer id of the set |

* * * 

##### Example

HTTP Request:

```bash
GET https://jpn-cards.com/set/1
```

Response:

```javascript
{
  "id": 1,
  "name": "Blue Sky Stream",
  "year": "None",
  "total": 90,
  "printedTotal": 67,
  "language": "JPN",
  "setUrl": "https://www.tcgcollector.com/cards/jp/blue-sky-stream",
  "shorthand": "s7r",
  "image": "https://content.tcgcollector.com/content/images/a3/cc/27/a3cc27411c1f1b89728a129ccc1ffcbc2a698855b5966375ce61a0298c77df48.png"
}
```

* * *

#### Get All Sets

Get all sets and their information.

##### HTTP Request
```bash
GET https://jpn-cards.com/set/
```

URL Parameters:

None

* * * 

##### Example

HTTP Request:

```bash
GET https://jpn-cards.com/set/
```

Response:

```javascript
[
  {
    "id": 257,
    "name": "10th Movie Commemoration Set",
    "year": "None",
    "total": 11,
    "printedTotal": 0,
    "language": "JPN",
    "setUrl": "https://www.tcgcollector.com/cards/jp/10th-movie-commemoration-set",
    "shorthand": "10ms",
    "image": "https://assets.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png"
  },
  {
    "id": 256,
    "name": "11th Movie Commemoration Set",
    "year": "None",
    "total": 9,
    "printedTotal": 9,
    "language": "JPN",
    "setUrl": "https://www.tcgcollector.com/cards/jp/11th-movie-commemoration-set",
    "shorthand": "11ms",
    "image": "https://assets.tcgcollector.com/build/images/default-expansion-logo.8b4f0ae4.png"
  },
  {
    "id": 264,
    "name": "25th Anniversary Collection",
    "year": "2021",
    "total": 38,
    "printedTotal": 28,
    "language": "JPN",
    "setUrl": "https://www.tcgcollector.com/cards/jp/25th-anniversary-collection",
    "shorthand": "s8a",
    "image": "https://content.tcgcollector.com/content/images/6c/db/e6/6cdbe627099c229a2f1bcd205728d318377b218e7e92c2e54fbc3266c4048525.png"
  },
  ...
]
```

* * *