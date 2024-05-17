# Japanese Pokemon API Version 2 Objects

## Card Object

* * *

### name _string_

The name of the card.
* * *

### id _integer_

The internal identification number that the card is given. Used to query for this single card.

* * *

### setData _hash_

* * *

### types _list<string>_

The energy type or types the card is. Almost always will be a single value.

* * *

### hp _integer_

The amount of HP the card has. If it does not have hp, then the value will be `-1`.

* * *

### evolvesFrom _string_

If the card evolves from another card, this field will denote the name of the pre-evolution.

* * *

### effect _hash_

Describes the card's effect. Mainly for Trainers and Special Energies.

TODO: FIELDS

* * *

### attacks _hash_

Describes all attacks the card has. Includes energy cost, attack name, attack damage, and any description or further effects.

TODO: FIELDS

* * *

### rules _list<string>_

Describes rules the card is bound to. Mainly for cards with a Rule Box and certain Trainers.

* * *

### weaknesses _hash_

The type or types of energy the card is weak to. Includes the damage modifier that the card receives when being attacked by a type it is weak to.

* * *

### resistances _hash_

The type or types of energy the card is resistant to. Includes the damage modifier that the card receives when being attacked by a type it is resistant to.

* * *

### retreatCost _list<string>_

List of the energies required to retreat.

* * *

### convertedRetreatCost _integer_

The total number of energies needed to retreat.

* * *

### supertype _string_

The supertype the card is. Only possibilites are `Pokemon`, `Trainer`, or `Energy`.

* * *

### subtypes _list<string>_

The subsets that the card falls into. For example, `Single Strike Pokemon`, `Pokemon VMAX`, etc.

* * *

### rarity _string_

The rarity of the card.

* * *

### cardLegalities _hash_

The formats that the card is allowed to compete in. 

TODO: FIELDS

* * *

### artist _string_

The card art's artist.

* * *

### imageUrl _string_

The url pointing to the card's image. If there is no card image, then this will instead point to `https://assets.tcgcollector.com/build/images/default-card-image.789f6232.png`.

* * *

### cardUrl _string_

The URL which leads to the original card URL data.

* * *

### sequenceNumber _integer_

The sequential number of the card (applicable to Secret Rares).

* * *

### printedNumber _string_

The number printed on the card, will be the same as `sequenceNumber` almost always. Is relevant for Promotional cards such as `SWSH001`

* * *

### uuid _integer_

A stable id for each card. Output is an eight digit integer which is unique for each card. While the cards' `id` may change over time, the `uuid` should always remain stable and constant. 

* * *

### prices _dict_

A dictionary formatted as indicated below

```json
{
    "priceAmount": value,
    "priceCurrency": "value",
    "dateUpdated": "value",
    "listingUrl": "value",
    "vendor": "value",
    "variant": "value",
    "condition": "value"
}
```

#### prices.priceAmount _integer_
The observed price in the `priceCurrency` denomination. 

#### prices.priceCurrency _string_
The observed price's currency. Currently can only be `JPY` (Japanese Yen) or `USD Cents` (U.S. Dollar Cents). 

#### prices.dateUpdated _string_
The date at which the card price was most recently observed. An old date indicates the price hasn't changed. 

#### prices.listingUrl _string_
The URL that was observed. 

#### prices.vendor _string_
The vendor that the price was obtained from.

#### prices.variant _string_
An observed vendor-defined variant. This shouldn't be used to track variants in the database, but as a sanity check for the end user developer

#### prices.condition _string_
An observed vendor-defined condition. 

* * *


## Set Object

* * *

### name _string_

The name of the set.

* * *

### id _integer_

The internal identification number that the set is given. Used to query for information about this single set or for all cards in this single set.

* * *

### source_url _string_

The URL to a page which has more information about the set.

* * *

### image_url _string_

A URL to the official set's image.

* * *

### language _string_

The language that the cards in the set are printed in.

* * *

### year _string_

The year the set was released.

* * *

### date _string_

The exact date the set was released. 

NOTE: CURRENTLY NOT SUPPORTED. WILL BE ADDED IN FUTURE UPDATES

* * *

### card_count _integer_

The total number of cards in the set.

* * *

### printed_count _integer_

The number of cards in the set that is printed on the card. This differs from the set's `card_count` in sets with Secret Rare cards.

* * *

### set_code _string_

The shorthand code for the set.

* * *

### uuid _integer_

A stable id for each set. Output is an eight digit integer which is unique for each set. While the set' `id` may change over time, the `uuid` should always remain stable and constant. 

* * *