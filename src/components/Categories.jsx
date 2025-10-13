import React, { useState } from 'react'

const Categories = ( {chooseCategory}) => {
    const [categories] = useState ([
                {
                    key: 'all',
                    name: 'All items'
                },
                {
                    key: 'beans',
                    name: 'Beans'
                },
                {
                    key: 'syrups',
                    name: 'Syrups'
                },
                {
                    key: 'utensils',
                    name: 'Utensils'
                },
                {
                    key: 'gift-cards',
                    name: 'Gift cards'
                },
            ])

    return (
      <div className='categories'>
        {categories.map(el => (
            <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
        ))}
    </div>
    )
  }


export default Categories