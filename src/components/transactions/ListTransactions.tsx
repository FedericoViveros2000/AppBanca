import {MdWork} from 'react-icons/md'


const ListTransaction = () => {
return(
<article className='container__transations'>
    <div className="container__transactions--title">
        <h2 className='font-blue font-regular-text-bold'>Transactions</h2>
        <span>See All</span>
    </div>
    <ul className="container__items">
        <li className="items">
            <div className='container__info'>
                <figure className='items__icon'>
                    <MdWork />
                </figure>
                <p>
                    Freelance Work
                    <span className="date__transaction">
                        Apr 28
                    </span>
                </p>
            </div>
            <p>+2600</p>
        </li>
        <li className="items">
            <div className='container__info'>
                <figure className='items__icon'>
                    <MdWork />
                </figure>
                <p>
                    Freelance Work
                    <span className="date__transaction">
                        Apr 28
                    </span>
                </p>
            </div>
            <p>+2600</p>
        </li>
        <li className="items">
            <div className='container__info'>
                <figure className='items__icon'>
                    <MdWork />
                </figure>
                <p>
                    Freelance Work
                    <span className="date__transaction">
                        Apr 28
                    </span>
                </p>
            </div>
            <p>+2600</p>
        </li>
    </ul>
</article>
)
}

export default ListTransaction;