import React from 'react'
import adanilogo from '../../../assets/images/homepageimages/marquelogos/adanilogo.png'
import essarlogo from '../../../assets/images/homepageimages/marquelogos/essarlogo.png'
import ltlogo from '../../../assets/images/homepageimages/marquelogos/l&tlogo.png'
import jindallogo from '../../../assets/images/homepageimages/marquelogos/jindallogo.png'
import torrentlogo from '../../../assets/images/homepageimages/marquelogos/torrentlogo.png'
import nirmalogo from '../../../assets/images/homepageimages/marquelogos/nirmalogo.png'
import adityabirlalogo from '../../../assets/images/homepageimages/marquelogos/adityabirlalogo.png'
import bidcologo from '../../../assets/images/homepageimages/marquelogos/bidcologo.png'
import dpworldlogo from '../../../assets/images/homepageimages/marquelogos/dpworldlogo.png'
import eesllogo from '../../../assets/images/homepageimages/marquelogos/eesllogo.png'
import hdfclogo from '../../../assets/images/homepageimages/marquelogos/hdfclogo.png'
import iimlogo from '../../../assets/images/homepageimages/marquelogos/iimlogo.png'
import indianoillogo from '../../../assets/images/homepageimages/marquelogos/indianoillogo.png'
import nationallogo from '../../../assets/images/homepageimages/marquelogos/nationallogo.png'
import ongclogo from '../../../assets/images/homepageimages/marquelogos/ongclogo.png'
import suzlonlogo from '../../../assets/images/homepageimages/marquelogos/suzlonlogo.png'


const Marque = () => {


  return (
    <div
      id='mq' className="w-fit h-[100px]    bg-[#005ab322]  max-sm:h-[100px] flex items-center justify-center overflow-x-auto overflow-y-hidden "
    >
        <style>
            {`
                .marqutag1{
                    animation-name: marqueanimation;
                    animation-duration: 40s;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                
                }
                #mq::-webkit-scrollbar{
                    display: none;
                }

                @keyframes marqueanimation {
                    0%{
                        transform: translate(0, 0);
                    }
                    100%{
                        transform: translatex(-3080px);
                    }
                    
                }
            `}
        </style>
      <div id="marqutag1" className="marqutag1 w-[3080px] px-[20px] flex justify-around gap-10  ">
        <img className="h-[100px] w-[150px] object-contain " src={adanilogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={adityabirlalogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={essarlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={ltlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={nationallogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={iimlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={nirmalogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={indianoillogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={suzlonlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={hdfclogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={eesllogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={dpworldlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={bidcologo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={torrentlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={jindallogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={ongclogo} alt="" />
 
      </div>
      <div id="marqutag1" className="marqutag1 w-[3080px] px-[20px] flex justify-around gap-10  ">
        <img className="h-[100px] w-[150px] object-contain " src={adanilogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={adityabirlalogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={essarlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={ltlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={nationallogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={iimlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={nirmalogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={indianoillogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={suzlonlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={hdfclogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={eesllogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={dpworldlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={bidcologo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={torrentlogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={jindallogo} alt="" />
        <img className="h-[100px] w-[150px] object-contain " src={ongclogo} alt="" />
      </div>
     
     
    </div>
  );
}

export default Marque