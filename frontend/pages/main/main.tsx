import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card, Button, Spinner } from "../../components";
import { Context } from "../../context/context";

export const Main: FunctionComponent = () => {
  const { spinner, spinnerOn, spinnerOff } = useContext(Context);
  const [votes, setVotes] = useState([]);
  const navigate = useNavigate();
  const getMainData = async () => {
    const data = await window.contract.getAllVotes();
    setVotes(data);
    spinnerOff?.();
  }
  useEffect(() => {
    spinnerOn?.();
    getMainData();
  }, []);
  return (
    <>
      {spinner ? (
        <Box>
          <Spinner />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "stretch",
            alignSelf: 'flex-start',
            p: 2,
            width: "70vw",
          }}
        >
          {votes.map(
            ({
              voteName,
              voteTitle,
              author,
              expirationDate,
              forVote,
              against,
              id,
              description,
            }) => (
              <Card
                key={id}
                voteTitle={voteTitle}
                author={author}
                voteName={voteName}
                expirationDate={expirationDate}
                forVote={forVote}
                against={against}
                id={id}
                description={description}
              />
            )
          )}
          <Button onClick={() => navigate("/newvote")} sx={{height: '35px'}}>Add new vote</Button>
        </Box>
      )}
    </>
  );
};
