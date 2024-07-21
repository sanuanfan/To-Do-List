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
        finish.addEventListener("click",()=>{

            const task = document.getElementById("itemlist").innerHTML;
            const weeknumber = document.getElementById("mainheading").textContent;
            const day = document.getElementById("subheading").textContent;

            const section = document.createElement("div");
            section.innerHTML = `<h1>${weeknumber}</h1><h2>${day}</h2><ul>${task}</ul>`
            document.getElementById("Finallist").appendChild(section);
            section.className="section";

            document.getElementById("mainheading").textContent="";
            document.getElementById("subheading").textContent="";
            document.getElementById("itemlist").innerHTML="";

            document.getElementById("heading").style.display="inline"
            document.getElementById("Week").value="";
            document.getElementById("Day").value="";

            const finish = document.getElementById("finishbtn");
            if(finish){
                finish.remove();
            }

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