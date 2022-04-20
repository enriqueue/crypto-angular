export interface Coin {
    symbol: string, 
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    high_24h: number,
    low_24h: number,
    price_change_percentage: number,
    circulating_supply: number
}
