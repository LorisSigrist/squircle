type GridState = {
    first: GridState;
    second: GridState;
    splitPercentage: number,
    direction: "row" | "column" | "row-reverse" | "column-reverse"
} | string;