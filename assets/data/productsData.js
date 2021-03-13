const vapes = [
    {
        id: 1,
        brandName: 'Puff Bar',
        brandPhoto: 'https://bit.ly/3qGivdc',
        items: [
            {
                id: 1,
                name: 'Puff Bar- - Mango',
                photo: 'https://bit.ly/3l8ydg5',
                price: 10,
                description1: 'PUFF BAR 1.3mL Disposable Pod Vape - 2% or 5% Salt Nicotine - Mango (1 Pack) DISCONTINUED - LIMITED SUPPLY',
                description2: 'An exciting new disposable pod vape by PUFFBAR is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.3mL pod tank built in. Enjoy up to 400 puffs (depending on length of inhales) of ripe, juicy mango flavor! Perfectly balanced with 2% (20mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer puffs that are more quickly absorbed by the body and less harsh on the throat!',
            },
            {
                id: 2,
                name: 'Puff Bar- - Blue Razz',
                photo: 'https://bit.ly/2Otqehw',
                price: 10,
                description1: 'PUFF BAR 1.3mL Disposable Pod Vape - 2% or 5% Salt Nicotine - Blue Razz (1 Pack) DISCONTINUED - LIMITED SUPPLY',
                description2: 'An exciting new disposable pod vape by PUFFBAR is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.3mL pod tank built in. Enjoy up to 400 puffs (depending on length of inhales) of delicious blueberry and raspberry flavors! Perfectly balanced with 2% (20mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer puffs that are more quickly absorbed by the body and less harsh on the throat!',
            },
        ],
    },
    {
        id: 2,
        brandName: 'Hyde',
        brandPhoto: 'https://bit.ly/3qFOgDd',
        items: [
            {
                id: 1,
                name: 'Pineapple Peach Mango',
                photo: 'https://bit.ly/2OKzKNl',
                price: 10,
                description1: 'Hyde Color Edition 1.6mL Disposable Pod Vape - 2.5% or 5% Salt Nicotine - Pineapple Peach Mango (1 Pack)',
                description2: 'The exciting new disposable pod vape by Hyde is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.6mL pod tank built in. Enjoy up to 400 puffs per device (*depending on length of inhales) of a juicy concoction of sweet peaches, tropical pineapple and mouth-watering mango flavor! Perfectly balanced with 2.5% (25mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer, more flavorful puffs.',
            },
            {
                id: 2,
                name: 'Hyde - Lemon Crumble',
                photo: 'https://bit.ly/2Otqehw',
                price: 10,
                description1: 'Hyde Color Edition 1.6mL Disposable Pod Vape - 2.5% or 5% Salt Nicotine - Lemon Crumble (1 Pack)',
                description2: 'The exciting new disposable pod vape by Hyde is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.6mL pod tank built in. Enjoy up to 400 puffs per device (*depending on length of inhales) of a delicious lemon crumble-cake flavor! Perfectly balanced with 2.5% (25mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer, more flavorful puffs.',
            },
        ],
    }
];

const beers = [
    {
        id: 1,
        brandName: 'Budweiser',
        brandPhoto: 'https://bit.ly/3coMaCC',
        items: [
            {
                id: 1,
                name: '12 Pack Budweiser 12oz',
                photo: 'https://bit.ly/3coMaCC',
                price: 10,
                description1: 'Hyde Color Edition 1.6mL Disposable Pod Vape - 2.5% or 5% Salt Nicotine - Pineapple Peach Mango (1 Pack)',
                description2: 'The exciting new disposable pod vape by Hyde is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.6mL pod tank built in. Enjoy up to 400 puffs per device (*depending on length of inhales) of a juicy concoction of sweet peaches, tropical pineapple and mouth-watering mango flavor! Perfectly balanced with 2.5% (25mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer, more flavorful puffs.',
            },
        ],
    }
];

const wines = [
    {
        id: 1,
        brandName: 'Rombauer',
        brandPhoto: 'https://bit.ly/3ewNqpL',
        items: [
            {
                id: 1,
                name: 'Rombauer Chardonnay 2018',
                photo: 'https://bit.ly/3coMaCC',
                price: 30,
                description1: '',
                description2: 'Pale yellow with a green tinge to the hue. Aromas of yellow peach, mango with a slight citrus note intertwine seamlessly with vanilla and spice. The palate is rich and round, with the mango and vanilla fighting for the lime light, while the cream texture, vanilla and slight butter combine seamlessly. The balanced acidity closes out the finish bringing the multiple components into balance.',
            },
        ],
    }
];

const tobacco = [
    {
        id: 1,
        brandName: 'cigarettes',
        photo: 'https://bit.ly/3cjV58k',
        items: [
            {
                id: 1,
                name: 'Marlboro Lights',
                photo: 'https://bit.ly/3cjV58k',
                price: 10,
                description1: 'Marlboro Light 100s Gold Cigarettes 100s Tall',
                description2: '',
            },
        ],
    },
    {
        id: 1,
        brandName: 'dip',
        photo: 'https://bit.ly/3cmomPS',
        items: [
            {
                id: 1,
                name: 'Copenhagen Wintergreen - Long Cut',
                photo: 'https://bit.ly/38y3uE8',
                price: 10,
                description1: '',
                description2: '',
            },
        ],
    }
];

const productsData = [
    {
        id: 1,
        name: 'Vapes',
        category: [2],
        photo: 'https://bit.ly/3qGivdc',
        products: vapes,
    },
    {
        id: 2,
        name: 'Beer',
        category: [3],
        photo: 'https://bit.ly/30Bu5vJ',
        products: beers,
    },
    {
        id: 3,
        name: 'Wine',
        category: [4],
        photo: 'https://bit.ly/3crx4fG',
        products: wines,
    },    {
        id: 4,
        name: 'Tobacco',
        category: [5],
        photo: 'https://bit.ly/38yho9f',
        products: tobacco,
    },
];

module.exports = productsData;