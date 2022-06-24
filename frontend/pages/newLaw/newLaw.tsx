import { FunctionComponent, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Paper, MenuItem } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Form, FormField } from "./newLawComponents";
import { Button } from "../../components/shared/button";
import { Spinner } from "../../components";
import { IVoteProps } from "../../interfaces/interfaces";
import { LAW_FIELDS } from "../../constants";
import { schemaNewLaw } from "../../utils";
import { Context } from "../../context/context";

const titles = [
  {
    value: "Title 1—General Provisions",
    label: "Title 1—General Provisions",
  },
  {
    value: "Title 2—The Congress",
    label: "Title 2—The Congress",
  },
  {
    value: "Title 3—The President",
    label: "Title 3—The President",
  },
  {
    value: "Title 4—Flag And Seal, Seat Of Government, And The States",
    label: "Title 4—Flag And Seal, Seat Of Government, And The States",
  },
];

export const NewLaw: FunctionComponent = () => {
  const navigate = useNavigate();
  const { spinner, spinnerOn, spinnerOff } = useContext(Context);
  const [date, setDate] = useState<string | any>("");
  const formik = useFormik({
    initialValues: {
      expirationDate: "",
      forVote: "",
      against: "",
      lawTitle: "",
      lawName: "",
      author: "",
      description: "",
      id: "",
    },
    validationSchema: schemaNewLaw,
    onSubmit: async (data: IVoteProps) => {
      spinnerOn?.();
      data.id = uuidv4().slice(0, 7);
      data.expirationDate = date.toLocaleDateString();
      await window.contract.addToVotesMap({ vote: data });
      spinnerOff?.();
      formik.resetForm(); // doesn't work
      navigate("/main");
    },
  });
  return (
    <Box>
      {spinner ? (
        <Spinner />
      ) : (
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
            <Form onSubmit={formik.handleSubmit}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Expiration date"
                  disablePast={true}
                  value={date}
                  inputFormat="MM/dd/yyyy"
                  views={["year", "month", "day"]}
                  onChange={(newValue) => {
                    setDate(newValue!);
                  }}
                  renderInput={(params) => <FormField {...params} />}
                />
              </LocalizationProvider>
              {LAW_FIELDS.map(({ type, label, registerValue }) => (
                <FormField
                  key={label}
                  id={registerValue}
                  name={registerValue}
                  type={type}
                  select={registerValue === "lawTitle" ? true : false}
                  label={`Enter ${label}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  multiline={true}
                  rows={registerValue === "description" ? 3 : 1}
                  defaultValue={formik.initialValues[registerValue]}
                  error={!!formik.errors[registerValue]}
                  helperText={formik.errors[registerValue]}
                >
                  {registerValue === "lawTitle"
                    ? titles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    : ""}
                </FormField>
              ))}
              <Button type="submit" sx={{ mt: 5 }}>
                SAVE
              </Button>
            </Form>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
