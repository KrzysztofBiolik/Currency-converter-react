import { Result } from "./Result";
import "./style.css";

export const Form = () => (

    <form className="form" >
        <h1 className="header">
            Kalkulator walut
        </h1>
        <p>
            <label>
                <span className="form__labelText">
                    Kwota w zł*:
                </span>
                <input className="form__field"
                    type="number"
                    required
                    step="0.01"
                    placeholder="Wpisz kwotę w zł"
                />
            </label>
        </p>
        <p>
            <label>
                <span className="form__labelText">
                    Waluta:
                </span>
                <select className="form__field"
                    value
                >
                </select>
            </label>
        </p >
        <p>
            <button className="form__button">Przelicz!</button>
        </p>
        <Result />
    </form >
);