import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

/**Estado inicial da Calculdoura */
const initialState = {
    displayValue: '0', // Valor impresso no visor
    clearDisplay: false, // Limpar visor
    operation: null, // Qual operação será feita
    values: [0, 0], // Array para identificar quais será os valores a serem multiplicados, divididos, etc.
    current: 0 // Saber qual indice do array será utilizado
}

export default class Calculator extends Component{

    
    state = { ...initialState}// Adiciona o estado inicial (linhas 6 a 13) ao estado ja existente dessa classe

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        /** Volta para o estado inicial mostrado na linha 6 a 13.*/
        this.setState({ ...initialState })
    }

    setOperation(operation){
        
        if (this.state.current === 0) {//se caso o array estiver somente com o indice 0 preenchi o sistem pede o sequindo valor
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {//como o 'current' no sistema so tem dois valores (0 e 1) então se o corrent não tem com '0' e estara com '1', isso significa que esta tudo preparado para fazer a operação pedida 
            
            const equals = operation === '=' //caso ele queria terminar a opera o equals é true
            const currentOperation = this.state.operation
            
            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)//Fazendo a operação
            } catch(e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation, //aqui usamos o equals da linha 38
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n){
        /**Regras para evitar numeros faláciosos como: 58.24.8.9 (mais de um ponto no numero) e/ou 000005 (varios zeros no numero)*/
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        /** Adicionando o valor digitado no visor para o array (fazendo a logica para saber se o numero digitado vai no indice 0 ou 1) e fazendo o tratamento correto desse numero no*/
        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render(){

        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} operationB doubleColumn/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operationB doubleRow/>
                <Button label="0" click={this.addDigit} doubleColumn/>
                <Button label="." click={this.addDigit}/>
            </div>
        )
    }
}