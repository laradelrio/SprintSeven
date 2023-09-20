export interface ClientSummary{
    clientName: string, 
    quoteName: string,
    quote: number,
    services: string[],
    pages?: number,
    languages?: number
}