import PropertyCard from '@/components/PropertyCard';
import React from 'react'

const page = () => {
    const properties = [
        {
            id: 1,
            title: "Serene Garden 2BHK",
            location: "Discovery Gardens",
            tag: "Off Plan",
            image: "/property.jpg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
        {
            id: 2,
            title: "Palm Residency 3BHK",
            location: "Downtown",
            tag: "Ready Soon",
            image: "https://www.shutterstock.com/image-photo/appartment-building-highrise-residential-huerth-260nw-1500885059.jpg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
        {
            id: 3,
            title: "Skyline Heights",
            location: "City Center",
            tag: "New Launch",
            image: "https://static.vecteezy.com/system/resources/previews/013/226/569/large_2x/new-modern-complex-of-residential-appartment-in-europe-photo.jpg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
        {
            id: 4,
            title: "Serene Garden 2BHK",
            location: "Discovery Gardens",
            tag: "Off Plan",
            image: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed-686x400.jpg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
        {
            id: 5,
            title: "Palm Residency 3BHK",
            location: "Delhi",
            tag: "Ready Soon",
            image: "/property.jpg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
        {
            id: 6,
            title: "Skyline Heights",
            location: "City Center",
            tag: "New Launch",
            image: "https://is1-2.housingcdn.com/4f2250e8/64f9c7b270f415688c5b2606b6ae321b/v0/fs/ambica_uttam_appartment-maninagar_ahmedabad-ahmedabad-ambica_builders_ahmedabad.jpeg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
    ];
    return (
        <div className=" mb-20">
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-5xl font-semibold text-center mt-4'>Our Projects</h1>
                <p className="max-w-2xl text-center mt-10">Discover premium off-plan properties in Dubai, from luxury waterfront residences to modern high-rise apartments. Explore exclusive launches by top developers in prime locations, offering exceptional lifestyle and investment opportunities.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-self-center gap-5 mt-10 max-w-5xl'>
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    )
}

export default page
