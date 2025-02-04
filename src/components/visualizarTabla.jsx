import { useState,useEffect } from "react";
import { getAll } from "../services/metodosAxios";

export const TablaBanco = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        const obtener = async () =>{
            setData(await getAll())
        }
        obtener()
    },[])
    return (
        <div>
            <div>
                <h1>INVERSIONES DEL BANCO</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CAPITAL</th>
                        <th>INTERES</th>
                        <th>MESES</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dato,index) =>(
                        <tr key={index}>
                            <td>{dato.id}</td>
                            <td>{dato.capital}</td>
                            <td>{dato.interes}</td>
                            <td>{dato.meses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}