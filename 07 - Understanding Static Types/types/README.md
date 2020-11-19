# THE ALTERNATIVE TYPE ASSERTION SYNTAX

Type assertion can also be performed using an angle bracket syntax, so that this statement

```TypeScript
...
let taxString = calculateTax(100, true) as string;
...
```

is equivalent to this statement

```TypeScript
...
let taxString = <string> calculateTax(100, true);
...
```

The problem is that it cannot be used in TSX files
