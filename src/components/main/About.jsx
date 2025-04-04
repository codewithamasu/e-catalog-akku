import React from 'react'
import CompanyImage from '../../assets/images/company-logo.png' // Add your company image

function About() {
  return (
    <div className="hero bg-base-200 min-h-screen" id="about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.anekakomkar.co.id/images/clients/7uTICVPCojWtH4pInByk.png"
          alt="Company Building"
          className="max-w-sm rounded-lg shadow-2xl hidden lg:block" // Added hidden lg:block
        />
        <div className="lg:mr-8 sm:p-4">
          <h1 className="text-5xl font-bold mb-6">About Company</h1>
          <div className="space-y-6">
            <p>
              Since its establishment in 1988,{' '}
              <span className="font-bold selection:bg-amber-400 selection:text-white">
                PT ANEKA KOMKAR UTAMA (AKKU)
              </span>{' '}
              is the company who produces rubber components for Automotive
              Industry both Four Wheelers and Two Wheelers, Heavy Equipment,
              Transportation Industry, Agricultural Equipment, Construction, Oil
              and Gas Industry and other parts which using rubber as an
              elementary substance based.
            </p>

            <p>
              Previously, the Company has called PT SURYA CITRA ARTAMARA which
              engaged in the Footwear Fashion with products sandals and shoes.
              As company growth and increasing the market demands, then on 16th
              November 1988 the Company was expanding to automotive part and
              renamed to become PT ANEKA KOMKAR UTAMA.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
