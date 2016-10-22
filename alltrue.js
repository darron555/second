function isString(array){
    var string="string";
    var c=0;
    if(array.length==0){
        throw new Error("Пустой массив");
    }
    for(var i=0;i<array.length;i++){
        if(string!=typeof (array[i])){
            c++;
            if(c==array.length){
                return false;
            }
        }
    }
    return true;
}

function isAllTrue(array,isString){

    if(isString(array)){
        return true;
    }
return false;
}
var arr=['hi','hello',2,'poll'];
var empty=[];
var n=[1,2,3,4];

var res=isAllTrue(arr,isString);
try{
    console.log(isAllTrue(n,isString))
}catch(e){
    console.error(e.message);
}


//module.export=res;