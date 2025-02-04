import conexionAxios from "../lib/axios";

export const getAll = async () => {
    try{
        const url = "/banco"
        const {data} = await conexionAxios.get(url)
        return data
    }catch(e){
        console.log(e)  
    }
}

export const create = async (data) => {
    try{
        const url = "/banco/crear"
        await conexionAxios.post(url,data)
        return true
    }catch(e){
        console.log(e)
        return false
    }
}