class calculator {
    constructor() {
        this.oldNum = null
        this.currentNum = null
        this.operator = null
        this.activateButtons()
        
    }


    activateButtons() {
        let numberButtons = document.querySelectorAll('.number-button')
        let operatorButtons = document.querySelectorAll('')

        numberButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                
            })
        })
    }

    
}