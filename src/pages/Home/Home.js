import CardBox from '../../components/CardBox/CardBox'

import './Home.css'

const Home = () => {
    return (
        <div>
            <CardBox
                title="Saldo Total"
                value={2000.56}
                className="cardTotal"
                buttonValue="Ver detalhes"
                url="#"
            />
            <div className="colCards">
                <CardBox
                    title="Saldo Total"
                    value={2000.56}
                    className="cardReceita"
                    buttonValue="Ver detalhes"
                    url="#"
                />
                <CardBox
                    title="Saldo Total"
                    value={2000.56}
                    className="cardDespesa"
                    buttonValue="Ver detalhes"
                    url="#"
                />
            </div>

        </div>
    )
}

export default Home