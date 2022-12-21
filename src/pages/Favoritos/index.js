import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';

function Favoritos() {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifácio' capa='https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img3.png' />
                
            </section>
        </>
    )
}

export default Favoritos;
