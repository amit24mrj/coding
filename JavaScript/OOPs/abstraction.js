class CoffeeMachine{
    constructor(){
        let _waterTemperature=0;
        this.setWaterTemperature=function(temperature){
            _waterTemperature=temperature;
        };
        this.makeCoffee=function(){
            if(_waterTemperature >=195 && _waterTemperature <= 205){
                console.log('Coffee is ready!');
            }
            else{
                console.log('Water temperature is not suitable for making coffee.');
            }
        };
    }
}
let coffeeMachine=new CoffeeMachine();
coffeeMachine.setWaterTemperature(200);
coffeeMachine.makeCoffee();