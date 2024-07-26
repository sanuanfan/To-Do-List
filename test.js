function addItem() {
    const list = document.getElementById("list");
    const taskadd = document.getElementById("Itemadd");
    const addedtask = document.getElementById("itemlist");
    const weeknumber = document.getElementById("Week");
    const day = document.getElementById("Day");
    const titlename = document.getElementById("titleinput");

    if (
        taskadd.value.length > 0 &&
        weeknumber.value.length > 0 &&
        day.value.length > 0 &&
        titlename.value.length > 0
    ) {
        // Display the heading and list container
        document.getElementById("titlenames").innerHTML = titlename.value;
        document.getElementById("mainheading").innerHTML = weeknumber.value;
        document.getElementById("subheading").innerHTML = day.value;
        document.getElementById("heading").style.display = "none";
        list.style.display = "block";

        // Create and append the finish button if it doesn't already exist
        if (!document.getElementById("finishbtn")) {
            const finish = document.createElement("button");
            finish.id = "finishbtn";
            finish.textContent = "Finish";
            document.getElementById("addbtn").appendChild(finish);

            finish.addEventListener("click", () => {
                if (document.getElementById("itemlist").children.length !== 0) {
                    const task = document.getElementById("itemlist").querySelectorAll("li");
                    const weeknumber = document.getElementById("mainheading").textContent;
                    const day = document.getElementById("subheading").textContent;
                    const input = document.getElementById("titlenames").textContent;

                    const section = document.createElement("div");
                    section.id = "newdiv";
                    section.innerHTML = `
                        <p class="listhead">${input}</p>
                        <p class="listweek">${weeknumber}</p>
                        <p class="listday">${day}</p>
                        <div class="listicon">
                            <i class='bx bxs-down-arrow icondown'></i>
                            <i class='bx bxs-up-arrow iconup'></i>
                        </div>`;

                    const ul = document.createElement("ul");
                    ul.className = "ullist";
                    ul.style.display = "none";

                    task.forEach(item => {
                        const li = document.createElement("li");
                        li.textContent = item.firstChild.textContent;
                        li.className = "task-item";
                        ul.appendChild(li);

                        // Creating the delete button
                        const dltbtn = document.createElement("i");
                        dltbtn.className = "bx bxs-trash delete-btn";
                        li.appendChild(dltbtn);
                        dltbtn.addEventListener("click", () => {
                            ul.removeChild(li);
                            if (ul.children.length === 0) {
                                section.parentElement.removeChild(section);
                            }
                        });

                        // Creating the complete button
                        const cmpltbtn = document.createElement("i");
                        cmpltbtn.className = "bx bx-checkbox-checked cmplt-btn";
                        li.appendChild(cmpltbtn);
                        cmpltbtn.addEventListener("click", () => {
                            let cmpltlist = section.querySelector(".cmpltlist");
                            if (!cmpltlist) {
                                const head = document.createElement("p");
                                head.className = "cmplttitle";
                                head.textContent = "Completed Task";
                                section.appendChild(head);
                                cmpltlist = document.createElement("ul");
                                cmpltlist.className = "cmpltlist";
                                section.appendChild(cmpltlist);
                            }
                            ul.removeChild(li);
                            const list = document.createElement("li");
                            list.textContent = li.firstChild.textContent;
                            cmpltlist.appendChild(list);
                        });
                    });

                    section.appendChild(ul);
                    document.getElementById("Finallist").appendChild(section);
                    section.className = "section";

                    // Add event listeners for showing and hiding the task list
                    section.querySelector(".icondown").addEventListener("click", () => {
                        ul.style.display = "block";
                        section.querySelector(".icondown").style.display = "none";
                        section.querySelector(".iconup").style.display = "inline-block";
                    });

                    section.querySelector(".iconup").addEventListener("click", () => {
                        ul.style.display = "none";
                        section.querySelector(".icondown").style.display = "inline-block";
                        section.querySelector(".iconup").style.display = "none";
                    });

                    // Reset fields after finishing
                    document.getElementById("mainheading").textContent = "";
                    document.getElementById("subheading").textContent = "";
                    document.getElementById("itemlist").innerHTML = "";
                    document.getElementById("titlenames").innerHTML = "";
                    document.getElementById("list").style.display = "none";
                    document.getElementById("heading").style.display = "block";
                    document.getElementById("Week").value = "";
                    document.getElementById("Day").value = "";
                    document.getElementById("titleinput").value = "";

                    // Remove finish button after finishing
                    finish.remove();
                } else {
                    alert("Please add at least one item");
                }
            });
        }

        // Create list items
        const li = document.createElement("li");
        li.textContent = taskadd.value;
        addedtask.appendChild(li);

        // Creating the delete button
        const dltbtn = document.createElement("button");
        dltbtn.textContent = "Delete";
        li.appendChild(dltbtn);
        dltbtn.addEventListener("click", () => {
            addedtask.removeChild(li);
        });

        taskadd.value = "";
    } else {
        alert("Please enter all the fields");
    }
}
