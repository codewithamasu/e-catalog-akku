import React from 'react'
import products from '../utils/product'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/truck-heavy-equipment/Navbar'
import { nanoid } from 'nanoid'
function TruckAndHeavyEquipment() {
  
  const fourWheelsProducts = products.fourWheels || []

  return (
    <div>
      <header className="w-full">
        <Navbar />
        {/* Banner */}
        <div
          className="bg-[url('/src/assets/images/truck-heavy-equipment/banner.png')] 
          w-full
          h-[300px]
          bg-cover 
          bg-center 
          relative"
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Truck & Heavy Equipment Products
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fourWheelsProducts.map((product) => (
            <ProductCard
              key={nanoid()}
              description={product.description}
              image={product.image}
              title={product.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TruckAndHeavyEquipment
