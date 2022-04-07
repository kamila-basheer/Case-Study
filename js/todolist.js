function loadTable(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var json = JSON.parse(this.responseText);
        // 
        var table="<tr><th></th><th>Title</th></tr>";
        for(i=0;i<json.length;i++){
            if (json[i].completed==true){
            table+= "<tr><td><input type = checkbox checked disabled ></td><td>" + json[i].title+ "</td></tr>";
            }
            else{
                table+= "<tr><td><input type=checkbox class=chk onclick=check() ></td><td>" + json[i].title+ "</td></tr>";
            }
        }
        document.getElementById("demo").innerHTML=table;
        }
}
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}    

function check(){
checking()
.then(function(b){
    alert(b);
})
.catch(function(c){
    console.log(c);
});
}

function checking(){    
return new Promise (function(resolve,reject){
var chk = document.getElementsByClassName("chk");
var a = 0;
{
for(i=0;i<chk.length;i++){
      if(chk[i].checked==true){
          a=a+1;
      }
      else {
          console.log("no change");
  }
}
}

      if (a==5){
          resolve("Congratulations! You have successfully completed 5 tasks");
      }

      else {
          reject(`You have done ${a} tasks`);
      }
})
}











// function myFunction(jfile){
//     var i;
//     // var xmlDoc=xml.responseXML;
//     var table="<tr><th>Title</th><th>Status</th></tr>";
//     // var x = xmlDoc.getElementById("id");
//     for(i=0;i<jfile.length;i++){
//         var row = "<tr>"
//         + "<td>" + jfile[i].title + "</td>"
//         + "<td>" + jfile[i].completed + "</td>"+ "</tr>";
//         table.innerHTML += row;
//     }
//     document.getElementById("demo").innerHTML=table;
// }