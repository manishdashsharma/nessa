import AirportThumbnail from '../../assets/images/solutionsImages/hero/Aeroplane.jpg'
import HazardousThumbnail from '../../assets/images/solutionsImages/hero/Hazardous Areas.jpg'
import HighwaysThumbnail from '../../assets/images/solutionsImages/hero/Highway Light.jpg'
import MinesThumbnail from '../../assets/images/solutionsImages/hero/Mines.jpg'
import PetrolPumpThumbnail from '../../assets/images/solutionsImages/hero/Petrol Pump.jpg'
import PortsThumbnail from '../../assets/images/solutionsImages/hero/Port Light.jpg'
import RefineryThumbnail from '../../assets/images/solutionsImages/hero/Refinery Light.jpg'
import RuralThumbnail from '../../assets/images/solutionsImages/hero/Rural Light.jpg'
import SolarThumbnail from '../../assets/images/solutionsImages/hero/Solar Parks.jpg'
import StadiumThumbnail from '../../assets/images/solutionsImages/hero/Stadium Light.jpg'
import ThermalThumbnail from '../../assets/images/solutionsImages/hero/Thermal.jpg'
import TunnelsThumbnail from '../../assets/images/solutionsImages/hero/Tunnel Light.jpg'

export const SOLUTION_THUMBNAILS = {
    Airports: AirportThumbnail,
    'Hazardous Areas': HazardousThumbnail,
    Highways: HighwaysThumbnail,
    Mines: MinesThumbnail,
    'Petrol Pump': PetrolPumpThumbnail,
    'Ports & Logistic Parks': PortsThumbnail,
    Refinery: RefineryThumbnail,
    'Rural, Hilly & Forest Areas': RuralThumbnail,
    'Solar Parks': SolarThumbnail,
    Stadium: StadiumThumbnail,
    'Thermal Power Plants': ThermalThumbnail,
    Tunnels: TunnelsThumbnail
}

export const SolutionHero = ({ solution }) => {
    const thumbnailSrc = SOLUTION_THUMBNAILS[solution.subcategories] || AirportThumbnail 

    return (
        <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center justify-start">
            <img
                className="w-full h-full object-cover absolute"
                src={thumbnailSrc}
                alt={`${solution.title} hero`}
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2] drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                {solution.title}
            </h1>
        </div>
    )
}
