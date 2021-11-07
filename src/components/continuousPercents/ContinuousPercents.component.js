import './continuousPercents.css'
import {FormGroup, H3, H4, NumericInput} from "@blueprintjs/core";
import {useState} from "react";
import img41 from '../../images/img41.png'
import img42 from '../../images/img42.png'
import img43 from '../../images/img43.png'
import img44 from '../../images/img44.png'


const ContinuousPercents = () => {
    const [d41, setD41] = useState(0.1)
    const [p41, setP41] = useState(1_000_000)
    const [n41, setN41] = useState(5)

    const [d42, setD42] = useState(0.05)
    const [s42, setS42] = useState(200_000)
    const [n42, setN42] = useState(7)

    const [d43, setD43] = useState(0.03)
    const [a43, setA43] = useState(0.03)
    const [n43, setN43] = useState(7)

    const [d44, setD44] = useState(0.05)
    const [a44, setA44] = useState(0.01)
    const [n44, setN44] = useState(5)

    const calculate410 = () => {
        return p41*(Math.E**(d41*n41))
    }

    const calculate420 = () => {
        return s42*(Math.E**(-d42*n42))
    }

    const calculate430 = () => {
        return Math.E**(d43*n43+a43*n43*n43/2)
    }

    const calculate440 = () => {
        const temp = d44/Math.log(a44)*((a44**n44)-1)
        return Math.E**temp
    }

    const render1Calculation = () => {
        return (
            <>
                <div className='formula-box'>
                    <img src={img41}/>
                    <H4>(1)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="d"
                            labelFor="d41"
                            labelInfo='(неперервна ставка нарощення)'
                        >
                            <NumericInput id='d41' min={0} value={d41} stepSize={0.1} onValueChange={setD41}/>
                        </FormGroup>
                        <FormGroup
                            label="P"
                            labelFor="p41"
                            labelInfo='(початкова сума)'
                        >
                            <NumericInput id='p41'
                                          min={0}
                                          value={p41}
                                          onValueChange={setP41}
                            />
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n41"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n41' min={0} value={n41} onValueChange={setN41}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="s1"
                            labelInfo='(нарощена сума)'
                        >
                            <NumericInput id='s1' value={calculate410()} disabled={true} />
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
                    <img src={img42}/>
                    <H4>(2)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="d"
                            labelFor="d42"
                            labelInfo='(неперервна ставка нарощення)'
                        >
                            <NumericInput id='d42' min={0} value={d42} stepSize={0.1} onValueChange={setD42}/>
                        </FormGroup>
                        <FormGroup
                            label="S"
                            labelFor="S42"
                            labelInfo='(нарощена сума)'
                        >
                            <NumericInput id='S42'
                                          min={0}
                                          value={s42}
                                          onValueChange={setS42}
                            />
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n42"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n42' min={0} value={n42} onValueChange={setN42}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="P"
                            labelFor="P1"
                            labelInfo='(початкова сума)'
                        >
                            <NumericInput id='P1' value={calculate420()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </>
        )
    }

    const render3Calculation = () => {
        return (
            <>
                <div className='formula-box'>
                    <img src={img43}/>
                    <H4>(3)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="d"
                            labelFor="d43"
                            labelInfo='(початкове зн. сили росту)'
                        >
                            <NumericInput id='d43' min={0} value={d43} stepSize={0.1} onValueChange={setD43}/>
                        </FormGroup>
                        <FormGroup
                            label="a"
                            labelFor="a43"
                            labelInfo='(приріст сили росту)'
                        >
                            <NumericInput id='a43'
                                          min={0}
                                          value={a43}
                                          stepSize={0.1}
                                          onValueChange={setA43}
                            />
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n43"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n43' min={0} value={n43} onValueChange={setN43}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="e**"
                            labelFor="e11"
                            labelInfo='(множник нарощення)'
                        >
                            <NumericInput id='e11' value={calculate430()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </>
        )
    }

    const render4Calculation = () => {
        return (
            <>
                <div className='formula-box'>
                    <img src={img44}/>
                    <H4>(4)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="d"
                            labelFor="d44"
                            labelInfo='(початкове зн. сили росту)'
                        >
                            <NumericInput id='d44' min={0} value={d44} stepSize={0.1} onValueChange={setD44}/>
                        </FormGroup>
                        <FormGroup
                            label="a"
                            labelFor="a44"
                            labelInfo='(приріст сили росту)'
                        >
                            <NumericInput id='a44'
                                          min={0}
                                          value={a44}
                                          stepSize={0.1}
                                          onValueChange={setA44}
                            />
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n44"
                            labelInfo='(тривалість позики)'
                        >
                            <NumericInput id='n44' min={0} value={n43} onValueChange={setN44}/>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="e**"
                            labelFor="e12"
                            labelInfo='(множник нарощення)'
                        >
                            <NumericInput id='e12' value={calculate440()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </>
        )
    }

    return(
        <div className='c-percents-box'>
            <H3>4.1. Постійна сила росту</H3>
            {render1Calculation()}
            {render2Calculation()}
            <H3>4.2. Змінна сила росту</H3>
            {render3Calculation()}
            {render4Calculation()}
        </div>
    )
}

export default ContinuousPercents
