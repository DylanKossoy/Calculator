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
        let equalButton = document.querySelector('.equal-button')

        numberButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                output.value += e.target.value
                console.log("current num: " + this.currentNum + "old num: " + this.oldNum)

                if (!this.operator) {
                    this.currentNum = output.value

                } else {
                    this.oldNum = output.value
                }

                
                
                
            })
        })



        operatorButtons.forEach(button => {
            button.addEventListener('click', (e) => {












                if(!e.target.value) return

                if(e.target.value === 'AC') {
                    this.clearCalc()
                }

                if(e.target.value === 'DEL') {
                    let out = document.querySelector('.calculator-output')
                
                    if(!out.value || !this.currentNum) return
                    
                    


                
                  

                    if(!this.operator) {
                        
                        let str = out.value.toString()
                   
                        
                        let newStr = str.slice(0, -1)
                        let newNum = parseInt(newStr)


                       

                        out.value = !newNum ? '' : newNum 
                        this.currentNum = newNum
                        
                    } else {
                        let str = out.value.toString()
                        console.log("old num")
                   
                        
                        let newStr = str.slice(0, -1)
                        let newNum = parseInt(newStr)


                       

                        out.value = !newNum ? '' : newNum 
                        this.oldNum = newNum
                        

                    }
                }
                let out = document.querySelector('.calculator-output')

                switch(e.target.value){
                    case '/':
                        if(this.operator) return
                    
                        this.operator = e.target.value

                        out.value = this.oldNum
                        break;
                    case 'x':
                        if(this.operator) return
                    
                        this.operator = e.target.value

                        out.value = this.oldNum
                        break;
                    case '+':
                        if(this.operator) return
                    
                        this.operator = e.target.value

                        out.value = this.oldNum
                        break;
                    case '-':
                        if(this.operator) return
                    
                        this.operator = e.target.value

                        out.value = this.oldNum
                        break;
                }

               
            })
        })


        equalButton.addEventListener('click', () => {
            let answer = null;
            let out = document.querySelector('.calculator-output')


            if(!this.currentNum || !this.operator || !this.oldNum) return


            switch(this.operator) {
                case '/':
                    answer = parseInt(this.currentNum) / parseInt(this.oldNum)
                    break;
                case 'x':
                    answer = parseInt(this.currentNum) * parseInt(this.oldNum)
                    break;
                case '+':
                    answer = parseInt(this.currentNum) + parseInt(this.oldNum)
                    break;
                case '-':
                    answer = parseInt(this.currentNum) - parseInt(this.oldNum)
                    break;
            }

            

            this.currentNum = answer

            out.value = this.currentNum
            this.oldNum = null;
            this.operator = null;
            


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