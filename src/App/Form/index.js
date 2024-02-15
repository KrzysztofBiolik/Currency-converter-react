import { useState } from "react";
import { Result } from "./Result"; 
import { StyledForm, Header, LabelText, Field, Button, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.data[currency].value;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    return (
        <StyledForm onSubmit={onSubmit}>
            <Header>
                Kalkulator walut
            </Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekundka
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Coś poszło nie tak
                        </Failure>
                    ) : (
                        <>
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
                                        {Object.keys(ratesData.data).map((currency => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Field>
                                </label>
                            </p >
                            <p>
                                <Button>Przelicz!</Button>
                            </p>
                            <Result result={result} />
                        </>
                    )
                )}
        </StyledForm >
    )
}
