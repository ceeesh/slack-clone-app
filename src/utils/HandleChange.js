const HandleChange = (event, cb) => {
    const { name, value } = event.target
    cb(prevData => ({...prevData, [name]: value}))
}

export default HandleChange