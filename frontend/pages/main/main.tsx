import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, Button, Spinner } from "../../components";
import { Context } from "../../context/context";
import { IVoteProps } from "../../interfaces/interfaces";

export const Main: FunctionComponent = () => {
  const { spinner, spinnerOn, spinnerOff } = useContext(Context);
  const [votes, setVotes] = useState<IVoteProps[]>([]);
  const navigate = useNavigate();
  const getMainData = async () => {
    try {
      spinnerOn?.();
      const data = await window.contract.getAllVotes();
      setVotes(data);
      spinnerOff?.();
    } catch (err) {
      spinnerOff?.();
      console.log(err);
      toast.error("Votes is not available. Try again!");
    }
  };
  useEffect(() => {
    getMainData();
  }, []);
  return (
    <>
      {spinner ? (
        <Box>
          <Spinner />
        </Box>
      ) : (
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: 'center',
              flexWrap: "wrap",
              alignItems: "stretch",
              alignSelf: "flex-start",
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
          </Box>
          <Box>
            <Button
              onClick={() => navigate("/newvote")}
              sx={{ height: "35px", margin: "16px" }}
            >
              Add new vote
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
