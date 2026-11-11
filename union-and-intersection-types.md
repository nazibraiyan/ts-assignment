# Combining Union and Intersection Types in TypeScript

## Introduction

In Typescript, we often need to describe data that can have different shapes. Sometimes a value can be one of several types, while in other situations we need to combine multiple types. Here Typescript provides two useful features for this purpose: Union (`|`) and Intersection (`&`) types.

## Understanding with a Practical Example

Let's imagine a scenario where we are developing an online payment system.
Customers can pay using either a credit card or cash. Each payment method requires different types of informations.

We can use a Union Type to represent these two payment options.
Example:

type CardPayment = {
  cardNumber: string;
};

type CashPayment = {
  cashReceived: number;
};

type PaymentMethod = CardPayment | CashPayment;
```

Here, `|` means that a payment can be either a card payment or a cash payment.

Now, every payment should also contain some common informations, such as an ID and an amount. We can use an Intersection Type to combine these properties with our payment methods.

```
type Payment = PaymentMethod & {
  id: number;
  amount: number;
};
```

Now, a Payment must contain the common properties as well as the properties of one of the payment methods.

## Conclusion

Union and Intersection types make TypeScript more flexible and useful. Union allows us to work with multiple possible types, while Intersection combines multiple type requirements into one.
Using them together helps us represent real-world data more clearly and maintain better type safety.