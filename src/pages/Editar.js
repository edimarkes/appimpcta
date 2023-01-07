import styles from '../css/Frases.module.css'

import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Editar() {

    const { id } = useParams()
   
   
    const[nomeCurso, setNomeCurso] = useState("");
    const[valorCurso, setValorCurso] = useState("")


    useEffect(() => {
        fetch(`http://localhost:3007/cursosimpacta/${id}`, {
           

        }).then(resp => resp.json())
          .then((data)=>{
           
            setNomeCurso(data.nomeCurso);
            setValorCurso(data.valorCurso);
          })

            

    }, [id])
   
 
    //==============================================================
    const handlesubmit=(e)=>{
        e.preventDefault();
        const dados={id,nomeCurso,valorCurso};
        
  
        fetch("http://localhost:3007/cursosimpacta/"+id,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(dados)
        })
  
      }


    return (
        <div>
        <form onClick={handlesubmit} >
            <div className={styles.divpai}>                                               
                  
                   
               
                <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Nome do Curso</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomecurso"
                        defaultValue={nomeCurso}
                        onChange={e=>setNomeCurso(e.target.value)}
                        
                        
                       
                        
                    />
                </div>
                &nbsp;&nbsp;
                <div className="form-group col-md-2">
                    <label htmlFor="valorcurso">Valor</label>
                    <input
                        type="number"
                        className="form-control"
                        id="valorcurso"
                        defaultValue={valorCurso}
                        onChange={e=>setValorCurso(e.target.value)}
                       
                       
                       
                       
                    />
                </div>
                &nbsp;&nbsp;
                <div className={styles.divbotao}>
                    <input type="submit" value="Editar Curso" className="btn btn-primary" />
                </div>

            </div>

        </form>

        
            </div >
    )
}
export default Editar;