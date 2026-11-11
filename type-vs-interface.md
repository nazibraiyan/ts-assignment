# Type Alias versus Interface in TypeScript

##

TypeScript has two ways to define data structure. Types and Interface. They look somewhat similar.But  They have some differences in their features and uses.

## Understanding Type Alias

A Type Alias lets us create a custom name for any type. It can represent objects, basic types, union types and tuples.

**Example:**
```typescript

type Student = {

name: string;

age: number;

};

type Status = "active" | "inactive";

```

Here Student represents an object structure while Status represents a union of two string values.

## Understanding Interface

An Interface is mainly used to define the structure of an object.
It specifies which properties an object should have and their types.

**Example:**

```typescript
interface Student {

name: string;

age: number;

}

```

Both Type Alias and Interface can describe the object structure.

## Key Differences

A major difference is declaration. Interfaces use the extends keyword, where Type Aliases commonly use the intersection operator (&).

Another important difference is declaration  of merging. Multiple declarations with the interface name can be automatically combined.
Type Aliases do not support this feature.

##

Both type alias and interface are useful in Typescript. Interfaces are suitable for defining object structures while type aliases provide flexibility, for creating different types.