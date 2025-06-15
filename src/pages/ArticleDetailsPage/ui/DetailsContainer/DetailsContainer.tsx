import {memo} from "react";
import {useParams} from "react-router-dom";
import {Card} from "@/shared/ui/redesigned/Card";
import {ArticleDetails} from "@/entities/Article";

interface DetailsContainerProps {
    className?: string;
}
export const DetailsContainer = memo( (props: DetailsContainerProps) => {
    const {className} = props;
    let { id } = useParams<{ id: string }>();
    if (__PROJECT__ === 'storybook') {
        id = '1';
    }

    return (
        <Card className={className} padding='24' borderForm="half-round" fullWidth>
            <ArticleDetails id={id} />
        </Card>
    )
})
