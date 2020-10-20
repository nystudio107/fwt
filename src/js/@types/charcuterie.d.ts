interface Meat {
    name: string,
    calories: number,
    rating?: number,
}

interface Veggie {
    name: string,
}

type Charcuterie = Meat[];

