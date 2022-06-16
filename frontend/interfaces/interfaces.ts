export interface ICardProps {
    lawTitle: string;
    lawName: string;
    expirationDate: string;
    inFavor: string;
    against: string;
}

export interface ILawProps extends ICardProps{
    descriptopn: string;
}