class StringBuilder {
constructor(value) {
    this._value = value
}
append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }

  get value() {
    return this._value;
  }
//   я нічого не поняв і користувався чатом гпт у цьому і 5 завданні
}
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // Виведе: .^
builder.prepend('^');
console.log(builder.value); // Виведе: ^.^
builder.pad('=');
console.log(builder.value); // Виведе: =^.^=


class Car {
    // Конструктор отримує об'єкт налаштувань
    constructor({ maxSpeed, price }) {
      this.maxSpeed = maxSpeed; // Максимальна швидкість
      this._price = price; // Ціна автомобіля
      this.speed = 0; // Поточна швидкість, початкова 0
      this.isOn = false; // Автомобіль вимкнений спочатку
      this.distance = 0; // Загальний кілометраж, спочатку 0
    }
  
    // Геттер для властивості price
    get price() {
      return this._price;
    }
  
    // Сеттер для властивості price
    set price(newPrice) {
      this._price = newPrice;
    }
  
    // Метод для заведення автомобіля
    turnOn() {
      this.isOn = true;
    }
  
    // Метод для вимкнення автомобіля
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  
    // Метод для збільшення швидкості
    accelerate(value) {
      if (this.speed + value <= this.maxSpeed) {
        this.speed += value;
      } else {
        this.speed = this.maxSpeed;
      }
    }
  
    // Метод для зменшення швидкості
    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value;
      } else {
        this.speed = 0;
      }
    }
  
    // Метод для додавання кілометражу
    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
  
    // Статичний метод для виведення характеристик автомобіля
    static getSpecs(car) {
      console.log(
        `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
      );
    }
  }
  
  // Приклад використання
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // Виведе: maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // Виведе: maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // Виведе: 2000
  mustang.price = 4000;
  console.log(mustang.price); // Виведе: 4000