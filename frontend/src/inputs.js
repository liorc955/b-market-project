const textRegex = /^[A-Za-z]+$/;
export const addressInputs = [
  {
    contrains: {
      required: `Provide a valid street address`,
      pattern: {
        value: /^[A-Za-z0-9\s]+$/,
        message: "Provide a valid street address",
      },
    },
    type: "text",
    keyName: "street",
    labelName: "Street",
  },
  {
    contrains: {
      required: "Provide a valid city",
      maxLength: 80,
      pattern: {
        value: textRegex,
        message: "Provide a valid city",
      },
    },
    type: "text",
    keyName: "city",
    labelName: "City",
  },
  {
    contrains: {
      required: "Provide a valid state",
      maxLength: {
        value: 10,
        message: "Provide a valid state",
      },
      pattern: {
        value: textRegex,
        message: "Provide a valid state",
      },
    },
    type: "text",
    keyName: "state",
    labelName: "State",
  },
  {
    contrains: {
      required: "Provide a valid zip code",
      maxLength: {
        value: 7,
        message: "Provide a valid zip code",
      },
      pattern: {
        value: /^\d+$/,
        message: "Provide a valid zip code",
      },
    },
    type: "text",
    keyName: "zipCode",
    labelName: "Zip Code",
  },
];

export const loginInputs = [
  {
    contrains: {
      required: "Provide a valid username",
      maxLength: {
        value: 10,
        message: "Provide a valid username",
      },
    },
    type: "text",
    keyName: "username",
    labelName: "Username",
  },
  {
    contrains: {
      required: "Provide a valid password",
      maxLength: {
        value: 12,
        message: "Provide a valid password",
      },
    },
    type: "password",
    keyName: "password",
    labelName: "Password",
  },
];

export const userInputs = [
  {
    contrains: {
      required: "Provide a valid first name",
      pattern: {
        value: textRegex,
        message: "Provide a valid first name",
      },
    },
    type: "text",
    keyName: "firstName",
    labelName: "First Name",
  },
  {
    contrains: {
      required: "Provide a valid last name",
      pattern: {
        value: textRegex,
        message: "Provide a valid last name",
      },
    },
    type: "text",
    keyName: "lastName",
    labelName: "Last Name",
  },
  {
    contrains: {
      required: "Provide a valid email",
    },
    type: "email",
    keyName: "email",
    labelName: "Email",
  },
];
