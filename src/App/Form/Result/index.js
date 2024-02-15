import { Container } from "./styled";


export const Result = ({ result }) => {
    if (!result) {
        return null;
    }

    return (
        <Container>
            {result.sourceAmount < 0 ?
                (
                    "Nie można przeliczać ujemnych kwot"
                )
                :
                (
                    <>
                        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                        {" "}
                        <strong>
                            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                        </strong>
                    </>
                )}
        </Container>
    );
};

