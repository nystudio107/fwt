const board:Charcuterie = [];

const meats: Meat[] = [
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

const veggies:Veggie[] = [
    {
        name: 'Broccoli',
    },
    {
        name: 'Cauliflower',
    },
];

function addToCharcuterieBoard(item: Meat) {
    board.push(item);
}

addToCharcuterieBoard(meats[0]);
addToCharcuterieBoard(meats[1]);
//addToCharcuterieBoard(veggies[0]);

export default board;
