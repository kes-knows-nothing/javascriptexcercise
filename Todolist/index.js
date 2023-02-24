
let to_do_list = [];
let input = prompt("What would you like to do?");

while  (input !== "quit") {
    input = prompt("What would you like to do?");
    if (input === "new") {
        let add = prompt("Enter new to do")
        to_do_list.push(add)
        console.log(`${add} added to list`)
    } else if (input === "list") {
      console.log("**************************")
        for (let i = 0; i < to_do_list.length; i++) {
          console.log(`${i}: ${to_do_list[i]}`);
        }
      console.log("**************************")
    } else if (input === "delete") {
        const index = parseInt(prompt("Ok, enter an index to delete:"));
        if(!Number.isNaN(index)) {
          to_do_list.slice(index, 1);
          console.log(`Ok, deleted ${deleted[0]}`);
        }
    } else {
        console.log("it is not a vaild input");
    }

console.log("OK, YOU QUIT THE APP")