import { FunctionComponent } from "react";
import { Box, Paper } from "@mui/material";
import { useFormik } from "formik";
import { Form, FormField } from "./newLawComponents";
import { Button } from "../../components/shared/button";
import { ILawProps } from "../../interfaces/interfaces";
import { LAW_FIELDS } from "../../constants";
import { schemaNewLaw } from "../../utils";

export const NewLaw: FunctionComponent = () => {
  const formik = useFormik({
    initialValues: {
      lawTitle: "",
      lawName: "",
      author: "",
      description: "",
    },
    validationSchema: schemaNewLaw,
    onSubmit: async ({ lawTitle, lawName, author, description }: ILawProps) => {
      console.log(lawTitle, lawName, author, description);
      console.log('hey');
    },
  });
  return (
    <Box>
      <Paper elevation={3} sx={{ width: "500px", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Form>
            {LAW_FIELDS.map(({ type, label, registerValue }) => (
              <FormField
                key={label}
                id={registerValue}
                name={registerValue}
                type={type}
                label={`Enter ${label}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                defaultValue={formik.initialValues[registerValue]}
                error={!!formik.errors[registerValue]}
                helperText={formik.errors[registerValue]}
              />
            ))}
            <Button type="submit">SAVE</Button>
          </Form>
        </Box>
      </Paper>
    </Box>
  );
};
