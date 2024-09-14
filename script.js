function loadUsers() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {

      let users = JSON.parse(this.responseText);
      for (let i in users) {

        let li = document.createElement('li');
        li.classList = 'list-group-item user-item text-left ';

        let img = document.createElement('img');
        img.className = 'img-circle img-user img-thumbnail';
        img.setAttribute('src', users[i].avatar_url);
        li.append(img);
        console.log(li);


        let h3 = document.createElement('h3');
        let a = document.createElement('a');
        a.innerText = users[i].login;
        h3.append(a);
        img.after(h3);
        document.querySelector('.list-group').append(li);
      }
    }
  }

  xhr.send();
}
loadUsers();


// ! this is a test for gh
// ! this is a test2222 for gh
let amir;

// let url = `https://api.github.com/users`;
// let myUsers = null

// function loadUsers(url) {
//   fetch(url).then(res => {



//     console.log(res);
//   }).then(data => console.log(data)).finally(console.log(`finally`))
// }

// loadUsers(url)

// myUsers.forEach(user => {
//   console.log(user);

// });