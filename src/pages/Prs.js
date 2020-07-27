import React, {Component} from "react";
import _ from "lodash"
import Utils from "../components/Utils"

class Prs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prs: [
                {id: 1, name: 'paper', img: "/assets/paper.png"},
                {id: 2, name: 'rock', img: "/assets/rock.png"},
                {id: 3, name: 'scissors', img: "/assets/scissors.png"},
            ],
            playerPrs: '',
            botPrs: '',
            playerCount: JSON.parse(localStorage.getItem('playerCount')) || [],
            botCount: JSON.parse(localStorage.getItem('botCount')) || [],
            winDesc: '',
            prsWin: '',
        }
    }

    changePlayerPrs = (playerPrs) => {
        const botPrs = this.botPrs()
        this.calculate(playerPrs, botPrs)
        this.setState({
            playerPrs,
            botPrs
        })
    }

    botPrs = () => {
        const prsRandArray = Array.prototype.concat(Utils.prsRandPaper(6), Utils.prsRandRock(), Utils.prsRandScissors())
        const randPrsNum = _.random(0, prsRandArray.length - 1)
        return prsRandArray[randPrsNum]
    }

    resetScore = () =>{
        localStorage.removeItem('playerCount')
        localStorage.removeItem('botCount')
        this.setState({
            playerCount: JSON.parse(localStorage.getItem('playerCount')) || [],
            botCount: JSON.parse(localStorage.getItem('botCount')) || [],
        })
    }

    calculate = (playerPrs, botPrs) => {
        const {playerCount, botCount} = this.state
        if (playerPrs.name === botPrs.name) {
            this.setState({
                winDesc: 'NO BODY WON',
                prsWin: {name: 'NOBODY WON'},
            })
        }
        if (playerPrs.name === "rock") {
            if (botPrs.name === "scissors") {
                this.setState({
                    playerCount: +playerCount + 1,
                    winDesc: 'YOU WIN',
                    prsWin: playerPrs
                })
                return JSON.stringify(localStorage.setItem('playerCount', JSON.stringify(+playerCount + 1)))
            } else {
                this.setState({
                    botCount: +botCount + 1,
                    winDesc: 'YOU LOSE',
                    prsWin: botPrs
                })
                return JSON.stringify(localStorage.setItem('botCount', JSON.stringify(+botCount + 1)))
            }
        }
        if (playerPrs.name === "paper") {
            if (botPrs.name === "rock") {
                this.setState({
                    playerCount: +playerCount + 1,
                    winDesc: 'YOU WIN',
                    prsWin: playerPrs
                })
                return JSON.stringify(localStorage.setItem('playerCount', JSON.stringify(+playerCount + 1)))
            } else {
                this.setState({
                    botCount: +botCount + 1,
                    winDesc: 'YOU LOSE',
                    prsWin: botPrs
                })
                return JSON.stringify(localStorage.setItem('botCount', JSON.stringify(+botCount + 1)))
            }
        }
        if (playerPrs.name === "scissors") {
            if (botPrs.name === "rock") {
                this.setState({
                    botCount: +botCount + 1,
                    winDesc: 'YOU LOSE',
                    prsWin: botPrs
                })
                return JSON.stringify(localStorage.setItem('botCount', JSON.stringify(+botCount + 1)))
            } else {
                this.setState({
                    playerCount: +playerCount + 1,
                    winDesc: 'YOU WIN',
                    prsWin: playerPrs
                })
                return JSON.stringify(localStorage.setItem('playerCount', JSON.stringify(+playerCount + 1)))
            }
        }
    }


    render() {
        const {prs, playerCount, winDesc, botCount, prsWin, playerPrs, botPrs} = this.state
        return (
            <div>
                <div className="prsContainer">
                    {prs.map((prs, i) => (
                        <div onClick={() => this.changePlayerPrs(prs)} key={i} className="prs">
                            <img src={prs.img} alt={prs.name}/>
                        </div>))}
                </div>
                <div>
                    <span><h1>PLAYER </h1></span>
                    <img
                        className={winDesc === 'YOU WIN' ? 'prsImgWin' : 'prsImgLose'}
                        src={playerPrs.img}
                        alt={playerPrs.name}
                    />
                    {prsWin.name === 'NOBODY WON' ? <h1>NOBODY WON</h1> : <fragment>
                        <span><h1>WIN </h1></span>
                        <img className="prsImgWinDesc"
                             src={prsWin.img}
                             alt={prsWin.name}/>
                    </fragment>}
                    <span><h1>BOT </h1></span>
                    <img className={winDesc === 'YOU LOSE' ? 'prsImgWin' : 'prsImgLose'}
                         src={botPrs.img}
                         alt={botPrs.name}/>
                    <h1>Player: {playerCount}</h1>
                    <h1>Bot: {botCount}</h1>
                    <h1>{winDesc} {prsWin && `Win ${prsWin.name}`}</h1>
                    <button onClick={this.resetScore}>reset score</button>
                </div>
            </div>

        )
    }
}

export default Prs;