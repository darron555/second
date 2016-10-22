var calc=(function calc(a){


    //function sum(a){
    //    for(var i=0;i<arguments.length;i++){
    //        a+=arguments[i];
    //    }
    //}
    //function sum(a){
    //    for(var i=0;i<arguments.length;i++){
    //        a+=arguments[i];
    //    }
    //}
    //function sum(a){
    //    for(var i=0;i<arguments.length;i++){
    //        a+=arguments[i];
    //    }
    //}

    return {
       sum : function sum(a){
           for(var i=1;i<arguments.length;i++){
               a+=arguments[i];

           }
           return a;
       },
        dif:function dif(a){
            for(var i=1;i<arguments.length;i++){
                a-=arguments[i];
            }
            return a;
        },
        div:function dif(a){
            for(var i=1;i<arguments.length;i++){
                if(arguments[i]==0){
                    throw new Error("На ноль делить нельзя");
                }
                a/=arguments[i];
            }
            return a;
        },
        mul:function dif(a){
            for(var i=1;i<arguments.length;i++){
                a*=arguments[i];
            }
            return a;
        }
    };

}());

module.exports=calc;