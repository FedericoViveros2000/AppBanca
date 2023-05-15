import './styles/budget.css';

interface Props {
   // children?: JSX.Element;
    bgColor: string;
}

const BudgetCard = ({bgColor}: Props) => {
    return(
        <>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
            <li className={`container__target--budget target ${bgColor}`}></li>
        </>
    )
}

export default BudgetCard;