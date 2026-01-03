import React from 'react'

type Service = {
  title: string;
  description: string;
  icon: string;
};

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
    return (
        <div className="rounded-2xl p-6 shadow-lg border border-white/10 hover:border-black transition">

            <div className="text-4xl mb-4 text-black">
                <img src={service.icon} className='size-14' alt="" />
            </div>

            <h3 className="text-xl font-semibold  mb-3">
                {service.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
            </p>
        </div>
    )
}

export default ServiceCard
