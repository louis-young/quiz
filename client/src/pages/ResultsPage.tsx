import { pagePaths } from "../constants/pagePaths";
import { useQuizContext } from "../hooks/context/useQuizContext";
import { getCorrectAnswers } from "../utilities/results";
import { Results } from "../components/Results";
import { Button } from "../components/Button";

export const ResultsPage = () => {
  const { results, totalQuestions } = useQuizContext();

  const correctAnswers = getCorrectAnswers(results);

  return (
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
      <section className="bg-white p-10 container max-w-md text-center shadow-md rounded-md">
        <h1 className="tracking-wide font-extrabold text-3xl">Results</h1>

        <p className="text-gray-600 my-6">
          You got {correctAnswers} questions correct out of {totalQuestions}.
        </p>

        <Results results={results} />

        <Button text="Play Again" link={pagePaths.homePage} />
      </section>
    </main>
  );
};
