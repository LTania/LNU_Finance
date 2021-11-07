import './simplePercents.css'
import {FormGroup, H3, H4, NumericInput} from "@blueprintjs/core";
import {useState} from "react";
import img13 from '../../images/img13.png'
import img14 from '../../images/img14.png'

const SimplePercentsComponent = () => {
    const [n1, setN1] = useState(5)
    const [p1, setP1] = useState(100_000)
    const [i1, setI1] = useState(0.25)

    const [p12, setP12] = useState(100_000)
    const [i12, setI12] = useState(125_000)

    const [p13, setP13] = useState(100_000)
    const [t13, setT13] = useState(258)
    const [k13, setK13] = useState(365)
    const [i13, setI13] = useState(0.25)

    const [p14, setP14] = useState(1_000)
    const [n14, setN14] = useState(1)
    const [m14, setM14] = useState(3)
    const [i14, setI14] = useState(0.25)

    const handleN1Change = (val) => {
        setN1(val)
    }
    const handleP1Change = (val) => {
        setP1(val)
    }
    const handleI1Change = (val) => {
        setI1(val)
    }

    const handleP12Change = (val) => {
        setP12(val)
    }
    const handleI12Change = (val) => {
        setI12(val)
    }

    const handleI13Change = (val) => {
        setI13(val)
    }

    const handleP13Change = (val) => {
        setP13(val)
    }

    const handleT13Change = (val) => {
        setT13(val)
    }

    const handleK13Change = (val) => {
        setK13(val)
    }

    const handleP14Change = (val) => {
        setP14(val)
    }
    const handleN14Change = (val) => {
        setN14(val)
    }
    const handleM14Change = (val) => {
        setM14(val)
    }
    const handleI14Change = (val) => {
        setI14(val)
    }


    const calculateI1 = () => {
        return n1*p1*i1
    }

    const calculateS1 = () => {
        return i12+p12
    }

    const calculateS13 = () => {
        return p13*(1+t13*i13/k13)
    }

    const calculateS14 = () => {
        return p14*(1+n14*i14)**m14
    }

    const renderScalculation = () => {
        return (
            <div>
                <div className='formula-box'>
                    <H4>S = P+i</H4>
                    <H4>(2)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="P"
                            labelFor="p12"
                            labelInfo='(сума грошей)'
                        >
                            <NumericInput id='p12' min={0} value={p12} onValueChange={handleP12Change}/>
                        </FormGroup>
                        <FormGroup
                            label="I"
                            labelFor="i12"
                            labelInfo='(проценти)'
                        >
                            <NumericInput id='i12'
                                          min={0}
                                          value={i12}
                                          stepSize={1000}
                                          onValueChange={handleI12Change}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="S1"
                            labelInfo='(сума боргу на момент закінчення)'
                        >
                            <NumericInput id='S1' value={calculateS1()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </div>
        )
    }

    const renderS13calculation = () => {
        return (
            <div>
                <div className='formula-box'>
                    <img src={img13}/>
                    <H4>(3)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="P"
                            labelFor="p13"
                            labelInfo='(сума грошей)'
                        >
                            <NumericInput id='p13' min={0} value={p13} onValueChange={handleP13Change}/>
                        </FormGroup>
                        <FormGroup
                            label="t"
                            labelFor="t13"
                            labelInfo='(кількість днів позики)'
                        >
                            <NumericInput id='t13'
                                          min={0}
                                          value={t13}
                                          onValueChange={handleT13Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="K"
                            labelFor="k13"
                            labelInfo='(кількість днів у році)'
                        >
                            <NumericInput id='k13'
                                          min={0}
                                          value={k13}
                                          onValueChange={handleK13Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="i"
                            labelFor="i13"
                            labelInfo='(відсоткова ставка)'
                        >
                            <NumericInput id='i13'
                                          min={0}
                                          max={1}
                                          stepSize={0.05}
                                          value={i13}
                                          onValueChange={handleI13Change}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="S13"
                            labelInfo='(сума боргу на момент закінчення)'
                        >
                            <NumericInput id='S13' value={calculateS13()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>
            </div>
        )
    }

    const renderS14calculation = () => {
        return(
            <div>
                <div className='formula-box'>
                    <img src={img14}/>
                    <H4>(3)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="P"
                            labelFor="p14"
                            labelInfo='(сума грошей)'
                        >
                            <NumericInput id='p14' min={0} value={p14} onValueChange={handleP14Change}/>
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n14"
                            labelInfo='(тривалість періодів)'
                        >
                            <NumericInput id='n14'
                                          min={0}
                                          value={n14}
                                          onValueChange={handleN14Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="i"
                            labelFor="i14"
                            labelInfo='(відсоткова ставка)'
                        >
                            <NumericInput id='i14'
                                          min={0}
                                          value={i14}
                                          onValueChange={handleI14Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="m"
                            labelFor="m14"
                            labelInfo='(кількість періодів нарощення)'
                        >
                            <NumericInput id='m14'
                                          min={0}
                                          value={m14}
                                          onValueChange={handleM14Change}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="S1"
                            labelInfo='(сума боргу на момент закінчення)'
                        >
                            <NumericInput id='S1' value={calculateS14()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className='simple-percent-box'>
            <H3>1.1. Нарощення за простими відсотковими ставками</H3>
            <div className='formula-box'>
                <H4>I = nPi</H4>
                <H4>(1)</H4>
            </div>
            <div className='inputs-box'>
            <div>
                <FormGroup
                    label="n"
                    labelFor="n1"
                    labelInfo='(термін угоди)'
                >
                    <NumericInput id='n1' min={0} value={n1} onValueChange={handleN1Change}/>
                </FormGroup>
                <FormGroup
                    label="P"
                    labelFor="p1"
                    labelInfo='(сума грошей)'
                >
                    <NumericInput id='p1' min={0} value={p1} onValueChange={handleP1Change}/>
                </FormGroup>
                <FormGroup
                    label="i"
                    labelFor="i1"
                    labelInfo='(проста відсоткова ставка)'
                >
                    <NumericInput id='i1'
                                  min={0}
                                  max={1}
                                  value={i1}
                                  stepSize={0.05}
                                  onValueChange={handleI1Change}
                    />
                </FormGroup>
            </div>
            <div>
                <FormGroup
                    label="I"
                    labelFor="I1"
                    labelInfo='(проценти)'
                >
                    <NumericInput id='I1' value={calculateI1()} disabled={true} />
                </FormGroup>
            </div>
        </div>
            {renderScalculation()}
            {renderS13calculation()}
            {renderS14calculation()}
        </div>
    )
}

export default SimplePercentsComponent
