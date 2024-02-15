import { useState } from "react";
import { Result } from "./Result";
import { currencies } from "../currencies";
import { StyledForm, Header, LabelText, Field, Button } from "./styled";

export const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    const calculateResult = (currency, amount) => {
        const rate = currencies
            .find(({ short }) => short === currency).rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <Header>
                Kalkulator walut
            </Header>
            <p>
                <label>
                    <LabelText>
                        Kwota w zł*:
                    </LabelText>
                    <Field
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
                    <LabelText>
                        Waluta:
                    </LabelText>
                    <Field 
                    as="select"
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
                    </Field>
                </label>
            </p >
            <p>
                <Button>Przelicz!</Button>
            </p>
            <Result result={result} />
        </StyledForm >
    )
};