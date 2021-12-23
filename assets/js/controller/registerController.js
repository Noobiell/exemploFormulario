class Register {
    constructor(idForm){
        this._formEl = document.getElementById(idForm);
        this.onSubmit();
    }

    onSubmit(){
        this._formEl.addEventListener("submit", (e)=>{

            e.preventDefault();

            this.getValues();

        });//Fim evento
    }

    getValues(){
        let user = {};
        let isValid = true;

        [...this._formEl.elements].forEach(element=>{

            if(["fullName", "username", "email", "password"].indexOf(element.name) > -1 && !element.value){

                element.classList.add("erro");

                isValid = false;

            }

            user[element.name] = element.value;

        });

        if(user["passw"] != user["confirmPassw"]){
            console.log("Deu erro");
            isValid = false;
        }

        if(!isValid){
            return false;
        }

        console.log(user);

        this._formEl.reset();
    }
}
