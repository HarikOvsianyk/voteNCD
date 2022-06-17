import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { Card } from "../../components";

const laws = [
  {
    lawTitle: "Criminal",
    lawName: "Against Russian Invasion",
    author: 'Harik Ovsianyk',
    expirationDate: "2022-09-09",
    inFavor: "202200",
    against: "202200",
    id: 1
  },
  {
    lawTitle: "Civil",
    lawName: "Change retirement age",
    author: 'Harik Ovsianyk',
    expirationDate: "2022-10-10",
    inFavor: "202200",
    against: "202200", 
    id: 2
  }
];

export const Main: FunctionComponent = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {laws.map(({lawTitle, lawName,expirationDate,inFavor, against, id, author  }) => (
          <Card 
          lawTitle={lawTitle}
          author={author}
          lawName={lawName}
          expirationDate={expirationDate}
          inFavor={inFavor}
          against={against}
          id={id}
          />
      ))}
    </Box>
  );
};
