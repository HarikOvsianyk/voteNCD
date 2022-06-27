import { FunctionComponent, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Paper, MenuItem } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Form, FormField } from "./newVoteComponents";
import { Button } from "../../components";
import { Spinner } from "../../components";
import { IVoteProps } from "../../interfaces/interfaces";
import { VOTE_FIELDS, titles } from "../../constants";
import { schemaNewVote } from "../../utils";
import { Context } from "../../context/context";

export const NewVote: FunctionComponent = () => {
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1);
  const navigate = useNavigate();
  const { spinner, spinnerOn, spinnerOff } = useContext(Context);
  const [date, setDate] = useState<number>(tomorrow);
  const formik = useFormik({
    initialValues: {
      expirationDate: "",
      forVote: 0,
      against: 0,
      voteTitle: "",
      voteName: "",
      author: "",
      description: "",
      id: "",
    },
    validationSchema: schemaNewVote,
    onSubmit: async (data: IVoteProps) => {
      spinnerOn?.();
      data.id = uuidv4().slice(0, 7);
      data.expirationDate = new Date(date).toLocaleDateString() as string;
      await window.contract.addToVotesMap({ vote: data });
      spinnerOff?.();
      formik.resetForm(); // doesn't work
      toast.success(`You've created new vote ${data.voteTitle} ${data.voteName}`);
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
                  minDate={tomorrow}
                  inputFormat="MM/dd/yyyy"
                  views={["year", "month", "day"]}
                  onChange={(newValue) => {
                    setDate(newValue!);
                  }}
                  renderInput={(params) => <FormField {...params} />}
                />
              </LocalizationProvider>
              {VOTE_FIELDS.map(({ type, label, registerValue }) => (
                <FormField
                  key={label}
                  id={registerValue}
                  name={registerValue}
                  type={type}
                  select={registerValue === "voteTitle" ? true : false}
                  label={`Enter ${label}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  multiline={true}
                  rows={registerValue === "description" ? 3 : 1}
                  defaultValue={formik.initialValues[registerValue]}
                  error={!!formik.errors[registerValue]}
                  helperText={formik.errors[registerValue]}
                >
                  {registerValue === "voteTitle"
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
