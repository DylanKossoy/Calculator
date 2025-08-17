class calculator {
    constructor() {
        this.oldNum = null
        this.currentNum = null
        this.operator = null
        this.output = null
        this.activateButtons()
        
    }


    activateButtons() {
        let output = document.querySelector('.calculator-output')
        let numberButtons = document.querySelectorAll('.number-button')
        // let operatorButtons = document.querySelectorAll('')

        numberButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                
                output.value = e.target.value
                
            })
        })
    }

    
}