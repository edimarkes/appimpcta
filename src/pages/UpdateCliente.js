import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../css/Frases.module.css'



function UpdateCliente() {
    const { id } = useParams()
    const[idcurso, setIdCurso] = useState("");
    const[nome, setNome] = useState(""); 
    const[email,setEmail] = useState("");
    const[telefone,setTelefone] = useState("");
    const[curso, setCurso] = useState("");
    const[data, setData] = useState("");
    const[hora, setHora] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3007/dadosretorno/${id}`, {


        }).then(resp => resp.json())
            .then((data) => {
                setIdCurso(data.id);
                setNome(data.nome);
                setEmail(data.email);
                setTelefone(data.telefone);
                setCurso(data.curso);
                setData(data.data);
                setHora(data.hora);


                

            })



    }, [id])


    const handlesubmit=(e)=>{
        e.preventDefault();
        const dados= {id,nome,email,telefone,curso,data,hora};
        
  
        fetch("http://localhost:3007/dadosretorno/"+id,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(dados)
        })
  
      }










    return (
        <div className={styles.divpai}>
            <h2 className={styles.texth2}>Update Clientes</h2>

            <div className={styles.divpageupdate}>
            <form onClick={handlesubmit}>
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
                         
                      </tr>
                  </thead>
                  <tbody>
                 
                 <tr>
                     
                     <td><input type="text" size='1' defaultValue={idcurso} onChange={e=>setIdCurso(e.target.value)} /></td>
                     <td><input type="text" size='15' defaultValue={nome} onChange={e=>setNome(e.target.value)} /></td>
                     <td><input type="text" size='15' defaultValue={email} onChange={e=>setEmail(e.target.value)} /></td>
                     <td><input type="text" size='10' defaultValue={telefone} onChange={e=>setTelefone(e.target.value)} /></td>
                     <td><input type="text" size='10' defaultValue={curso} onChange={e=>setCurso(e.target.value)} /></td>
                     
                     <td><input type="date" size='10' defaultValue={data} onChange={e=>setData(e.target.value)} /></td>

                     <td><input type="text" size='10' defaultValue={hora} onChange={e=>setHora(e.target.value)}  /></td>
                     <td><input type="submit" value="Editar Curso" className="btn btn-primary" /></td>
                 
                 
             
          
                  
                  </tr>
                  </tbody>
                  </table>
                  </form>
            

            



        </div>
        </div>
    )
}
export default UpdateCliente;