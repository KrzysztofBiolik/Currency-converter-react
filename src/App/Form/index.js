import { useState } from "react";
import { Result } from "./Result";
import { currencies } from "../currencies";
import "./style.css";

export const Form = ({calculateResult, result}) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="header">
                Kalkulator walut
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w zł*:
                    </span>
                    <input className="form__field"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
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
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p >
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            <Result result={result} />
        </form >
    )
};