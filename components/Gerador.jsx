import { useState } from "react";

export default function Gerador() {
    let [valor, receberValor] = useState(0)
    const lista = []
    function gerarMegaSena(min = 0, max = 60) {
        for (let contador = 0; contador < valor; contador++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            lista.push(Math.floor(Math.random() * (max - min)) + min)
        }
        return lista
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                {gerarMegaSena().map((elemento) => {
                    return (
                        <h3 style={{
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "50px"
                        }}>{elemento}</h3>)
                })}
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                <input type="text" value={valor} onChange={(e) => receberValor(e.target.value)} />
            </div>
        </>
    )
}