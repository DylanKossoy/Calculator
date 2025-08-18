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
        let operatorButtons = document.querySelectorAll('.operator-button')

        numberButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                output.value += e.target.value

                if (!this.operator) {
                    this.currentNum = output.value

                } else {
                    this.oldNum = output.value
                }

                
                
                
            })
        })



        operatorButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if(!e.target.value || !this.currentNum || this.operator || this.oldNum) return

                if(e.target.value === 'AC') {
                    this.clearCalc()
                }

                if(e.target.value === 'DEL') {
                    let out = document.querySelector('.calculator-output')
                    if(!out.value || !this.currentNum) return

                  

                    if(!this.oldNum) {
                        
                        let str = out.value.toString()
                   
                        
                        let newStr = str.slice(0, -1)
                        let newNum = parseInt(newStr)


                       

                        out.value = !newNum ? '' : newNum 
                        this.currentNum = newNum
                        
                    } else {
                        let str = out.value.toString()
                   
                        
                        let newStr = str.slice(0, -1)
                        let newNum = parseInt(newStr)


                       

                        out.value = !newNum ? '' : newNum 
                        this.oldNum = newNum
                        

                    }
                }

                if(e.target.value === '/') {
                    this.operator = e.target.value
                    

                }
            })
        })


    
    }


    clearCalc() {
        this.currentNum = null  
        this.oldNum = null
        this.operator = null

        this.output = null

        document.querySelector('.calculator-output').value = ''
    }




    

    
}