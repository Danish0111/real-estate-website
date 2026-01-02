import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <section className="mx-auto px-10 md:px-28 py-10 flex flex-col lg:flex-row lg:gap-50 justify-center items-center ">
            <div className="max-w-sm flex flex-col mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-6xl font-semibold mb-8">Contact Us</h1>
                <p className="text-sm">Get in touch with us to find your dream home or discuss investment opportunities.
                    Call, email, or fill out the form and our team will assist you every step of the way.</p>
                <div className="flex flex-col justify-between ">
                    <span className="mt-4 bg-white p-2 shadow-md rounded-lg flex items-center gap-2">
                        <Mail className='size-10 bg-gray-200 p-2 rounded-full' />
                        <div className="flex flex-col">
                            <span className='font-semibold'>Email</span>
                            contact@horizonestate.com
                        </div>
                    </span>
                    <span className="mt-4 bg-white p-2 shadow-md rounded-lg flex items-center gap-2">
                        <Phone className='size-10 bg-gray-200 p-2 rounded-full' />
                        <div className="flex flex-col">
                            <span className='font-semibold'>Phone</span>
                            321-221-231
                        </div>
                    </span>
                    <span className="mt-4 bg-white p-2 shadow-md rounded-lg flex items-center gap-2">
                        <MapPin className="size-10 bg-gray-200 p-2 rounded-full" />
                        <div className="flex flex-col">
                            <span className="font-semibold">Location</span>
                            New Delhi, India
                        </div>
                    </span>

                </div>
                <div className="">

                </div>
            </div>

            <div className="w-full md:max-w-md bg-white shadow-2xl p-5 rounded-2xl">
                <h1 className="text-3xl font-bold">Get in touch</h1>
                <p className="text-gray-600 mb-8">You can reach any time</p>
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-full px-4 py-3"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border rounded-full px-4 py-3"
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full border rounded-3xl px-4 py-3"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-black w-full text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default page
