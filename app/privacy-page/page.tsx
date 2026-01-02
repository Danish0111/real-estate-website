import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-5xl font-semibold text-center mt-4'>Privacy Policies</h1>
      <div className="mt-10 max-w-3xl mx-auto p-4 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className=''>We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className=''>We may collect personal information such as your name, email address, phone number, and any details you submit through our contact or inquiry forms.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p className=''>We use the information we collect to respond to your inquiries, provide services, and improve our website and offerings.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies & Analytics</h2>
          <p className=''>We use cookies and analytics tools to understand user behavior and improve our website performance. You can disable cookies through your browser settings.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className=''>We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
        </div>
      </div>
    </div>
  )
}

export default page
