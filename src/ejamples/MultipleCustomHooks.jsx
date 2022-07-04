import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./Components/LoadingQuote";
import { QuoteBody } from "./Components/QuoteBody";

export const MultipleCustomHooks = () => {
  const { counter, incrementar } = useCounter(1);

  const { data, isLoading, errors } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <QuoteBody author={author} quote={quote} />
      )}

      <button
        onClick={() => {
          incrementar();
        }}
        className="btn btn-primary"
      >
        Next Quote
      </button>
    </>
  );
};
