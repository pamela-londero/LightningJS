const getMovie = async(url) => {
    let data = await fetch(url)
    console.log(data)
    return data.json()
    
}

export { getMovie }