export const EApplicationEnvironment = Object.freeze({
    PRODUCTION: 'production',
    DEVELOPMENT: 'development'
});

export const ExternalApiUrls = Object.freeze({
    LOCATION_DETAILS: 'https://freeipapi.com/api/json/'
});

export const EProductCategories = Object.freeze({
    AC_LIGHTING: 'AC Lighting',
    ELECTRONICS: 'Electronics',
    SOLAR: 'Solar',
    HYBRID_LIGHTS: 'Hybrid Lights',
    INDOOR_LIGHTING: 'Indoor Lighting',
    SOLUTIONS: 'Solutions',
});

export const EACLightingSubCategories = Object.freeze({
    STREET_LIGHT: 'Street Light',
    FLOOD_LIGHT: 'Flood Light',
    HIGHWAY_LIGHT: 'Highway Light',
    WELL_GLASS_LIGHT: 'Well Glass Light',
    FISSION_LED_STREET_LIGHT: 'Fission LED Street Light',
    FISSION_FLOOD_LIGHT: 'Fission Flood Light',
    AC_HIGH_MAST: 'AC High Mast',
});

export const EElectronicsSubCategories = Object.freeze({
    DRIVERS: 'Drivers',
    SOLAR_CHARGE_CONTROLLERS: 'Solar Charge Controllers',
});

export const ESolarSubCategories = Object.freeze({
    SEMI_INTEGRATED_SOLAR: 'Semi Integrated Solar',
    LED_STREET_LIGHT_TWO_IN_ONE: 'LED Street Light (Two in One)',
    INTEGRATED_SOLAR: 'Integrated Solar',
    LED_STREET_LIGHT_ALL_IN_ONE: 'LED Street Light (All in One)',
    SOLAR_LED_STREET_LIGHT: 'Solar LED Street Light',
    SOLAR_PUMPS: 'Solar Pumps',
    SOLAR_ROOF_TOP: 'Solar Roof Top',
});

export const EHybridLightsSubCategories = Object.freeze({
    HYBRID_SOLAR_STREET_LIGHT: 'Hybrid Solar Street Light',
});

export const EIndoorLightingSubCategories = Object.freeze({
    SURFACE: 'Surface',
    PANEL: 'Panel',
    DOWNLIGHT: 'Downlight',
    TUBE_LIGHT: 'Tube Light',
});

export const ESolutionsSubCategories = Object.freeze({
    AIRPORTS: 'Airports',
    MINES: 'Mines',
    STADIUM: 'Stadium',
    PETROL_PUMP: 'Petrol Pump',
    REFINERY: 'Refinery',
    HIGHWAYS: 'Highways',
    TUNNELS: 'Tunnels',
    RURAL_HILLY_FOREST_AREAS: 'Rural, Hilly & Forest Areas',
    PORTS_LOGISTIC_PARKS: 'Ports & Logistic Parks',
    HAZARDOUS_AREAS: 'Hazardous Areas',
    THERMAL_POWER_PLANTS: 'Thermal Power Plants',
    SOLAR_PARKS: 'Solar Parks',
});

export const EBestSuitedFor = Object.freeze({
    OFFICES: 'Offices',
    BANK: 'Bank',
    INDUSTRIES: 'Industries',
})

export const ESubject = Object.freeze({
    GENERAL_INQUIRY: 'General Inquiry',
    INTERNATION_INQUIRY: 'International Inquiry',
    DOMESTIC_INQUIRY: 'Domestic Inquiry',
    SERVICE_INQUIRY: 'Service Inquiry',
    CSR_INQUIRY: 'CSR Inquiry',
    CAREER_INQUIRY: 'Career Inquiry'
})

export const allowedUsers = Object.freeze([
    { email: 'info@quicker.in', password: 'password123' },
    { email: 'contact@quicker.in', password: 'securePass456' },
    { email: 'project@quicker.in', password: 'admin789' },
    { email: 'sales@quicker.in', password: 'sales@2023' },
]);