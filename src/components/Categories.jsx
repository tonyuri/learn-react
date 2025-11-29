import React from 'react'

function Categories() {

const catergories = [
    {
        id: 1,
        name: "ผลไม้",
        items: ["apple", "Banana"]
    },
    {
        id: 2,
        name: "สัตว์",
        items: ["Dog", "Cat"]
    }
]

  return (
    <div>
        {catergories.map(category => (
            <div key={category.id}>
                <h3>{category.name}</h3>
                <ul>
                    {category.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>

        ))}
    </div>
  )
}

export default Categories