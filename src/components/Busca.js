import style from '../css/NavBar.module.css';
import { useState } from 'react';
function Busca() {

    const[busca, setBusca ] = useState([]);

       const handleBusca =(target)=>{
        if(!target.value){
            setBusca(busca)
            return

        }
        const filterBusca = busca.filter(({nomeCursos})=> nomeCursos.includes(target.value))
        setBusca(filterBusca);

    }
  
    return (
        <div className={style.divpaisearch}>
            <div>
                <input
                    type="text"
                    placeholder="Pesquisa Cursos"
                    name="search"
                    
                    onChange={handleBusca}
                />
            </div>
            <div>
                <button  className={style.icone}><i className="fa fa-search"></i></button>
            </div>
        </div>
    )
}
export default Busca;