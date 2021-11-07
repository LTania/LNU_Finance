import './simplePercents.css'
import {FormGroup, H3, H4, NumericInput} from "@blueprintjs/core";
import {useState} from "react";
import img13 from '../../images/img13.png'
import img14 from '../../images/img14.png'
import img22 from '../../images/img22.png'
import img131 from '../../images/img131.png'
import img132 from '../../images/img132.png'
import img122222 from '../../images/img122222.png'

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

    const [p21, setP21] = useState(100_000)
    const [n21, setN21] = useState(3)
    const [i21, setI21] = useState(0.15)

    const [s22, setS22] = useState(145_000)
    const [n22, setN22] = useState(3)
    const [m22, setM22] = useState(12)

    const [s31, setS31] = useState(100)
    const [n31, setN31] = useState(0.24)
    const [i31, setI31] = useState(0.2)

    const [s32, setS32] = useState(100_000)
    const [n32, setN32] = useState(1)
    const [d32, setD32] = useState(0.15)

    const handleS32Change = (val) => {
        setS32(val)
    }
    const handleN32Change = (val) => {
        setN32(val)
    }
    const handleD32Change = (val) => {
        setD32(val)
    }

    const handleS31Change = (val) => {
        setS31(val)
    }

    const handleN31Change = (val) => {
        setN31(val)
    }

    const handleI31Change = (val) => {
        setI31(val)
    }


    const handleS22Change = (val) => {
        setS22(val)
    }

    const handleN22Change = (val) => {
        setN22(val)
    }

    const handleM22Change = (val) => {
        setM22(val)
    }

    const handleP21Change = (val) => {
        setP21(val)
    }
    const handleN21Change = (val) => {
        setN21(val)
    }
    const handleI21Change = (val) => {
        setI21(val)
    }

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

    const calculateS21 = () => {
        return p21*(1+n21*i21)
    }

    const calculateR22 = () => {
        return s22/n22/m22
    }

    const calculateP31 = () => {
        return s31/(1+n31*i31)
    }

    const calculateD31 = () => {
        return s31 - calculateP31()
    }

    const calculateP32 = () => {
        return s32*(1-n32*d32)
    }

    const calculateD32 = () => {
        return s32 - calculateP32()
    }

    const renderScalculation = () => {
        return (
            <div>
                <div className='formula-box'>
                    <H4>S = P+I</H4>
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
                    <H4>(4)</H4>
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

    const render2Calculation = () => {

        return(
            <div>
                <div className='formula-box'>
                    <H4>S=P(1+ni)</H4>
                    <H4>(5)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="P"
                            labelFor="p21"
                            labelInfo='(сума грошей)'
                        >
                            <NumericInput id='p21' min={0} value={p21} onValueChange={handleP21Change}/>
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n21"
                            labelInfo='(термін кредиту)'
                        >
                            <NumericInput id='n21'
                                          min={0}
                                          value={n21}
                                          onValueChange={handleN21Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="i"
                            labelFor="i21"
                            labelInfo='(відсоткова ставка)'
                        >
                            <NumericInput id='i21'
                                          min={0}
                                          value={i21}
                                          onValueChange={handleI21Change}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="S21"
                            labelInfo='(сума боргу на момент закінчення)'
                        >
                            <NumericInput id='S21' value={calculateS21()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>

            </div>
        )
    }

    const renderR22Calculation = () => {
        return(
            <div>
                <div className='formula-box'>
                    <img src={img22}/>
                    <H4>(6)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="s22"
                            labelInfo='(нарощена сума грошей)'
                        >
                            <NumericInput id='s22' min={0} value={s22} onValueChange={handleS22Change}/>
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n22"
                            labelInfo='(термін кредиту)'
                        >
                            <NumericInput id='n22'
                                          min={0}
                                          value={n22}
                                          onValueChange={handleN22Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="m"
                            labelFor="m22"
                            labelInfo='(кількість виплат у році)'
                        >
                            <NumericInput id='m22'
                                          min={0}
                                          value={m22}
                                          onValueChange={handleM22Change}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="R"
                            labelFor="R22"
                            labelInfo='(величина разової виплати)'
                        >
                            <NumericInput id='R22' value={calculateR22()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>

            </div>
        )
    }

    const render31Calculation = () => {
        return(
            <div>
                <div className='formula-box'>
                    <img src={img131}/>
                    <H4>(7)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="s31"
                            labelInfo='(нарощена сума грошей)'
                        >
                            <NumericInput id='s31' min={0} value={s31} onValueChange={handleS31Change}/>
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n31"
                            labelInfo='(термін кредиту)'
                        >
                            <NumericInput id='n31'
                                          min={0}
                                          value={n31}
                                          onValueChange={handleN31Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="i"
                            labelFor="i31"
                            labelInfo='(відсоткова ставка)'
                        >
                            <NumericInput id='i31'
                                          min={0}
                                          max={1}
                                          stepSize={0.1}
                                          value={i31}
                                          onValueChange={handleI31Change}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="P"
                            labelFor="P31"
                            labelInfo='(початкова сума)'
                        >
                            <NumericInput id='P31' value={calculateP31()} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="D"
                            labelFor="D31"
                            labelInfo='(величина дисконту)'
                        >
                            <NumericInput id='D31' value={calculateD31()} disabled={true} />
                        </FormGroup>
                    </div>
                </div>

            </div>
        )
    }

    const render32Calculation = () => {
        return(
            <div>
                <div className='formula-box'>
                    <img src={img131}/>
                    <H4>(8)</H4>
                </div>
                <div className='inputs-box'>
                    <div>
                        <FormGroup
                            label="S"
                            labelFor="s32"
                            labelInfo='(нарощена сума грошей)'
                        >
                            <NumericInput id='s32' min={0} value={s32} onValueChange={handleS32Change}/>
                        </FormGroup>
                        <FormGroup
                            label="n"
                            labelFor="n32"
                            labelInfo='(термін кредиту)'
                        >
                            <NumericInput id='n32'
                                          min={0}
                                          value={n32}
                                          onValueChange={handleN32Change}
                            />
                        </FormGroup>
                        <FormGroup
                            label="d"
                            labelFor="d32"
                            labelInfo='(дисконтний множник)'
                        >
                            <NumericInput id='d31'
                                          min={0}
                                          max={1}
                                          stepSize={0.1}
                                          value={i31}
                                          onValueChange={handleD32Change}
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="P"
                            labelFor="P32"
                            labelInfo='(початкова сума)'
                        >
                            <NumericInput id='P32' value={calculateP32()} disabled={true} />
                        </FormGroup>
                        <FormGroup
                            label="D"
                            labelFor="D32"
                            labelInfo='(величина дисконту)'
                        >
                            <NumericInput id='D32' value={calculateD32()} disabled={true} />
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
            <H3>1.2. Нарахування відсотків у користувацькому кредиті</H3>
            {render2Calculation()}
            {renderR22Calculation()}
            <H3>1.3. Дисконтування та облік за простими відсотковими
                ставками</H3>
            <img src={img122222}/>
            {render31Calculation()}
            {render32Calculation()}
        </div>
    )
}

export default SimplePercentsComponent
