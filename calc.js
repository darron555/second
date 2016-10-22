function calc(f){

    return {
       sum : function sum(){
           var res=f;
           for(var i=0;i<arguments.length;i++){
               res+=arguments[i];
           }
           return res;
       },
        dif:function dif(){
            var res=f;
            for(var i=0;i<arguments.length;i++){
                res-=arguments[i];
            }
            return res;
        },
        div:function dif(){
            var res=f;
            for(var i=0;i<arguments.length;i++){
                if(arguments[i]==0){
                    throw new Error("На ноль делить нельзя");
                }
                res/=arguments[i];
            }
            return res;
        },
        mul:function dif(){
            var res=f;
            for(var i=0;i<arguments.length;i++){
                res*=arguments[i];
            }
            return res;
        }
    };

}

module.exports=calc;