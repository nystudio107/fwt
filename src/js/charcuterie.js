let charcuterie = [];

const meats = [
    {
        name: 'Salami',
        calories: 100,
    },
    {
        name: 'Pepperoni',
        calories: 200,
    },
];

const veggies = [
    {
        name: 'Broccoli',
        calories: 100,
    },
    {
        name: 'Cauliflower',
        calories: 200,
    },
];

function addToCharcuterieBoard(item) {
    charcuterie.push(item);
}

addToCharcuterieBoard(meats[0]);
addToCharcuterieBoard(meats[1]);
addToCharcuterieBoard(veggies[0]);

export default charcuterie;
