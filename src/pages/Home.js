import { useState, useEffect } from 'react';
import styles from '../css/Frases.module.css'
import { Link } from 'react-router-dom';

function Home() {
    
    
    const[id, setId] = useState("");
    const[nomeCurso, setNomeCurso ] = useState("");
    const[valorCurso, setValorCurso] = useState("");
    

   
   

    // Cadastrando dados no banco;    
    
        const cadastrar = async (e) => {
        e.preventDefault();
        const cursos ={id,nomeCurso, valorCurso}
        setId("");
        setNomeCurso("");
        setValorCurso("");
       await fetch("http://localhost:3007/cursosimpacta",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(cursos),
        })
        alert("Cadastrado com sucesso!!!");
        
       setDadosCurso((prevState)=> [...prevState,cursos]);
        
    }
    
   
    //=======================================================
    //Listando os cursos
            const modelo = {id: '', nomeCurso: '', valorCurso: ''}
            const [dadosCurso, setDadosCurso] = useState(modelo);
            const getData = () => {
                fetch('http://localhost:3007/cursosimpacta', {
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
                        setDadosCurso(myJson)
                    });
                    
            }
            useEffect(() => {
                getData()
            }, [])
       
//========================================================================
//Exclusão de dados

const handleDelete = async (id) => {
    await fetch("http://localhost:3007/cursosimpacta/" + id, {
        method: "DELETE",

    })
    
    setDadosCurso((prevState) => prevState.filter((dadosCurso) => dadosCurso.id !==id))
}
//================================


    return (
        <div>
            <h3>Cursos e Valores</h3>

            <form onSubmit={cadastrar} >
                <div className={styles.divpai}>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Nome do Curso</label>
                        <input 
                        type="nomecurso" 
                        className="form-control" 
                        id="nomecurso" 
                        placeholder="Curso"
                        onChange={(e)=>setNomeCurso(e.target.value)} 
                        value={nomeCurso || ""}
                        />
                    </div>
                    &nbsp;&nbsp;
                    <div className="form-group col-md-2">
                        <label htmlFor="valorcurso">Valor</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        id="valorcurso"
                        onChange={(e)=>setValorCurso(parseFloat(e.target.value))} 
                        value={valorCurso || ""}
                        placeholder="Valor" 
                        />
                    </div>
                    &nbsp;&nbsp;
                    <div className={styles.divbotao}>
                        <input type="submit" value="Cadastrar Curso" className="btn btn-primary"/>
                    </div>

                </div>

            </form>

            <table className="table">
                <thead>
                    <tr className={styles.classetr}>
                       
                        <th>Nome do Curso</th>
                        <th>Valor Original</th>
                        <th>Desconto 10%</th>
                        <th>Desconto 15%</th>
                        <th>Desconto 20%</th>
                        <th>Desconto 25%</th>
                        <th>Desconto 30%</th>
                        <th>Alterar</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                {
                        dadosCurso && dadosCurso.length>0 && dadosCurso.map((item)=>
                        <tr key={item.id} className={styles.tr}>
                           
                            <td>{item.nomeCurso}</td>
                            <td>{item.valorCurso}</td>
                                             
                            <td>{parseFloat(item.valorCurso * 0.10 - item.valorCurso).toFixed(2)}</td>
                            <td>{parseFloat(item.valorCurso * 0.15 - item.valorCurso).toFixed(2)}</td>
                            <td>{parseFloat(item.valorCurso * 0.20 - item.valorCurso).toFixed(2)}</td>
                            <td>{parseFloat(item.valorCurso * 0.25 - item.valorCurso).toFixed(2)}</td>
                            <td>{parseFloat(item.valorCurso * 0.30 - item.valorCurso).toFixed(2)}</td>

                            <td><Link to={`/editar/${item.id}`} ><button className="btn btn-success"  >Editar</button></Link></td>

                            <td><button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Excluir</button></td>
                           
                           
                            
                        </tr>
                        
                        )
                    }

                </tbody>

                   
                    </table>
        </div>






    )
}
export default Home;