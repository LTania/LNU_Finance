import './planning.css'
import {FormGroup, H3, H4, HTMLTable, NumericInput} from "@blueprintjs/core";
import {useState} from "react";
import img71 from '../../images/img71.png'
import img72 from '../../images/img72.png'
import img73 from '../../images/img73.png'
import img74 from '../../images/img74.png'
import img75 from '../../images/img75.png'
import img76 from '../../images/img76.png'


const PlanningComponent = () => {
    const [d71, setD71] = useState(100_000)
    const [g71, setG71] = useState(0.2)
    const [i71, setI71] = useState(0.22)
    const [n71, setN71] = useState(5)

    const [d72, setD72] = useState(1_000_000)
    const [a72, setA72] = useState(50_000)
    const [i72, setI72] = useState(0.1)
    const [n72, setN72] = useState(5)

    const [d73, setD73] = useState(1_000_000)
    const [g73, setG73] = useState(0.1)
    const [n73, setN73] = useState(5)

    const handleD72Change = (val) => {
        setD72(val)
    }
    const handleA72Change = (val) => {
        setA72(val)
    }
    const handleI72Change = (val) => {
        setI72(val)
    }
    const handleN72Change = (val) => {
        setN72(val)
    }

    const handleD71Change = (val) => {
        setD71(val)
    }
    const handleG71Change = (val) => {
        setG71(val)
    }
    const handleI71Change = (val) => {
        setI71(val)
    }
    const handleN71Change = (val) => {
        setN71(val)
    }

    const calculate711 = () => {
        return d71*g71 + d71/findScoef(i71,n71)
    }
    const calculate712 = () => {
        return d71*((1+g71)**n71)/findScoef(i71, n71)
    }
    const calculate713 = () => {
        return d71/findScoef(i71, (n71-1))
    }
    const calculate714 = () => {
        return (1/findScoef(i72, n72))*(d72-((a72*(((1+i72)**n72)-(1+n72*i72)))/(i72**2)))
    }

    let firstCol = [], secondCol = [], thirdCol = [], fourthCol = [], fifthCol =[]

    const calculateTable = () => {
        firstCol.length = 0
        secondCol.length = 0
        thirdCol.length = 0
        fourthCol.length = 0
        fifthCol.length = 0
        const d = d73/n73
        firstCol.push(1)
        secondCol.push(d73)
        fourthCol.push(d)
        fifthCol.push(d73*g73)
        thirdCol.push(d+d73*g73)
        for(let j = 2; j <= n73; j++){
            secondCol.push(secondCol[secondCol.length-1]-d)
            firstCol.push(j)
            fourthCol.push(d)
            fifthCol.push((secondCol[secondCol.length-2]-d)*g73)
            thirdCol.push(fourthCol[fourthCol.length-1]+fifthCol[fifthCol.length-1])
        }
    }

    const findAcoef = (i, n) =>{
        return (1-(1+i)**(-n))/i
    }

    const findScoef = (i, n) => {
        return findAcoef(i,n)*((i+1)**n)
    }


    const render1Calculation = () => {
        return (
            <>
                <div className='formula-box'>
                    <img src={img71}/>
                    <H4>(1)</H4>
                </div>
                <div className='formula-box'>
                    <img src={img72}/>
                    <H4>(2)</H4>
                </div>
                <div className='formula-box'>
                    <img src={img73}/>
                    <H4>(3)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="D"
                            labelFor="d71"
                            labelInfo='(величина заборгованості)'
                        >
                            <NumericInput id='d71' min={0} value={d71} onValueChange={handleD71Change}/>
                        </FormGroup>
                        <FormGroup
                            label="g"
                            labelFor="g71"
                            labelInfo='(відсоткова ставка за позикою)'
                        >
                            <NumericInput id='g71'
                                          min={0}
                                          value={g71}
                                          stepSize={0.1}
                                          onValueChange={handleG71Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="i"
                            labelFor="i71"
                            labelInfo='(відсоткова ставка)'
                        >
                            <NumericInput id='i71' min={0}
                                          stepSize={0.1}
                                          value={i71} onValueChange={handleI71Change}/>
                        </FormGroup>
                        <FormGroup
                            label="N"
                            labelFor="n71"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n71' min={0} value={n71} onValueChange={handleN71Change}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="S(n,1)"
                            labelFor="sni"
                            labelInfo='(коефіцієнт нарощення)'
                        >
                            <NumericInput id='sni' value={findScoef(i71, n71)} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="Y"
                            labelFor="y1"
                            labelInfo='(термінова виплата)'
                        >
                            <NumericInput id='y1' value={calculate711()} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="Y"
                            labelFor="y12"
                            labelInfo='(термінова виплата з капіталізацією)'
                        >
                            <NumericInput id='y12' value={calculate712()} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="R"
                            labelFor="r12"
                            labelInfo='(витрати на погашення (n-1))'
                        >
                            <NumericInput id='r12' value={calculate713()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </>
        )
    }

    const render2Calculation = () => {
        return (
            <>
                <div className='formula-box'>
                    <img src={img74}/>
                    <H4>(4)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="D"
                            labelFor="d72"
                            labelInfo='(величина заборгованості)'
                        >
                            <NumericInput id='d72' min={0} value={d72} onValueChange={handleD72Change}/>
                        </FormGroup>
                        <FormGroup
                            label="a"
                            labelFor="a72"
                            labelInfo='(різниця)'
                        >
                            <NumericInput id='a72'
                                          min={0}
                                          value={a72}
                                          onValueChange={handleA72Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="i"
                            labelFor="i72"
                            labelInfo='(відсоткова ставка)'
                        >
                            <NumericInput id='i72' min={0}
                                          stepSize={0.1}
                                          value={i71} onValueChange={handleI72Change}/>
                        </FormGroup>
                        <FormGroup
                            label="N"
                            labelFor="n72"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n72' min={0} value={n72} onValueChange={handleN72Change}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="S(n,1)"
                            labelFor="sni"
                            labelInfo='(коефіцієнт нарощення)'
                        >
                            <NumericInput id='sni' value={findScoef(i72, n72)} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="R"
                            labelFor="r12"
                            labelInfo='(перший внесок)'
                        >
                            <NumericInput id='r13' value={calculate714()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </>
        )
    }

    const renderRow = (j) => {
        return (
            <tr>
                <td>{firstCol[j-1]}</td>
                <td>{secondCol[j-1]}</td>
                <td>{thirdCol[j-1]}</td>
                <td>{fourthCol[j-1]}</td>
                <td>{fifthCol[j-1]}</td>
            </tr>
        )
    }

    const render3Calculation = () => {
        calculateTable()


        return (
            <>
                <div className='formula-box'>
                    <img src={img75}/>
                    <H4>(5)</H4>
                </div>
                <div className='formula-box'>
                    <img src={img76}/>
                    <H4>(6)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="D"
                            labelFor="d73"
                            labelInfo='(величина заборгованості)'
                        >
                            <NumericInput id='d73' min={0} value={d73} onValueChange={setD73}/>
                        </FormGroup>
                        <FormGroup
                            label="g"
                            labelFor="g73"
                            labelInfo='(відсоткова ставка за позикою)'
                        >
                            <NumericInput id='g73'
                                          min={0}
                                          value={g73}
                                          stepSize={0.1}
                                          onValueChange={setG73}
                            />
                        </FormGroup>
                        <FormGroup
                            label="N"
                            labelFor="n73"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n73' min={0} value={n73} onValueChange={setN73}/>
                        </FormGroup>
                    </div>
                    <div>
                        <HTMLTable>
                            <thead>
                            <tr>
                                <th>Рік</th>
                                <th>Залишок</th>
                                <th>Витрати</th>
                                <th>Виплати</th>
                                <th>Проценти</th>
                            </tr>
                            </thead>
                            <tbody>
                            {firstCol.map(renderRow)}
                            </tbody>
                        </HTMLTable>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='planning-box'>
            <H3>7.1. Створення фонду погашення заборгованості</H3>
            {render1Calculation()}
            {render2Calculation()}
            <H3>7.2. Амортизація заборгованості (погашення заборгованості в розстрочку)</H3>
            {render3Calculation()}
        </div>
    )
}

export default PlanningComponent
