import { useState, useEffect } from "react";
import api from "../services/api";

export function Home() {
  // const [user, setUser] = useState();

  function authentication() {
    api
      .post('/usuario/autenticar', {
        "usuario": "kaique",
        "senha": "Maisbrasil2019"
      })
      .then((response) => {
        console.log(response.data)
      })
  }
  // authentication()

  function gettingVehicleInfo() {
    api
      .get('/veiculo/buscar/JHM7027')
      .then((response) => {
        console.log(response.data)
      })
  }
  //gettingVehicleInfo()


  function gettingVehicleBySituation() {
    api
      .post('/listar/veiculo/',{
        body: {
          "codigo_situacao" : 12,
          "inicio_paginacao" : 0,
          "quantidade_por_pagina" : 10
        }
      })
      .then((response) => {
        console.log(response.data.veiculos)
      })
  }
  gettingVehicleBySituation()


  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}