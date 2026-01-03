import { LocateFixed, LocateIcon, MapPin } from "lucide-react"
import Image from "next/image";


type Property = {
    title: string;
    location: string;
    image: string;
    description: string;
    tag: string;
};

type Props = {
    property: Property;
};

const PropertyCard = ({ property }: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm group" >
            <div className="overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-4 z-50">
                <h3 className="text-xl font-semibold group-hover:underline group-hover:underline-offset-1 transition-all">{property.title}</h3>
                <p className="text-gray-500 flex items-center ">
                    <MapPin className="size-4" />
                    {property.location}
                </p>
                <p className="my-4">{property.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
                    {property.tag}
                </span>
            </div>
        </div>
    )
}

export default PropertyCard
