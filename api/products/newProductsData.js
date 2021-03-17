const vapes = [
    {
        id: 1,
        name: 'Puff Bar- - Mango',
        brandName: 'Puff Bar',
        photo: 'https://bit.ly/3l8ydg5',
        price: 10,
        description1: 'PUFF BAR 1.3mL Disposable Pod Vape - 2% or 5% Salt Nicotine - Mango (1 Pack) DISCONTINUED - LIMITED SUPPLY',
        description2: 'An exciting new disposable pod vape by PUFFBAR is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.3mL pod tank built in. Enjoy up to 400 puffs (depending on length of inhales) of ripe, juicy mango flavor! Perfectly balanced with 2% (20mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer puffs that are more quickly absorbed by the body and less harsh on the throat!',
    },
    {
        id: 2,
        name: 'Puff Bar- - Blue Razz',
        brandName: 'Puff Bar',
        photo: 'https://bit.ly/2Otqehw',
        price: 10,
        description1: 'PUFF BAR 1.3mL Disposable Pod Vape - 2% or 5% Salt Nicotine - Blue Razz (1 Pack) DISCONTINUED - LIMITED SUPPLY',
        description2: 'An exciting new disposable pod vape by PUFFBAR is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.3mL pod tank built in. Enjoy up to 400 puffs (depending on length of inhales) of delicious blueberry and raspberry flavors! Perfectly balanced with 2% (20mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer puffs that are more quickly absorbed by the body and less harsh on the throat!',
    },
];

const beers = [
    {
        id: 1,
        name: 'Budweiser 12pk 12oz Can 5.0% ABV',
        brandName: 'Budweiser',
        photo: 'https://bit.ly/38Sb6Bz',
        price: 10.99,
        description1: 'Hyde Color Edition 1.6mL Disposable Pod Vape - 2.5% or 5% Salt Nicotine - Pineapple Peach Mango (1 Pack)',
        description2: 'The exciting new disposable pod vape by Hyde is here! Featuring a sealed, single piece unit (no assembly required) with a pre-filled 1.6mL pod tank built in. Enjoy up to 400 puffs per device (*depending on length of inhales) of a juicy concoction of sweet peaches, tropical pineapple and mouth-watering mango flavor! Perfectly balanced with 2.5% (25mg) or 5% (50mg) salt nicotine, you can curb those cravings with fewer, more flavorful puffs.',
    },
];

const wines = [
    {
        id: 1,
        name: 'Rombauer Chardonnay 2018',
        brandName: 'Rombauer',
        photo: 'https://bit.ly/3coMaCC',
        price: 30,
        description1: '',
        description2: 'Pale yellow with a green tinge to the hue. Aromas of yellow peach, mango with a slight citrus note intertwine seamlessly with vanilla and spice. The palate is rich and round, with the mango and vanilla fighting for the lime light, while the cream texture, vanilla and slight butter combine seamlessly. The balanced acidity closes out the finish bringing the multiple components into balance.',
    },
];

const cigarettes = [
    {
        id: 1,
        name: 'Marlboro Lights',
        brandName: 'Marlboro',
        photo: 'https://bit.ly/3cjV58k',
        price: 9.79,
        description1: 'Marlboro Light 100s Gold Cigarettes 100s Tall',
        description2: '',
    },
];

const chewingTobacco = [
    {
        id: 1,
        name: 'Copenhagen Wintergreen Long Cut Chewing Tobacco',
        photo: 'https://bit.ly/38y3uE8',
        price: 4.79,
        description1: '',
        description2: '',
    },
    {
        id: 2,
        name: 'Copenhagen Mint Long Cut Chewing Tobacco ',
        photo: 'https://bit.ly/3bSnhAb',
        price: 4.79,
        description1: '',
        description2: '',
    },
];

const tobacco = [];
cigarettes.map(item => tobacco.push(item))
chewingTobacco.map(item => tobacco.push(item))

const allItems = [];
vapes.map(item => allItems.push(item))
beers.map(item => allItems.push(item))
wines.map(item => allItems.push(item))
tobacco.map(item => allItems.push(item))


const newProductsData = [
    {
        id: 1,
        name: 'All',
        category: [1],
        photo: 'https://bit.ly/3qGivdc',
        icon: 'https://bit.ly/3qHjARO',
        products: allItems,
    },
    {
        id: 2,
        name: 'Vapes',
        category: [2],
        photo: 'https://bit.ly/3qGivdc',
        icon: 'https://bit.ly/3cu5Jtn',
        products: vapes,
    },
    {
        id: 3,
        name: 'Beer',
        category: [3],
        photo: 'https://bit.ly/30Bu5vJ',
        icon: 'https://bit.ly/3li4CRu',
        products: beers,
    },
    {
        id: 4,
        name: 'Wine',
        category: [4],
        photo: 'https://bit.ly/3crx4fG',
        icon: 'https://bit.ly/30EZVrc',
        products: wines,
    },
    {
        id: 5,
        name: 'Tobacco',
        category: [5],
        photo: 'https://bit.ly/38yho9f',
        icon: 'https://bit.ly/3qH1pMm',
        products: tobacco,
    }
];

module.exports = newProductsData;