import React from 'react'

const Map = () => {
  return (
 <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg container my-6">
      <iframe
        title="Google Map - Yangiyul, Tashkent Region"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.325983228932!2d69.1121997764849!3d41.11255901791469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae647fe68a5b75%3A0x738f9f117a59999b!2s4386%2BW4F%2C%20Yangiyul%2C%20Tashkent%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1708524600000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div> )
}

export default Map