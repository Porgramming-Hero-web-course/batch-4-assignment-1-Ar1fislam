# Blog-3

## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### What is Type Guard?

Type Guards are essential for making the codebase more reliable and ensuring more type safety in typescript.  As after compilation, the codebase is converted to javascript, so Type Guards helps to check type during compile time and ensure type safety before runtime.

### Why is Type Guards Necessary?

Type guards are necessary to shortlist the type of a variable can have at runtime, ensuring type safety. A function might receive a parameter that can be multiple type like string, array etc. Through type guards we can ensure the safety by providing some conditions or methods.

### Types of Type Guard

### 1. typeof Type Guard

For checking type of primitive value like string, number, typeof operator is used.

```javascript
function returnNumStr(value: string | number) {
  if (typeof value === "string") {
    // TypeScript now know below value is string
    return value;
  } else {
    // TypeScript knows below value is number
    return value;
  }
}
```

### 2. instanceof Type Guard

The instanceof operator verify an object is belong to a class or constructor.

```javascript
class Dog {
  bark() {
    console.log('woof');
  }
}
class Cat {
  meow() {
    console.log('meow');
  }
}

function makeSound(animal: Dog | Cat): void {
//here animal is instanceof Dog we specifically saying
  if (animal instanceof Dog) {
    animal.bark();
  } 
else {
    animal.meow();
  }
}
```

### 3. in operator Type Guard

in operator check if a property exist in a object or not.

```javascript
class Dog {
  bark() {
    console.log('woof');
  }
}
class Cat {
  meow() {
    console.log('meow');
  }
}

function makeSound(animal: Dog | Cat): void {
//here checking if bark property is belong to animal object
  if ('bark' in animal) {
    animal.bark();
  } 
else {
    animal.meow();
  }
}
```

### 4. Custom Type Guard

A custom type guard function returns a boolean and uses the 'is' keyword to indicate a narrowed type.

```javascript
class Dog {
type: "dog";
}
class Cat {
 type: "cat";
}

function isDog(animal: Dog | Cat): animal is Dog {
  return animal.type === "dog";
}
```

### Conclusion

So we can say that type guards are essential for type safety, readability and prevent errors in codebase.