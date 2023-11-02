import React from 'react'

const FoodList = () => {
    const car = [
        {
            id:1,
            brand:"ferrari"
        },
        {
            id:2,
            brand:"audi"
        }
    ]

  return (
    <div>
        
    {
        car.map((item) => {
           return <p>{item.brand}</p>
        })
    }  
    </div>
  )
}

export default FoodList
