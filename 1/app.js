let user = parseInt(prompt("Iltimos nechta son kiritmoqchi ekanligizni yozing: "));

var user2 = [];

for (let i = 0; i < user; i++) {
    let user1 = parseInt(prompt(`Iltimos ${i + 1} - sonni kiriting: `));
    user2.push(user1);
}

let user3 = user2.reduce((a, b) => a + b);

alert(`Natija: ${user3}`);