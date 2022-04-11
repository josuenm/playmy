import { Container } from "./styles";


interface IconProps {
    IconElement: any;
    notification?: number;
    isNotification: boolean;
}


export function Icon({IconElement, notification = 0, isNotification}: IconProps) {
    return (
        <Container>
            {isNotification && notification > 0 && (
                <div className="notification">1</div>
            )}
            <IconElement className="icon" />
        </Container>
    )
}