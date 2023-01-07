import { useState } from 'react';
import styles from '../css/Frases2.module.css'

function Frase2() {

    const [saudacao, setSaudacao] = useState("");
    const [visualizou, setVisualizou] = useState("");
    const [nomeCliente, setNomeCliente] = useState("")
    const [nomeCurso, setNomeCurso] = useState("")
    return (
        <div className={styles.formefrase1} >
            <h3>Frases 2</h3>
            <label>Frase 1: </label>

            <input type="text"
                placeholder="Nome cliente"
                onChange={(e) => setSaudacao(e.target.value)} />

            <p>Olá {saudacao}. Como está corrido aí pra você e não está conseguindo responder minhas mensagens, creio que não poderá fazer o curso agora ou que tenha desistido de investir na sua carreira no momento. Estou dando baixa no seu processo de interesse aqui na Impacta, mas fico à disposição se em algum momento desejar retomar.</p>





            <label>Frase 2: </label>
            <input
                type="text"
                placeholder='Nome do Cliente'

                onChange={(e) => setVisualizou(e.target.value)}
            />
            <p>Olá {visualizou}, tudo bem? Você visualizou, mas não conseguiu responder minha última mensagem. Ainda interessado no curso?</p>

            <label> Curso Online ao vivo ou Presencial</label>
            <br />
            <p><input type="text" value="Eu tenho esse curso em 2 formatos, online ao vivo, onde as aulas acontecem em tempo real e você consegue interagir direto com o instrutor, fazer perguntas e tirar as dúvidas no momento da aula. E tenho ele no formato presencial na Av. Paulista. Como você prefere?" size='80' /> </p>
          
            <label> Somente Online ao Vivo</label>
            <p><input type="text" value="Esse curso acontece no formato  online ao vivo, onde as aulas acontecem em tempo real e você consegue interagir direto com o instrutor, fazer perguntas e tirar as dúvidas no momento da aula." size='80' /> </p>
            <br />
            <br />

            <label>Frase 4</label>
            <br />
            <input type="text" value="Nosso curso de Desenvolvedor Full Stack é um curso bem completo e o melhor do mercado com 420hs de carga horária, por isso o valor de investimento dele é mais alto. Fora ele, temos outras alternativas para ajudá-lo a avançar nessa área, mas preciso entender melhor seu momento e suas expectativas para traçar o melhor caminho pra você.  Por que Full Stack? Você entende o que é um profissional Full Stack e mais ou menos o que é necessário para chegar até lá?" size='80' />
            <br />
            <br />
            <label>Frase 5 - Whatsapp 2</label>
            <input type="text"
                placeholder="Nome cliente"
                onChange={(e) => setNomeCliente(e.target.value)} />

            <input type="text"
                placeholder="Nome do curso"
                onChange={(e) => setNomeCurso(e.target.value)} />

            <p>Oi, {nomeCliente}. Aqui é o Edilson, da Impacta treinamentos.
                Tentei falar com você hoje mais cedo, para falarmos sobre o curso de  {nomeCurso}, eu quero passar todas as informações e explicar como funciona. Estou com ótimas condições aqui pra esse curso, viu? {nomeCliente},
                Você consegue conversar comigo hoje?</p>
            <br />
            <label>Frase 6 - Período desejado</label>
            <p><input type="text" value="Prefere durante a semana à noite ou aos sábados? Na semana à noite é no horário das  19hs às 23hs. Aos sábados é pela manhã das 9hs 13hs ou à tarde das 14hs às 18hs." size='80' /> </p>

            <label>Frase 7: Curso completo de Excel</label>
            <p><input type="text" value="Nosso curso completo de Excel tem 2 módulos.  O módulo I tem 24hs de carga horária e nele você aprenderá a parte básica e a parte intermediária." size='80' /></p>

            <p><input type="text" value="O módulo II tem 40hs de carga horária e nele você aprenderá a parte avançada." size='80' /></p>

            <p><input type="text" value="Seu interesse é pelo curso completo ou somente o módulo I já te atende?" size='80' /></p>

            <p><input type="text" value="Em termos de valor, conteúdo, carga horária, metodologia, é tudo igual. Só muda a forma de assistir as aulas, sendo um presencial e outro pela internet." size='80' />  </p>

            <p><input type="text" value="Os valores do curso de Excel são: Módulo I: R$ 1.121,15 / Módulo II: R$ 1.729,64" size='80'   /> </p>
            <label>Vantagem Aulas ao Vivo</label>
            <p><input type="text" value="E uma vantagem do online ao vivo, é que além de assistir as aulas nos dias em que elas acontecem, essas aulas são gravadas e depois disponibilizadas aos alunos, então você consegue rever essas aulas. " size='80' /></p>



        </div>
    )

}
export default Frase2;
