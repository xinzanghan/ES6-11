// 类
// Es6中规定 class中只能定义静态方法不能定义静态属性
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._sex = -1;
  }
  // 在类的最顶层 定义属性
  // 有业务逻辑操作时，写get和set
  get sex() {
    if (this._sex === 0) {
      return "male";
    } else if (this._sex === 1) {
      return "female";
    } else {
      return "error";
    }
  }
  set sex(val) {
    if (val === 0 || val === 1) {
      this._sex = val;
    }
  }
  showName() {
    console.log(this.name);
  }
  // 定义静态方法
  static getCount() {
    return 5;
  }
}

// 在es5中定义静态属性
People.count = 0;
console.log(People.count);

let p1 = new People("wyh", 24);
console.log(p1);
p1.sex = 0; //1 male 0 female
console.log(p1.sex);
console.log(People.getCount());

// 继承
class Coder extends People {
  constructor(name, age, company) {
    //   子类继承父类的属性  用 super
    super(name, age);
    this.company = company;
  }
  showCompany() {
    console.log(this.company);
  }
}
let c1 = new Coder("jason", 40, "singer");
console.log(c1);
c1.showName();
c1.showCompany();
c1.sex = 1;
console.log(c1.sex);
console.log(Coder.getCount());
