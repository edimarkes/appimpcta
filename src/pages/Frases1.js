import { useState } from "react";
import styles from '../css/Frases.module.css'



    function Frases1(){
        const [whatsapp, setWhatsapp] = useState('');
        const [texto, setTexto] = useState('');
        const [texto2, setTexto2] = useState('');
        const [texto3, setTexto3] = useState(0);
        const [texto4, setTexto4] = useState(0);

        const evento = (e) => {
            setTexto(e.target.value);
        }

        const evento2 = (e) => {
            setTexto2(e.target.value);

        }
        return(
            
            <div className={styles.formefrase1}>
                <h1>Formulário Frases Prontas</h1> 
                <form>
                <div><b>Whatsapp:</b> <br />
                    <input type="text" onChange = {e => setWhatsapp(e.target.value)} />
                 <p> wa.me/{whatsapp}</p>
                </div>
               <div><b>Nome do Cliente: </b><br /> <input type="text" onChange={evento} />
               <p>Olá {texto}, aqui é o Edilson da Impacta treinamentos, tudo bem? </p>
               
               </div>
               <div><b>Curso de Interesse: </b><br /> <input type="text" onChange= {evento2} />
               <p>Recebi aqui a sua solicitação de contato para saber mais sobre o curso de: *{texto2}*.<br /> Tentei contato agora pouco no seu celular, mas não tive êxito.</p>
               <div>
                <input type="text" value ="Já formamos mais de 2 milhões de alunos e auxiliamos a ingressar no mercado ou alavancar a carreira e agora será a sua vez."/>
               </div>
               <div>
               <input type="text" value ="Vou adorar explicar todo o nosso sistema de ensino, nossa metodologia, a grade do curso, valores e também tirar todas as suas dúvidas. Quero te passar todas as informações, para você ter ainda mais sucesso na sua carreira.🚀"/>
               </div>
                 <div>
                   
                 
                <input type="text" value="Por qual motivo você deseja fazer esse curso: ingressar em uma nova carreira ou alavancar sua carreira atual? Já conhece alguma linguagem de programação ou vai começar do zero?" />
               </div>

               <div>
               <br />
               <label>Simples</label>   
                 <br/>
                <input type="text" value="Por qual motivo você deseja fazer esse curso: ingressar em uma nova carreira ou alavancar sua carreira atual?" />
               </div>

               
               <div>
                <input type="text" value="Você prefere que eu ligue novamente em algum outro horário ou podemos seguir aqui no WhatsApp? 😀" />
               </div>
               </div>
               <div><b>Valor do curso:</b><br />
               <input type="text" onChange={e => setTexto3(e.target.value)} />
               
               </div>
               <div><b>Qtd Parcelas:</b> 
               <br /><input type="text" onChange = {e => setTexto4(e.target.value)} /> 
               <p>O valor de investimento do curso é de: R$ {texto3} e pode ser parcelado em até: {texto4}x sem juros
                   </p>
                   <br />

                   <label>Quando o curso não foi informado</label>
                   <p><input type="text" value="Recebi aqui a sua solicitação de contato para saber mais sobre os cursos da Impacta. Porém, no formuçario que foi gerado quando você fez a pesquisa, não ficou claro qual o curso de seu interesse. Pode me informar por favro qual é o curso e como podemos ajudar?" /> </p>
               </div>
               <br />
            
               <input type="reset" value="Limpar" />
               <br />
               <br />
               <br />

               
               
                
              
                

               

                   
                 

                </form>
               
                </div>
        );

    }
    export default Frases1;
    

   