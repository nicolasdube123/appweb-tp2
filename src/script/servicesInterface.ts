export default interface Services {
    getShips(): Promise<Array<any>>;
    getShip(): Promise<any>;
}