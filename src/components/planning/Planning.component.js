import './planning.css'
import {FormGroup, H3, H4, HTMLTable, NumericInput} from "@blueprintjs/core";
import {useState} from "react";
import img71 from '../../images/img71.png'
import img72 from '../../images/img72.png'
import img73 from '../../images/img73.png'
import img74 from '../../images/img74.png'
import img75 from '../../images/img75.png'
import img76 from '../../images/img76.png'
import img77 from '../../images/img77.png'
import img78 from '../../images/img78.png'
import img79 from '../../images/img79.png'
import img80 from '../../images/img80.png'
import img81 from '../../images/img81.png'
import img82 from '../../images/img82.png'


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

    const [d74, setD74] = useState(200_000)
    const [g74, setG74] = useState(0.1)
    const [n74, setN74] = useState(4)

    const [d75, setD75] = useState(1_000_000)
    const [g75, setG75] = useState(0.038)
    const [i75, setI75] = useState(0.08)
    const [n75, setN75] = useState(10)

    const [d76, setD76] = useState(200_000)
    const [g76, setG76] = useState(0.1)
    const [n76, setN76] = useState(4)
    const [m76, setM76] = useState(12)
    const [t76, setT76] = useState(24)

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

    const calculate715 = () => {
        return 1 - findAcoef(i75, n75)/findAcoef(g75, n75)
    }

    const calculate716 = () => {
        return calculate715()*d75
    }

    const calculate717 = () => {
        return (d76*g76/m76*((1+g76/m76)**(m76*n76)))/((1+g76/m76)**(m76*n76)-1)
    }
    const calculate718 = () => {
        const temp = 1+ g76/m76
        const mn = m76*n76
        return d76*(((temp)**mn)-(temp**(t76-1)))/((temp**mn)-1)
    }


    let firstCol = [], secondCol = [], thirdCol = [], fourthCol = [], fifthCol =[]
    let firstCol4 = [], secondCol4 = [], thirdCol4= [], fourthCol4 = [], fifthCol4 =[]

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

    const calculateTable4 = () => {
        firstCol4.length = 0
        secondCol4.length = 0
        thirdCol4.length = 0
        fourthCol4.length = 0
        fifthCol4.length = 0
        const a = findAcoef(g74, n74)
        const y = d74/a
        firstCol4.push(1)
        secondCol4.push(d74)
        thirdCol4.push(y)
        fourthCol4.push(d72*g74)
        fifthCol4.push(y/((1+g74)**n74))
        for(let j = 2, i=1; j <= n74; j++, i++){
            firstCol4.push(j)
            secondCol4.push(secondCol4[j-2]-fifthCol4[j-2])
            thirdCol4.push(y)
            fourthCol4.push(secondCol4[j-1]*g74)
            fifthCol4.push(y/((1+g74)**(n74-i)))
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

    const renderRow4 = (j) => {
        return (
            <tr>
                <td>{firstCol4[j-1]}</td>
                <td>{secondCol4[j-1]}</td>
                <td>{thirdCol4[j-1]}</td>
                <td>{fourthCol4[j-1]}</td>
                <td>{fifthCol4[j-1]}</td>
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


    const render4Calculation = () => {
        calculateTable4()

        return (
            <>
                <div className='formula-box'>
                    <img src={img77}/>
                    <H4>(7)</H4>
                </div>
                <div className='formula-box'>
                    <img src={img78}/>
                    <H4>(8)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="D"
                            labelFor="d74"
                            labelInfo='(величина заборгованості)'
                        >
                            <NumericInput id='d74' min={0} value={d74} onValueChange={setD74}/>
                        </FormGroup>
                        <FormGroup
                            label="g"
                            labelFor="g74"
                            labelInfo='(відсоткова ставка за позикою)'
                        >
                            <NumericInput id='g73'
                                          min={0}
                                          value={g74}
                                          stepSize={0.1}
                                          onValueChange={setG74}
                            />
                        </FormGroup>
                        <FormGroup
                            label="N"
                            labelFor="n74"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n74' min={0} value={n74} onValueChange={setN74}/>
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
                            {firstCol4.map(renderRow4)}
                            </tbody>
                        </HTMLTable>
                    </div>
                </div>
            </>
        )
    }

    const render5Calculation = () => {
        return (
            <>
                <div className='formula-box'>
                    <img src={img79}/>
                    <H4>(9)</H4>
                </div>
                <div className='formula-box'>
                    <img src={img80}/>
                    <H4>(10)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="D"
                            labelFor="d75"
                            labelInfo='(величина заборгованості)'
                        >
                            <NumericInput id='d75' min={0} value={d75} onValueChange={setD75}/>
                        </FormGroup>
                        <FormGroup
                            label="g"
                            labelFor="g75"
                            labelInfo='(відсоткова ставка за позикою)'
                        >
                            <NumericInput id='g75'
                                          min={0}
                                          value={g75}
                                          stepSize={0.1}
                                          onValueChange={setG75}
                            />
                        </FormGroup>
                        <FormGroup
                            label="i"
                            labelFor="i75"
                            labelInfo='(відсоткова ставка)'
                        >
                            <NumericInput id='i71' min={0}
                                          stepSize={0.1}
                                          value={i75} onValueChange={setI75}/>
                        </FormGroup>
                        <FormGroup
                            label="N"
                            labelFor="n75"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n75' min={0} value={n75} onValueChange={setN75}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="w"
                            labelFor="w"
                            labelInfo='(відносний грант-елемент)'
                        >
                            <NumericInput id='w' value={calculate715()} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="W"
                            labelFor="W"
                            labelInfo='(абсолютний грант-елемент)'
                        >
                            <NumericInput id='W' value={calculate716()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </>
        )
    }

    const render6Calculation = () => {
        return (
            <>
                <div className='formula-box'>
                    <img src={img81}/>
                    <H4>(11)</H4>
                </div>
                <div className='formula-box'>
                    <img src={img82}/>
                    <H4>(12)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="D"
                            labelFor="d76"
                            labelInfo='(величина заборгованості)'
                        >
                            <NumericInput id='d76' min={0} value={d76} onValueChange={setD76}/>
                        </FormGroup>
                        <FormGroup
                            label="g"
                            labelFor="g76"
                            labelInfo='(відсоткова ставка за позикою)'
                        >
                            <NumericInput id='g76'
                                          min={0}
                                          value={g76}
                                          stepSize={0.1}
                                          onValueChange={setG76}
                            />
                        </FormGroup>
                        <FormGroup
                            label="m"
                            labelFor="m76"
                            labelInfo='(к-сть періодів нарахувань відсотків)'
                        >
                            <NumericInput id='m76' min={0}
                                          value={m76} onValueChange={setM76}/>
                        </FormGroup>
                        <FormGroup
                            label="N"
                            labelFor="n76"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n76' min={0} value={n76} onValueChange={setN76}/>
                        </FormGroup>
                        <FormGroup
                            label="t"
                            labelFor="t76"
                            labelInfo='(період)'
                        >
                            <NumericInput id='t76' min={0} value={t76} onValueChange={setT76}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="Y"
                            labelFor="y6"
                            labelInfo='(термінова сплата)'
                        >
                            <NumericInput id='y6' value={calculate717()} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="S"
                            labelFor="s6"
                            labelInfo='(сума основного боргу в t періоді)'
                        >
                            <NumericInput id='s6' value={calculate718()} disabled={true} />
                        </FormGroup>
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
            {render4Calculation()}
            <H3>7.3. Пільгові позики та кредити</H3>
            {render5Calculation()}
            {render6Calculation()}
        </div>
    )
}

export default PlanningComponent
