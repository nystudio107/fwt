const board = [];

const meats = [
    {
        name: 'Salami',
        calories: 100,
        rating: 9,
    },
    {
        name: 'Pepperoni',
        calories: 200,
    },
];

const veggies = [
    {
        name: 'Broccoli',
    },
    {
        name: 'Cauliflower',
    },
];

function addToCharcuterieBoard(item) {
    board.push(item);
}

addToCharcuterieBoard(meats[0]);
addToCharcuterieBoard(meats[1]);
//addToCharcuterieBoard(veggies[0]);

export default board;
