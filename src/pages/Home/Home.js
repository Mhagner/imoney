import ButtonAction from '../../components/ButtonAction/ButtonAction'
import CardBox from '../../components/CardBox/CardBox'
import Header from '../../components/Header/Header'
import { IconMinus, IconPlus, IconChart } from '../../components/Icons/Icons'
import Pagination from '../../components/pagination/Pagination'

import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Pagination
                currentMonth="Setembro"
            />
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