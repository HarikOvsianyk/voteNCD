import { FunctionComponent } from 'react';
import {
    Box,
  } from "@mui/material";
import { Card } from '../../components/card/card';

export const Main: FunctionComponent = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Card lawTitle='Criminal' lawName='Against Russian Invasion' expirationDate='2022-09-09' inFavor='202200' against='1020'/>
        <Card lawTitle='Civil' lawName='Change retirement age' expirationDate='2022-10-10' inFavor='202200' against='1020'/>
        </Box>
    )
}