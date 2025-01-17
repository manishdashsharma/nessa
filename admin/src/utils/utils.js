export function isTokenExpired(token) {
    if (!token) return true

    try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const currentTime = Math.floor(Date.now() / 1000)
        return payload.exp <= currentTime
    } catch (error) {
        console.error('Error decoding token:', error)
        return true
    }
}

export const EProductCategories = {
    AC_LIGHTING: 'AC Lighting',
    ELECTRONICS: 'Electronics',
    SOLAR: 'Solar',
    HYBRID_LIGHTS: 'Hybrid Lights',
    INDOOR_LIGHTING: 'Indoor Lighting'
}

export const CategoryToSubcategories = {
    'AC Lighting': [
        'Street Light',
        'Flood Light',
        'Highway Light',
        'Well Glass Light',
        'Fission LED Street Light',
        'Fission Flood Light',
        'AC High Mast'
    ],
    Electronics: ['Drivers', 'Solar Charge Controllers'],
    Solar: [
        'Semi Integrated Solar',
        'LED Street Light (Two in One)',
        'Integrated Solar',
        'LED Street Light (All in One)',
        'Solar LED Street Light',
        'Solar Pumps',
        'Solar Roof Top'
    ],
    'Hybrid Lights': ['Hybrid Solar Street Light'],
    'Indoor Lighting': ['Surface', 'Panel', 'Downlight', 'Tube Light']
}
