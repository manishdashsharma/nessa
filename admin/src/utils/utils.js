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
    INDOOR_LIGHTING: 'Indoor Lighting',
    SMART_LIGHTING_SOLUTION:'Smart Lighting Solutions',
}

export const CategoryToSubcategories = {
    'AC Lighting': ['Street Light', 'Flood Light', 'Highway Light', 'Well Glass Light', 'AC High Mast', 'RGB Light', 'Traffic Blinker Light'],
    'Electronics': ['DC Drivers', 'Charge Controllers', 'Motion Sensor', 'AC Driver', 'SPD', 'DC Driver & Combo'],
    'Indoor Lighting': ['Surface Light', 'Spike Light', 'Tube Light', 'Down Light', 'Panel Light'],
    'Solar': [
        'Semi Integrated Street Light (Two in One) ',
        'Integrated Street Light (All In one) ',
        'Solar Street Light (Full System) ',
        'Solar Pumps',
        'Solar Roof Top',
        'Solar High Mast'
    ],
    'Hybrid Lights': ['Hybrid Semi Intigrated Solar Street Light Light', 'Hybrid Integrated Solar Street Light'],

    'Smart Lighting Solutions': ['AC Smart Street Light', 'Solar Smart Street Light ']

}