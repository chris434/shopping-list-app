export function formatCurrency(number:number) {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(number)
}