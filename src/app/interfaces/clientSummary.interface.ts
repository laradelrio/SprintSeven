export interface ClientSummary{
    clientName: string, 
    quoteName: string,
    quote: number,
    date: Date,
    services: string[],
    pages?: number,
    languages?: number
}