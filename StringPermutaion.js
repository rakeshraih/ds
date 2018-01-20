console.clear();

function permute(str){ //MAN
  var ret = [];
  
  if(str.length==1){return [str];}
  if(str.length==2){ return [str,str[1]+str[0]];}
  
  str.split("").forEach((outer,i,array)=>{  //M, A, N FOR EACH outer='M'
      //debugger;
      let strArray = [].concat(array);    //[M ,A, N]
      strArray.splice(i,1);               //[A, N], remove first element and
                                          // apply permute on that
                                          
      permute(strArray.join("")).forEach((inner,i,array)=>{    //inner='AN'
         ret.push(outer+inner)                                 //push M+AN 
      })
  });
  
  return ret; 
}

console.log(permute('abcde'));

//MAN