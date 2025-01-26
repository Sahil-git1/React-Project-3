import Navbar from './components/navbar'
import Joke from "./components/joke"

const jokesData = [
  {
    upVote: 11,
    downVote: 12,
    pun: true,
    comments: ["fun", "it's ok"],
    setUp: "Why don’t skeletons fight each other?",
    punchline: "They don’t have the guts."
  },
  {
    upVote: 16,
    downVote: 23,
    pun: true,
    comments: ["fun", "it's ok"],
    setUp: "Why did the scarecrow win an award?",
    punchline: " Because he was outstanding in his field."
  },
  {
    upVote: 13,
    downVote: 22,
    pun: false,
    comments: ["fun", "it's ok"],
    setUp: "What do you call fake spaghetti?",
    punchline: "An impasta."
  },
  {
    upVote: 10,
    downVote: 3,
    pun: true,
    comments: ["fun", "it's ok"],
    setUp: "Why can’t your nose be 12 inches long?",
    punchline: " Because then it would be a foot!"
  }
]
const jokeElement =jokesData.map((data) => <
  Joke
  upVote={data.upVote}
  downVote={data.downVote}
  pun={data.pun}
  comments={data.comments.map((x) => x)}
  setUp={data.setUp}
  punchline={data.punchline}
/>)
export default function App() {
  return (<>
    <Navbar />
  {jokeElement}
  </>)
}
