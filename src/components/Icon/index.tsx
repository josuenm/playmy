import { Container } from "./styles";


interface IconProps {
    IconElement: any;
    notification?: number;
    isNotification: boolean;
    hoverColor?: string;
}


export function Icon({ 
    IconElement, notification = 0, isNotification, hoverColor = ''}: IconProps) {

    return (
        <Container data-hover={hoverColor}>
            {isNotification && notification > 0 && (
                <div className="notification">{notification}</div>
            )}


            <IconElement className="icon" />
        </Container>
    )
}