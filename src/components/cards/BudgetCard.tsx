interface Props {
children?: JSX.Element;
}

const BudgetCard = ({children}: Props) => {
    return(
        <>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
            <li className="container__target--budget target"></li>
        </>
    )
}

export default BudgetCard;