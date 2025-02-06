'use server'

export const getAllMovies = async () => {

    console.log('getAllMovies')

    const res = await fetch(`http://localhost:8080/movies`, {cache: 'no-cache'})

    if (!res.ok) {
        throw new Error(`Could not find any movie ${res.status}`)
    }


    return res.json()
}


// created on 05/02/2025 12:11