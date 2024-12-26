import { Link } from "react-router-dom";

export default function SpecialCard(props){

    return(

        <article className="menu-card">
            <img src={props.image} alt="special-menu"/>
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.discription}</p>
                <Link className="special-button" to="/Order">Order for Delivery</Link>

            </section>
        </article>
    )

}