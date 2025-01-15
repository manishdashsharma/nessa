import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import solar from '../../../assets/images/homepageimages/solar.png'
import street from '../../../assets/images/homepageimages/street.png'
import whitepaper from '../../../assets/images/homepageimages/whitepaper.png'
import { Link } from 'react-router-dom'

const slideData = [
    {
        image: solar,
        category: 'Blog',
        title: 'Solar Lighting in Streets',
        link: 'Read More'
    },
    {
        image: street,
        category: 'Case Study',
        title: 'How our Street Light is 20% efficient than others',
        link: 'Read More'
    },
    {
        image: whitepaper,
        category: 'White Paper',
        title: 'Explore Nessa Legacy since 16 years',
        link: 'Read More'
    },
    {
        image: solar,
        category: 'Blog',
        title: 'Innovative Solar Solutions',
        link: 'Read More'
    },
    {
        image: street,
        category: 'Case Study',
        title: 'Efficiency in Modern Lighting',
        link: 'Read More'
    },
    {
        image: whitepaper,
        category: 'White Paper',
        title: 'Sustainable Energy Practices',
        link: 'Read More'
    }
]

export default function InsitesSwiper() {
    const [slidepre, setslidepre] = useState(window.innerWidth < 500 ? 1 : 3)

    useEffect(() => {
        const handleResize = () => {
            setslidepre(window.innerWidth < 600 ? 1 : 3)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Swiper
            slidesPerView={slidepre}
            spaceBetween={30}
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            navigation={{
                clickable: true
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
                enabled: true // Changed to true since we're managing it manually
            }}
            onSwiper={(swiper) => {
                if (!swiper) return

                // Create the intersection observer
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (!swiper.autoplay) return

                            if (entry.isIntersecting) {
                                swiper.autoplay.start()
                            } else {
                                swiper.autoplay.stop()
                            }
                        })
                    },
                    { threshold: 0.5 }
                )

                // Observe the swiper element
                if (swiper.el) {
                    observer.observe(swiper.el)
                }

                // Add mouse enter and leave event listeners
                const handleMouseEnter = () => {
                    if (swiper.autoplay) {
                        swiper.autoplay.stop()
                    }
                }

                const handleMouseLeave = () => {
                    if (swiper.autoplay) {
                        swiper.autoplay.start()
                    }
                }

                swiper.el.addEventListener('mouseenter', handleMouseEnter)
                swiper.el.addEventListener('mouseleave', handleMouseLeave)

                // Cleanup function
                return () => {
                    if (swiper.el) {
                        observer.unobserve(swiper.el)
                        swiper.el.removeEventListener('mouseenter', handleMouseEnter)
                        swiper.el.removeEventListener('mouseleave', handleMouseLeave)
                    }
                }
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
            style={{ paddingLeft: '50px', paddingRight: '50px', height: '100%' }}>
            {slideData.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    className="mb-[50px]">
                    <div className="slide-content flex flex-col gap-4">
                        <img
                            className="rounded-xl"
                            src={slide.image}
                            alt={slide.title}
                        />
                        <div className="slide-text flex flex-col gap-2">
                            <h4>{slide.category}</h4>
                            <h3 className="font-bold">{slide.title}</h3>
                            <Link href="#">{slide.link}</Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
