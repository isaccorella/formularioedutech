import React, { Component, } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {table, Button, Container, Modal, Modalheader, FormGroup, ModalFooter, Table, ModalBody} from 'reactstrap';
import { getDefaultNormalizer } from '@testing-library/dom';

const data =[
    {codigo: 1, nombre: "ejemplo", numero: "88888888", email: "ejemplo@edutech.com"}
]
class App extends Component{
state={
    data: data,
    form:{
        codigo:'',
        nombre:'',
        numero:'',
        email:''
    },
    modalInsertar: false,
}
handleChange=e=>{
this.setState({
    form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
    }
});
}
mostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
}
ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
}
insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.codigo=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: False});
}
  render(){
      return(
          <><Container>
              <br />
              <Button color="primary" onClick={() => this.mostrarModalInsertar}>Insertar un usuario</Button>
              <br /><br />

              <Table>
                  <thead><tr><th>Código</th>
                      <th>Nombre</th>
                      <th>Número</th>
                      <th>Email</th>
                      <th>Editar o Eliminar</th></tr></thead>
                  <tbody>
                      {this.state.data.map((elemento) => (
                          <tr>
                              <td>{elemento.codigo}</td>
                              <td>{elemento.nombre}</td>
                              <td>{elemento.numero}</td>
                              <td>{elemento.email}</td>
                              <td><Button color="primary">modificar un Usuario</Button>
                                  <Button color="danger">Eliminar un Usuario</Button></td>
                          </tr>
                      ))}



                  </tbody>


              </Table>
          </Container><Modal isOpen={this.state.modalInsertar}>

                  <Modalheader>
                      <div>
                          <h3>Insertar Datos</h3>
                      </div>
                  </Modalheader>

                  <ModalBody>
                      <FormGroup>
                          <label>codigo:</label>
                          <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                      </FormGroup>

                      <FormGroup>
                          <label>nombre:</label>
                          <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                      </FormGroup>

                      <FormGroup>
                          <label>numero:</label>
                          <input className="form-control" name="numero" type="text" onChange={this.handleChange} />
                      </FormGroup>

                      <FormGroup>
                          <label>email:</label>
                          <input className="form-control" name="email" type="text" onChange={this.handleChange} />
                      </FormGroup>
                  </ModalBody>

                  <ModalFooter>
                      <Button color="primary">Insertar</Button>
                      <Button color="danger" onClick={() => this.ocultarModalInsertar()}>Cancelas</Button>
                  </ModalFooter>

              </Modal></>

          


      );
     


  }

}
export default App