import style from './Home.module.css';
import saving from '../../image/savings.svg'
import LinkButton from '../../layout/LinkButton';


const Home = () => {
    return ( 
        <section className={style.homeContainer}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar o seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projetos"/>
            <img src={saving} alt="Imagem porquinho" />
        </section>
    );
}
 
export default Home;