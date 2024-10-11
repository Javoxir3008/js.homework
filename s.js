
let name = 'Alex';
let money = 10000;
let account = 7777;

let u = prompt("Как вас зовут?");

switch (u) {
  case name:  
    const e = prompt("Номер счета?");
    switch (e) {
      case account.toString():
        console.log("Номер счета?", account);
        const w = prompt("Сколько обналичить?");
        switch (true) {
          case w <= money:
            console.log("Все отлично");
            money -= w;
            console.log("Сколько снял?", w);
            console.log("Сколько осталось?", money);
            break;
          default:
            console.log("Недостаточно средств");
        }
        break;
      default:
        console.log("Неверный номер счета");
    }
    break;
  default:
    console.log("Пользователь не найден, досвидули", name);
}
