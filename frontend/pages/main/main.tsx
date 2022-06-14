import { FunctionComponent } from 'react';
import { Card } from '../../components/card';
import './main.scss';

export const Main: FunctionComponent = () => {
    return (
        <div className='main'>
        <Card lawTitle='Criminal' lawName='Against Russian Invasion' expirationDate='2022-09-09' inFavor='202200' against='1020'/>
        <Card lawTitle='Civil' lawName='Change retirement age' expirationDate='2022-10-10' inFavor='202200' against='1020'/>
        </div>
    )
}