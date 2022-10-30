var underline = document.getElementsByClassName("underline");
var tabcontants = document.getElementsByClassName("tab-contants");
    function opentab(tabname){
        for(underlines of underline){
            underlines.classList.remove("aceaktivelink");
        }
        for(tabcontant of tabcontants){
            tabcontant.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("aceaktivelink");
        document.getElementById(tabname).classList.add("active-tab");
        
    }
    var moon = document.getElementById("moon");
    moon.onclick =function(){
        document.body.classList.toggle("drack-thim");
        if(document.body.classList.contains("drack-thim")){
            moon.src = "drack mood file/sun.png";
        }else{
            moon.src = "drack mood file/moon.png";
        }
    }
    // var go = document.getElementById("go");
    // var back = document.getElementById("back");
    //     function opentab(){
    //         if(going of go){
    //             going.classList.opentab("open");
    //         }
    //         for(backing of back){
    //             backing.classList.remove("open");
    //         }
    //     }