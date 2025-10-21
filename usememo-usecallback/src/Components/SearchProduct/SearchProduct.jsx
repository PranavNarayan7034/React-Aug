import React, { useState, useEffect, useMemo } from 'react'
import './SearchProduct.css'

const SearchProduct = () => {
    const Fruits = [
        "Apple", "Anar", "Avocado", "Banana", "Cherry", "Lemon",
        "Apricot", "Blackberry", "Blueberry", "Cantaloupe",
        "Coconut", "Cranberry", "Date", "Dragonfruit",
        "Elderberry", "Fig", "Grape", "Grapefruit",
        "Guava", "Honeydew", "Jackfruit", "Kiwi",
        "Kumquat", "Lychee", "Mango", "Nectarine",
        "Orange", "Papaya", "Passionfruit", "Peach",
        "Pear", "Persimmon", "Pineapple", "Plum",
        "Pomegranate", "Raspberry", "Starfruit", "Strawberry",
        "Tangerine", "Watermelon"
    ];
    const [searchItem, setSearchItem] = useState("")
    const FilteredFruit = useMemo(() => {
        return Fruits.filter((item) =>
            item.toLowerCase().includes(searchItem.toLowerCase()))
    }, [searchItem])
    // console.log("Fruits ==", FilteredFruit)

    return (
        <div className='page'>
            <h1>Search Fruits</h1>
            <input type="text" placeholder='Search Fruit Name here'
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <div className={`items 
                ${FilteredFruit.length < 5 | searchItem === "" ? "" : "scroll"}`}>
                {searchItem === "" ? null :
                    FilteredFruit.length > 0 ? (
                    FilteredFruit.map((item, index) =>
                        <p key={index}>{item}</p>)
                ) : <p>No item Found</p>}
            </div>
        </div>
    )
}
export default SearchProduct


