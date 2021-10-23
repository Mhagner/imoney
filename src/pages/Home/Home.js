import { Tooltip } from '@material-ui/core'
import ButtonAction from '../../components/ButtonAction/ButtonAction'
import CardBox from '../../components/CardBox/CardBox'
import Header from '../../components/Header/Header'
import { IconMinus, IconPlus, IconList } from '../../components/Icons/Icons'
import Pagination from '../../components/pagination/Pagination'

import './Home.css'

const Home = () => {
    return (
        <div className="containerMain">
            <Header />
            <Pagination
                currentMonth="Setembro"
            />
            <div className="main">
                <div className="firstColumn">
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
                </div>
                <div className="secondyColumn">
                    <div className="contentButtonsActions">
                        <Tooltip title="Receita">
                            <ButtonAction className="buttonHome">
                                <IconPlus />
                            </ButtonAction>
                        </Tooltip>
                        <ButtonAction className="buttonHome">
                            <IconMinus />
                        </ButtonAction>
                        <ButtonAction className="buttonHome">
                            <IconList />
                        </ButtonAction>
                    </div>
                    <div className="economyCards">
                        <CardBox
                            title="Economia no mês em %"
                            value="36%"
                            className="cardEconomiaPercent"
                        />
                        <CardBox
                            title="Economia no mês em valores R$"
                            value="1600,00"
                            className="cardEconomiaPercent"
                        />
                        <CardBox
                            title="Economia no mês X mês anterior"
                            value="36%"
                            className="cardEconomiaPercent"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home