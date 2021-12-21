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

        [...this._formEl.elements].forEach((e)=>{

            user[e.name] = e.value;

        });

        if(user["passw"] != user["confirmPassw"]){
            console.log("erro nas senhas");
            return false;
        }

        console.log(user);

        this._formEl.reset();

    }
}