import React, { Component, } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {table, Button, Container, Modal, Modalbody, Modalheader, FormGroup, ModalFooter} from 'reactstrap';
import Espacios from './Espacios';


class App extends Component{
state={
    data: data
}
  render(){
      return(
          <Container>
           <br />   
          <Button color="primary">Insertar un usuario</Button>
          <Button color="primary">Modificar un usuario</Button>
          <Button color="primary">Eliminar un usuario</Button>
           <br /><br />
          </Container>


      );
      <Modal>
          <Modalheader>
              <div>
                  <h1>Insertar Datos</h1>
                </div>
            </Modalheader>      
            <Modalbody>


          <FormGroup>
              <label>Codigo</label>
              <input className="form-control" readOnly type="text" />
            </FormGroup>  

            <FormGroup>
              <label>Nombre</label>
              <input className="form-control" name="nombre" type="text" />
            </FormGroup>  

            <FormGroup>
              <label>Numero</label>
              <input className="form-control" readOnly type="text" />
            </FormGroup>  

            <FormGroup>
              <label>Nombre</label>
              <input className="form-control" name="Correo Electronico" type="email" />
            </FormGroup>  
        </Modalbody>    
        <ModalFooter>
            <Button color="primary">Insertar</Button>
        </ModalFooter>    

    </Modal>   


  }

}
export default Amistad