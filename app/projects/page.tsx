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
            image: "/apartment2.jpg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
        {
            id: 3,
            title: "Skyline Heights",
            location: "City Center",
            tag: "New Launch",
            image: "/apartment3.jpg",
            description: "A New Era of Design-Led Waterfront Living — Coming Soon to Dubai Islands SIORA is the upco...",
        },
        {
            id: 4,
            title: "Serene Garden 2BHK",
            location: "Discovery Gardens",
            tag: "Off Plan",
            image: "/apartment4.jpg",
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
            image: "/apartment5.jpg",
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
