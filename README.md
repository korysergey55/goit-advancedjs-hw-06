# Basic types

The goal of this homework is to solidify your skills in working with basic TypeScript types. You will work with types such as number, string, boolean, null, undefined, unknown, any, as well as tuples, enums, and unions of types.

At the end of the homework, you will also practice creating your own type based on existing objects. This will help you better understand how TypeScript can be used to ensure the typical security of your data and improve the quality of your code.


### Завдання 1
There is the following JavaScript code:

```ts
let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => { return 100 + a };
```

Convert this code to TypeScript by specifying the appropriate types for all variables.

### Завдання 2
A JavaScript variable can hold any type of value:
```ts
let anything = -20;
anything = 'Text';
anything = {};
```
What type do you assign to an anything variable in TypeScript to keep it flexible?

### Завдання 3
In TypeScript, the unknown type allows us to store any values, but we can assign an unknown variable directly to another variable if we are sure of its type. You have the following code:
```ts
let some:unknown;
some = 'Text';
let str: string;
str = some;
```
What needs to be fixed in this code to make it correct and safe?

### Завдання 4
You have the following JavaScript array:
```ts
let person = ['Max', 21];
```
How do  rewrite it in TypeScript using the concept of tuples to ensure that the first element is always a string and the second a number?

### Завдання 5
How do you define a variable in TypeScript that can accept a string or a number (union type)? And in the same way, define a variable that can take only one of two string values: 'enable' or 'disable' (literal type)?

### Завдання 6
You have the following JavaScript functions:
```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}
```
How do you specify the types for the arguments and return values ​​of these functions?

### Завдання 7
Create a function (isWeekend) that takes the day of the week (from your enum) and returns a boolean value indicating whether it is a weekday or a weekend.

### Завдання 8
Create a "Gender" type using a union type that can contain the values ​​"male", "female". Create a myGender variable of this type.
### Завдання 9
You have two objects:
```ts
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
```
Create a new data type that fits these two objects.

# Generic
The purpose of this task is to help you understand and apply generics in TypeScript. You will work with functions that return promises, use the built-in Pick type, combine objects using generics, and solve type problems in classes.

### Завдання 1
There is a getPromise() function that returns the promise allowed in an array containing strings and numbers. Complement this function using generics so that it returns the correct type.
```ts
function getPromise () {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then((data) => {
  console.log(data);
});
```
### Завдання 2
You have an AllType type. There is a compare function that accepts two objects. These objects contain AllType fields. Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType. The compare function should return AllType.
```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
```
### Завдання 3
You have a merge function that combines two objects. Use generics to indicate that these objects can be of any type.
```ts
function merge (objA, objB) {
  return Object.assign(objA, objB);
}
```
### Завдання 4
Use generics and interfaces to fix the error in the following classes:
```ts
class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
```
### Завдання 5
You need to implement the KeyValuePair interface, which describes a key-value pair. Use generics so that this interface can work with all key and value types.
```ts
interface KeyValuePair {
  key;
  value;
}
```
### Завдання 6
You have a user registration form. Sometimes you need to pre-fill the form with the user's data to update his profile. However, you don't always need to fill in all the fields. For example, the user may want to update only his email and password, leaving the first and last name unchanged.

Correct the type in the function argument so that there are no type errors.
```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: User) {
  // Оновлення користувача
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
```
### Завдання 7
You have a UserRole enumeration that is used to classify users in your application. You want to create a RoleDescription object that maps each user role to its description.
```ts
export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
```
### Завдання 8
You have a Form type that contains information about the form, including an errors field. You want to create a new Params type that includes all fields from the Form except errors.
```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params to disable the 'errors' field from the Form type
type Params = Form;
``