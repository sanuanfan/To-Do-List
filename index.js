function addItem(){
    const list = document.getElementById("list");
    const taskadd = document.getElementById("Itemadd"); 
    const addedtask = document.getElementById("itemlist");
    const weeknumber = document.getElementById("Week");
    const day = document.getElementById("Day");

    if(
        document.getElementById("Itemadd").value.length > 0 &&
        weeknumber.value.length > 0 &&
        day.value.length > 0 

    ){
        //hidding and showing the elements according to the need
       
        document.getElementById("mainheading").innerHTML = weeknumber.value 
        document.getElementById("subheading").innerHTML = day.value
        document.getElementById("heading").style.display = "none";
        list.style.display = "block";

        //creating finish button
        if( !document.getElementById("finishbtn")){
        const finish = document.createElement("button");
        finish.id="finishbtn";
        finish.textContent = "Finish";
        document.getElementById("addbtn").appendChild(finish);
        finish.addEventListener("click",function finishList(){

            const section = document.createElement("div");
            const unorder = document.createElement("ul");
            const task = document.createElement("li");
            task.textContent=taskadd.value;
            unorder.appendChild(task);

            section.id ="section";
            document.getElementById("list").appendChild(section);
            section.appendChild(unorder)

        });

        //creating the function for finish button

        

        //creating list items
    }
        const li = document.createElement("li");
        li.textContent=taskadd.value;
        addedtask.appendChild(li)

        //creating the delete button

        const dltbtn = document.createElement("button");
        dltbtn.textContent= "Delete";
        li.appendChild(dltbtn);
        dltbtn.addEventListener("click",()=>{addedtask.removeChild(li)});


        taskadd.value = "";

    }else{

        alert("Please enter all the fields");

    }
    
}