import { FunctionComponent } from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  LawWrapper,
  LawTitle,
  LawName,
  LawExpDate,
  WrapperVoices,
} from "./lawPageComponents";
import { Button } from "../../components";
// import { ICardProps } from "../../interfaces/interfaces";

// interface ILawProps extends ICardProps {
//   description: string;
// } // ask about union type ICardProps and ILawProps

const law = [
  {
    lawTitle: "Civil",
    author: "Harik Ovsianyk",
    lawName: "Change retirement age",
    expirationDate: "2022-10-10",
    forVote: "202200",
    against: "202200",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    id: 2,
  },
];

export const LawPage: FunctionComponent = ({}) => {
  return (
    <LawWrapper>
      <Paper elevation={3} sx={{ width: "500px" }}>
        {law.map(
          ({
            lawTitle,
            lawName,
            expirationDate,
            forVote,
            against,
            description,
            author,
          }) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
              }}
            >
              <LawTitle>{lawTitle}</LawTitle>
              <LawName>{lawName}</LawName>
              <LawTitle>{author}</LawTitle>
              <LawExpDate>Until: {expirationDate}</LawExpDate>
              <Box
                sx={{
                  width: '100%',
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <WrapperVoices>
                  <Typography sx={{ textAlign: "center" }}>
                    For:{" "}
                    <Typography sx={{ color: "green" }}>{forVote}</Typography>
                  </Typography>
                  <Button>For</Button>
                </WrapperVoices>
                <WrapperVoices>
                  <Typography sx={{ textAlign: "center" }}>
                    Against:{" "}
                    <Typography sx={{ color: "red" }}>{against}</Typography>
                  </Typography>
                  <Button>Against</Button>
                </WrapperVoices>
              </Box>
              <Box sx={{ m: 2, textAlign: "justify" }}>{description}</Box>
            </Box>
          )
        )}
      </Paper>
    </LawWrapper>
  );
};
