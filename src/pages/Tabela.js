import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';


function Tabela() {

//Listando dados do cliente
    const modelo = { nome: '', email: '', telefone: '', curso: '', data: '', hora: '' }
    const [formulario, setFormulario] = useState(modelo);
   

   
    const getData = () => {
        fetch('http://localhost:3007/dadosretorno', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setFormulario(myJson)
            });

            
    }
    useEffect(() => {
        getData()
        
    }, [])
    
 //=================================================================
  
     //DELETANDO 
     
    
     const handleDelete = async (id) => {
        await fetch("http://localhost:3007/dadosretorno/"+id, {
            method: "DELETE",

        })

        setFormulario((prevState) => prevState.filter((formulario) => formulario.id !==id))
    }


    return (
        <div>



            <table className='table'>

                <thead>
                    <tr>
                        <th>Indíce</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Curso</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        formulario && formulario.length>0 && formulario.map((item)=>
                        <tr key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.curso}</td>

                                <td>{format(new Date(item.data), 'dd/MM/yyyy')}</td>

                                <td>{item.hora}hs</td>
                                <td><Link to={`/updateuser/${item.id}`}><button  className="btn btn-secondary" >Alterar </button></Link></td>

                                <td><button className="btn btn-danger"  onClick={()=> handleDelete(item.id)}>Excluir</button></td>  
                            </tr>
                        )
                    }
                </tbody>


            </table>


        </div>


    );
}
export default Tabela;