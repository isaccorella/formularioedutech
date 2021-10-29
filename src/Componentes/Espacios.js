import React, { Component, useState } from 'react';
import App from '../App';
import modal from './modal';

class Espacios extends Component {


    render() {

        return (
            <form>


                <div classname="row">
                    <div classname="col-md-10">
                        <input
                        placeholder="Ingrese Codigo"
                        className="form-control"
                        type="number"
                        Name="numero"
                        ></input>
                        <div classname="col-md-10">
                        <input
                        placeholder="Ingrese nombre"
                        className="form-control "
                        type="text"
                        Name="nombre"

                        ></input>
                        <div classname="col-md-10">
                        <input
                        placeholder="Ingrese Telefono"
                        className="form-control"
                        type="number"
                        Name="numero"

                        ></input>
                        <div classname="col-md-10">
                        <input
                        placeholder="Ingrese Email"
                        className="form-control"
                        type="email"
                        Name="email"
                        
                        ></input>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-secundary" type="submit">enviar</button>
                            <button style={{
                                position: `primary`,
                                top: `60%`,
                                padding: 10,
                            }} onClick>modificar Usario</button>
                             <button style={{
                                position: `20`,
                                top: `60%`,
                                padding: 10,
                            }} onClick>eliminar Usuario</button>
                            
                           

                            
                         </div>   

                       

                    </div>       
                </div>     
            </form>
        );
    }


}

export default Espacios

