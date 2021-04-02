const hello = (name: string) => {
  console.log('hello' + name)
}

hello('')

let isBoolean: boolean = false
isBoolean = true

let arr: number[] = [1, 2, 3]

let stringArr: string[] = ['1', '2']

let anyArr: any[] = [1, '2']

let a: Array<number> = [1,2,3]


// 对象一般是用接口去约束 也可以描述函数类型

interface Person {
  // 只读属性
  readonly id: number
  name: string
  age: number
  // ?表示可以赋值也可以不赋值 必须定义在最后
  size?: number
}

interface ISum {
  // 声明返回类型使用冒号
  (x: number, y: number, z?: number): number
}

// 接口形式定义函数

interface Sum{
  (x:number,y:number):number
}

let mySum:Sum
mySum = (x:number,y: number):number=>{
  return x+y
}

let xiaoming: Person = {
  id: 123,
  name: 'xiaoming',
  age: 123,
  size: 123,
}

// 函数 参数类型，返回值类型
function add(x: number, y: number): number {
  return x + y
}

const add1 = (x: number, y: number): number => {
  return x + y
}

// 类型推论 : ts 会自动推论出类型

// 联合类型 union types 只能访问共有属性
let numerOrString: number | string = '1' + 2

function fn(a: number, b: string): any {
  return a + b
}

// 类型断言： 当你typescript无法判断类型 你来指定它的返回类型

function getLength(input: number | string): number {
  // 断定 input为string类型
  let str = input as string
  if (str.length) {
    return str.length
  } else {
    let numer = input as number
    return numer.toString.length
  }
}

// type guard 智能缩小类型范围

function getLength2(input: number | string): number{
  // 判断input条件内 一个是number 另一个必定为string
  if(typeof input === 'number'){
    return input.toString.length
  }else{
    return input.length
  }
}


// 引入第三方 或者自定义方法  1. 定义.d.ts文件  2. 安装第三方库@types/..  大多数库都自带
JQuery("#f")


// 全局 object 很多个

// type 定义类型别名

type Name = string
function f1(n: Name): string{
  return n
}



// enum 枚举

const enum p{
  UP,
  DOWN,
  LEFT,
  RIGHT
}

console.log(p.DOWN)
