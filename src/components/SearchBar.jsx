import './SearchBar.css'

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  )
}
