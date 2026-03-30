const GetAll =  async () => {
    return await fetch(import.meta.env.VITE_GENERAL_API+'/products')
        .then(res => res.json());
}

const getElectronics = async() => {
    return await fetch(import.meta.env.VITE_GENERAL_API+'/products/electronics')
        .then(res => res.json())
}
export{
    GetAll,
    getElectronics
}