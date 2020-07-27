class Utils {
    static prsRandPaper = (randPaper = 3) => {
        let paper = [];
        for (let i = 0; i < randPaper; i++) {
            paper.push({id: 1, name: 'paper', img: "/assets/paper.png"})
        }
        return paper;
    }
    static prsRandRock = (randRock = 3) => {
        let paper = [];
        for (let i = 0; i < randRock; i++) {
            paper.push({id: 2, name: 'rock', img: "/assets/rock.png"})
        }
        return paper;
    }
    static prsRandScissors= (randScissors = 3) => {
        let paper = [];
        for (let i = 0; i < randScissors; i++) {
            paper.push({id: 3, name: 'scissors', img: "/assets/scissors.png"})
        }
        return paper;
    }
}
export default Utils;