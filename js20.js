//1. Через клас створити об'єкт People який всі дані отримує ззовні з полями:name, f_name, old, isMarried, hasPossition, children Вивести об'єкт в консоль.
console.log('1. Через клас створити обєкт People який всі дані отримує ззовні з полями:name, f_name, old, isMarried, hasPossition, children Вивести обєкт в консоль.');
class People {
    constructor(name, f_name, old, isMarried, hasPossition, children) {
        this.name = name 
        this.f_name = f_name 
        this.old = old 
        this.isMarried = isMarried 
        this.hasPossition = hasPossition 
        this.children = children
    }
}
const a1 = new People('Pavel', 'Pavlovich', 30, true, 'IT', false);
console.log(a1);
//2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice
console.log('2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice');
class ShortWork {
    constructor(arr) {
        this.arr = arr;
    }
    filter(cb) {
        let res = [];
        for(let i = 0; i < this.arr.length; i++) {
            if(cb(this.arr[i], i, this.arr)) {
                res.push(this.arr[i])
            } 
        } return res; 
    } 
    find(cb) {
        for(let i = 0; i < this.arr.length; i++) {
            if(cb(this.arr[i], i, this.arr)) {
                return this.arr[i];
            }
        } return undefined;
    }
    includes(val) {
        for(let i = 0; i < this.arr.length; i++) {
            if(val === this.arr[i]) {
                return true
            } 
        } return false;
    }
    join(sep = ',') {
        let res = '';
        for(let i = 0; i < this.arr.length; i++) {
            if(i > 0) res + sep;
            res += this.arr[i];
        } return res;
    }
    slice(start, end) {
        let res = [];
        for(let i = start || 0; i < (end || this.arr.length); i++) {
            res.push(this.arr[i]);
        } return res;
    }
}
const fil = new ShortWork([1, 2, 3, 4, 5]);
console.log('filter', fil.filter(num => num < 3));
console.log('find', fil.find(num => num === 3));
console.log('includes', fil.includes(3));
console.log('join', fil.join(''));
console.log('slice', fil.slice(1, 3));
//3. Через клас створити об'єкт Car який всі дані отримує ззовні  з полями: name, model, year, isNew, cost, wheels Вивести об'єкт в консоль.
console.log('3. Через клас створити обєкт Car який всі дані отримує ззовні  з полями: name, model, year, isNew, cost, wheels Вивести обєкт в консоль.');
class Car {
    constructor(name, model, year, isNew, cost, wheels) {
        this.name = name 
        this.model = model
        this.year = year
        this.isNew = isNew
        this.cost = cost
        this.wheels = wheels
    }
}
const a2 = new Car('Nissan', 'Rogue', 2020, true, 25000, 7500);
console.log(a2);
//4. Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля, та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
console.log('4. Через клас створити обєкт Animal який отримує дані ззвоні, створити мінімум 3 поля, та додати через прототайп поведінку для обєкту (мінімум 2 методи).');
class Animal {
    constructor(name, old, wild) {
        this.name = name 
        this.old = old 
        this.wild = wild 
    }
    run() {
        console.log('animal run');
    }
    eat() {
    console.log('animal eat');
    }
}
const a3 = new Animal('Molly', 5, false);
console.log(a3);
a3.run();
a3.eat();
//5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal та додати власну поведінку (мінімум 2 методи).
console.log('5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal та додати власну поведінку (мінімум 2 методи).');
class Dog extends Animal {
    sleep() {
        super.eat()
        console.log('dog sleeping');
    }
    barks() {
        super.run()
        console.log('the dog barks');
    }
}
const a4 = new Dog('chappi', 2, false);
console.log(a4);
a4.sleep()
a4.barks()
//6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.
console.log('6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.');
class Poli {
    pol() {
        console.log('Поліморфізм - (багато форм),поліморфізм дозволяє різним об’єктам спільно використовувати той самий інтерфейс(батьківський класс), але поводитися по-різному залежно від своїх цілей виконання. Однакові методи в різних класах повторяються. Один з трьох основних методів ООП.');
    }
}
const a5 = new Poli;
a5.pol();
//7. Привести приклад поліморфізму.
console.log('7. Привести приклад поліморфізму.');
class Car1 {
    constructor(year, speed, model) {
        this.year = year
        this.speed = speed
        this.model = model
    }
    drive() {
        console.log('i drive');
    }
}
class SportCar extends Car1 {
    drive() {
        console.log('i drive fast');
    }
}
class ElectroCar extends Car1 {
    drive() {
    console.log('i drive on electro');
    }
}
const sport = new SportCar(2020, 500, 'Ferrari');
const electro = new ElectroCar(2022, 400, 'Tesla');
const cars = [sport, electro];
cars.forEach(car1 => car1.drive())
//8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.
console.log('8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.');
class Inc {
    inca() {
        console.log('Інкапсуляція - це частково, або повне закриття данних від доступу зовні. Один з трьох основних методів ООП. Має 3 модифікатор доступу(private - закриває доступ від сторонніх (доступно тільки в середені класу), public(за замовченням) - бачуть всі, protected - дає доступ тільки тим классам які наслідуються від нього)   ');
    }
}
const a8 = new Inc;
a8.inca()
//9. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.
console.log('9. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.');
class Calculator {
    constructor() {
      this._date = new Date(); 
    }
    get date() {
      return this._date;
    }
    set date(newDate) {
      this._date = new Date(newDate);
    }
    add(a, b) {
      this._updateDate();
      return a + b;
    }
    subtract(a, b) {
      this._updateDate();
      return a - b;
    }
    multiply(a, b) {
      this._updateDate();
      return a * b;
    }
    divide(a, b) {
      if (b === 0) {
        console.error("Помилка");
        return undefined;
      }
      this._updateDate();
      return a / b;
    }
    power(a, b) {
      this._updateDate();
      return Math.pow(a, b);
    }
    factorial(n) {
      if (n < 0) {
        console.error("Факторіал не визначений");
        return undefined;
      }
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      this._updateDate();
      return result;
    }
    squareRoot(a) {
      if (a < 0) {
        console.error("Корінь не існує");
        return undefined;
      }
      this._updateDate();
      return Math.sqrt(a);
    }
    _updateDate() {
      this._date = new Date();
    }
  }
  const calc = new Calculator();
  console.log("додавання", calc.add(5, 3));
  console.log("віднімання", calc.subtract(5, 3));
  console.log("множення", calc.multiply(5, 3));
  console.log("ділення", calc.divide(5, 3));
  console.log("степінь", calc.power(2, 3));
  console.log("факторіал", calc.factorial(5));
  console.log('корінь', calc.squareRoot(25));
  console.log("Дата:", calc.date);