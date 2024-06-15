export enum CoffeeTypes {
    TRADICIONAL = "TRADICIONAL",
    GELADO = "GELADO",
    COM_LEITE = "COM LEITE",
    ALCOOLICO = "ALCOÓLICO",
    ESPECIAL = "ESPECIAL"
}

export interface ICoffee {
    id: number;
    title: string;
    type: CoffeeTypes[];
    description: string;
    price: number;
    image: string;
}
