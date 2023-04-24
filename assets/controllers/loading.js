import generateLoading from "../view/generateLoading.js";

function loading(state){
    if(state === 'on'){
        generateLoading();
    }else{
        console.log("API loaded succesfully")
    }
}

export default loading;