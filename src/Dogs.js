import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dogs() {
    useEffect(() => {
        ListDogs();
    }, []);
    const [dogs, setDogs] = useState([])
    function ListDogs() {
        axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
            setDogs(response.data.message)
        })
    }

    return (
        <>
            <button onClick={() => { ListDogs() }}>Dogs</button>
            <img src={dogs} alt="Fotos de dogs" />
        </>
    )
}
