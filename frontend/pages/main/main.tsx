import { FunctionComponent, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Card, Button } from "../../components";

export const Main: FunctionComponent = () => {
  const [votes, setVotes] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const getVotes = async () => {
  //     setVotes(await window.contract.(???));
  //   };
  //   getVotes();
  // },[]);
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', alignItems: 'flex-start', p:2, width: '70vw' }}>
      {votes.map(({ lawName, lawTitle, author, expirationDate, forVote , against, id, description  }) => (
          <Card 
          key={lawName}
          lawTitle={lawTitle}
          author={author}
          lawName={lawName}
          // expirationDate={expirationDate}
          forVote={forVote}
          against={against}
          id={id}
          description={description}
          />
      ))}
      <Button onClick={() => navigate('/new')}>Add new vote</Button>
    </Box>
  );
};
