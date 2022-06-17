export interface ICardProps {
    lawTitle: string;
    lawName: string;
    expirationDate: string;
    inFavor: string;
    against: string;
    id: string | number;
}

export interface ILawProps extends ICardProps{
    descriptopn: string;
}