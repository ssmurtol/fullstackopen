import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    const sorted = anecdotes.sort((a,b) => {
        return (
          b.votes - a.votes
        )
      })

    return (
        <ul>{sorted.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
            </div>
            </div>
        )}
        </ul>
    )
}

export default AnecdoteList