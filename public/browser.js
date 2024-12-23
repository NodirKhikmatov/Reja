console.log("front end js ishga tuwdi");

function itemTemplate(item) {
  return ` <li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
  >
    <span class="item-text">${item.reja} </span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn-secondary btn-sm mr-1" >
        O'zgarish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm" >
        Ochirish
      </button>
    </div>
  </li> `;
}
const createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("iltimos qaytadan harakat qilin");
    });
});

document.addEventListener("click", function (e) {
  // console.log(e);
  //delete oper
  if (e.target.classList.contains("delete-me")) {
    //alert("siz delete tugmasini bosdingiz");
    if (confirm("r u sure?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("try again");
        });
    }
  }
  //edit oper
  if (e.target.classList.contains("edit-me")) {
    // alert("siz edit tugmasini bosdingiz");
    let userInput = prompt(
      "change input",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      // console.log(userInput);
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("try again");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", () => {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
