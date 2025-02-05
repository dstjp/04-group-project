import { Link } from "react-router"
import "../NotFound/NotFound.css"

 export const NotFound = () => {
  return (
    <div className="not-found-container">
      <h3 className="not-found-header">Page not found</h3>
      <Link to="/" className="not-found-to-home">
        Back to Movies
      </Link>
    </div>
  )
}