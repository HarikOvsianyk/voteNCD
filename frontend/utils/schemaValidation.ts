import * as yup from "yup";

export const schemaNewLaw = yup
  .object({
    lawName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Surname should not contain numbers")
      .required("Name is required field"),
    author: yup
      .string()
      .matches(/^([^0-9]*)$/, "Surname should not contain numbers")
      .required("Author is required field"),
    description: yup
      .string()
      .matches(/^([^0-9]*)$/, "Description should not contain numbers")
      .required("Description is required field"),
  })
  .required();
