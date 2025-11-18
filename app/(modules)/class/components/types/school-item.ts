export type SchoolItem = {
    id: string
    name: string
    shift: 'Morning' | 'Afternoon' | 'Evening'
    schoolYear: number
    image?: string
}