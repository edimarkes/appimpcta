import React, { useState } from 'react';
import styles from '../css/Retorno.module.css';
import Tabela from './Tabela';


function Retornos() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [curso, setCurso] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');


//Cadastrando dados do cliente
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dados = {
            id,
            nome,
            email,
            telefone,
            curso,
            data,
            hora,
        }
        await fetch('http://localhost:3007/dadosretorno',
            {
                method: 'POST',
                body: JSON.stringify(dados),
                headers: {
                    "Content-Type": "application/json"
                }
            }

        )
        alert("Cadastrado com sucesso!!!");
        
      


        setId("");
        setNome("");
        setEmail("");
        setTelefone("");
        setCurso("");
        setData("");
        setHora("")
        

    };


   
    
  
    return (
        <div>
            <h3>Follow-Ups</h3>
            <form onSubmit={handleSubmit}>
                <div className={styles.divformulario}>
                    <div className="divform1">
                        <input type="text"
                            name="nome"
                            className="form-control"
                            placeholder="Digite seu nome"
                            required
                            onChange={(e) => setNome(e.target.value)}
                            value={nome || ""}

                        />
                          <input type="telefone"
                            name="telefone"
                            className="form-control"
                            placeholder="Digite seu Telefone"
                            required
                            onChange={(e) => setTelefone(e.target.value)}
                            value={telefone || ""}

                        />

                        <input type="date"
                            name="data"
                            className="form-control"
                            placeholder="Data"
                            required
                            onChange={(e) => setData(e.target.value)}
                            value={data || ""}
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Digite seu E-mail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email || ""}
                        />

                        <input
                            type="text"
                            name="curso"
                            className="form-control"
                            placeholder="Digite seu Curso"
                            required
                            onChange={(e) => setCurso(e.target.value)}
                            value={curso || ""}
                        />

                        <input
                            type="time"
                            name="hora"
                            className="form-control"
                            placeholder="Hora"
                            required
                            onChange={(e) => setHora(e.target.value)}
                            value={hora || ""}
                        />
                    </div>


                </div>




                <input type="submit" value="Cadastrar" className="btn btn-primary" />





            </form>
           

           <Tabela />

        </div>
    );
}
export default Retornos;