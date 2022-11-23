const FetchUtils = async (url, method, data) => {
    try {
        const APIurl = 'http://206.189.91.54/api/v1' + url
        const config = { method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
        const res = await fetch(APIurl, config)
        console.log('success')
        return await res.json()
    } catch(error) {
        console.log(error)
        return false
    }

}

export default FetchUtils