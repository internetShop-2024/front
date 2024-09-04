import "./dist/review.css"
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';





export function Review({review}){


    const isoDate = review.createdAt;
    const formattedDate = format(new Date(isoDate), 'd MMMM yyyy', { locale: uk });

    console.log(formattedDate); 

    return(
        <div className="review">
            <span className="review_name">{review.fullname}</span>
            <span className="review_text">Відгук покупця:</span>
            <span className="review_text">{review.content.text}</span>
            <span className="review_date">{formattedDate}</span>
        </div>
    )
}