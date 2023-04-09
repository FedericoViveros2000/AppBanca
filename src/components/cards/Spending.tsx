import {BsArrowUp, BsArrowDown} from 'react-icons/bs';
const Spending = () => {
    return(
        <section className='container__section--spending'>
            <article className='container__spending'>
                <BsArrowUp/>
            </article>
            <article className='container__spending'>
                <BsArrowDown/>
            </article>
        </section>
    )
}

export default Spending;