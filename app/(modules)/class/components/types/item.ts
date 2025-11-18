export type Item = {
    id: string
    name: string
    shift: 'Morning' | 'Afternoon' | 'Evening'
    schoolYear: number
    image?: string
}