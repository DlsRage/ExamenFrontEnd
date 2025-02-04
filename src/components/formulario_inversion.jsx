import { useState } from "react";
import { create } from "../services/metodosAxios";

export const Formulario = () =>{
    const interes = 0.36
    const [data,setData] = useState({
        capital: 0,
        interes: interes,
        meses:0
    })
    const [aplasto,setAplasto] = useState(false)
    const cambioCapital = (e) =>{
        const capital = e.target.value
        setData({
            ...data,
            capital: capital
        })
    }
    const cambioMeses = (e) =>{
        const meses = e.target.value
        setData({
            ...data,
            meses: meses
        })
    }
    const Enviar = async () =>{
        setAplasto(true)
        await create(data)
    }
    const CalcularInteres = () =>{
        let {capital,interes,meses} = data

        let interes_c = capital*interes/12
        let saldo = parseFloat(capital) + parseFloat(interes_c)
        var informacion = [{
            capital: capital,
            interes: interes_c,
            meses: 1,
            saldo: saldo
        }]
        
        for(var i = 0;i<meses -1; i++){
            const interes = informacion[i].interes
            const saldo = informacion[i].saldo
            let newCapital = saldo
            let newMes = i + 2
            let newInteres = newCapital*0.36/12
            let newSaldo = parseFloat(newInteres) + parseFloat(newCapital)
            const data = {
                capital: newCapital,
                interes: newInteres,
                meses: newMes,
                saldo: newSaldo
            }
            informacion.push(data)
        }
        return(
            <div>
                <table>
                <thead>
                    <th>MES</th>
                    <th>CAPITAL</th>
                    <th>INTERES</th>
                    <th>SALDO</th>
                </thead>
                <tbody>
                    {
                        informacion.map((infor,index) =>(
                            <tr key={index}>
                                <td>{infor.meses}</td>
                        <td>{Number(infor.capital).toFixed(4)}</td>
                        <td>{Number(infor.interes).toFixed(4)}</td>
                        <td>{Number(infor.saldo).toFixed(4)}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
            <div>
                <h1>REGISTAR INVERSION</h1>
            </div>
            <form>
                <div>
                    <label>CAPITAL</label>
                    <input type="number" id="capital" name="capital" min={0} placeholder="Ingresal capital de la inversion" onChange={cambioCapital}/>
                    
                </div>
                <div>
                    <label>INTERES ANUAL</label>
                    <input type="number" id="interes" name="interes" min={0} value={interes} disabled />
                </div>
                <div>
                    <label>MESES</label>
                    <input type="number" id="saldo" name="saldo" min={0} onChange={cambioMeses}/>
                </div>
                <div>
                    <button type="button" onClick={Enviar} >REGISTRAR</button>
                </div>
            </form>
            {aplasto ? <CalcularInteres /> : <></>}
        </div>
    )
}