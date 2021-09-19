import ButtonAction from '../../components/ButtonAction/ButtonAction'
import CardBox from '../../components/CardBox/CardBox'
import { IconMinus, IconPlus, IconChart } from '../../components/Icons/Icons'

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
                    title="Receitas"
                    value={2000.56}
                    className="cardReceita"
                    buttonValue="Ver detalhes"
                    url="#"
                />
                <CardBox
                    title="Despesas"
                    value={2000.56}
                    className="cardDespesa"
                    buttonValue="Ver detalhes"
                    url="#"
                />
            </div>
            <div className="contentButtonsActions">
                <ButtonAction>
                    <IconPlus />
                </ButtonAction>
                <ButtonAction>
                    <IconMinus />
                </ButtonAction>
                <ButtonAction>
                    <IconChart />
                </ButtonAction>
            </div>
            <CardBox
                title="Economia no mês"
                value="36%"
                className="cardEconomiaPercent"
            />
        </div>
    )
}

export default Home