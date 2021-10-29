import React from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Modal, ModalHeader, FormGroup, ModalFooter, Table, ModalBody} from 'reactstrap';

const data =[
    { codigo: 1, nombre: "ejemplo", numero: "88888888", email: "ejemplo@edutech.com"},
    { codigo: 2, nombre: "ejemplo", numero: "88888888", email: "ejemplo@edutech.com"},
    { codigo: 3, nombre: "ejemplo", numero: "88888888", email: "ejemplo@edutech.com"}, 
]
class App extends React.Component{
state={
    data: data,
    form:{
        codigo:'',
        nombre:'',
        numero:'',
        email:''
    },
    modalInsertar: false,
    modalEditar: false,
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
mostrarModalEditar=(registro)=>{
    this.setState({modalEditar: true, form: registro});
}
ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
}
insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.codigo=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false});
}
Editar=(dato)=>{
    var contador=0;
    var lista=this.state.data
    lista.map((registro)=>{
        if(dato.codigo==registro.codigo){
            lista[contador].nombre=dato.nombre;
            lista[contador].numero=dato.numero;
            lista[contador].email=dato.email;
        }
        contador++;
    });
    this.setState=({data: lista});

}
eliminar=(dato)=>{
    var opcion=window.confirm("Realmente desea elimiar este usuario"+dato.codigo);
    if(opcion){
        var contador=0;
        var lista = this.state.data;
        lista.map((registro)=>{
            if(registro.codigo==dato.codigo){
                lista.splice(contador, 1);
            }
            contador++;
        });
        this.setState({data: lista});
    }
}

  render(){
      return(
          <><><Container>
              <br />
              <Button color="primary" onClick={() => this.mostrarModalInsertar()}>Insertar un usuario</Button>
              <br /><br />

              <Table>
                  <thead><tr><th>codigo</th>
                      <th>nombre</th>
                      <th>numero</th>
                      <th>email</th>
                      <th>Editar o Eliminar</th></tr></thead>
                  <tbody>
                      {this.state.data.map((elemento)=>(
                          <tr>
                              <td>{elemento.codigo}</td>
                              <td>{elemento.nombre}</td>
                              <td>{elemento.numero}</td>
                              <td>{elemento.email}</td>
                              <td><Button color="primary" onClick={() => this.mostrarModalEditar(elemento)}>modificar un Usuario</Button>
                                  <Button color="danger" onClick={() => this.eliminar(elemento)}>Eliminar un Usuario</Button></td>
                          </tr>
                      ))}



                  </tbody>


              </Table>
          </Container><Modal isOpen={this.state.modalInsertar}>

                  <ModalHeader>
                      <div>
                          <h3>Insertar Datos</h3>
                      </div>
                  </ModalHeader>

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
                      <Button color="primary" onClick={() => this.insertar()}>Insertar</Button>
                      <Button color="danger" onClick={() => this.ocultarModalInsertar()}>Cancelar</Button>
                  </ModalFooter>

              </Modal></>
              <Modal isOpen={this.state.modalEditar}>
                  <ModalHeader>
                      <div>
                          <h3>Editar Registro</h3>
                      </div>
                  </ModalHeader>

                  
                  <ModalBody>
                      <FormGroup>
                          <label>codigo:</label>
                          <input className="form-control" type="text" onChange={this.handleChange} value={this.state.form.codigo}/>
                      </FormGroup>

                      <FormGroup>
                          <label>nombre:</label>
                          <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre}/>
                      </FormGroup>

                      <FormGroup>
                          <label>numero:</label>
                          <input className="form-control" name="numero" type="text" onChange={this.handleChange} value={this.state.form.numero}/>
                      </FormGroup>

                      <FormGroup>
                          <label>Email:</label>
                          <input className="form-control" name="email" type="text" onChange={this.handleChange} value={this.state.form.email}/>
                      </FormGroup>

                      <ModalFooter>
                      <Button color="primary" onClick={() => this.mostrarModalEditar()}>Editar</Button>
                      <Button color="danger" onClick={() => this.ocultarModalEditar()}>Cancelar</Button>
                  </ModalFooter>

                  </ModalBody>


  


              </Modal></>

          


      );
     


  }

}
export default App