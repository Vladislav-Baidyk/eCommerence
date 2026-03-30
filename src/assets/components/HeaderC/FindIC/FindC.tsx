import "./FindC.css"
export const FindC= ({ onSearch }: { onSearch: (val: string) => void }) => {

  return (
    <>
    <div className="search-container">
        <div className="search-content">
        <div className="search-text">
        Precision<br/>
        <span>Architectular</span> Tech.
    </div>
    <input className="search-input" type="text" placeholder="Search the ecosystem..." onChange={(e) => onSearch(e.target.value)} />
   
        </div>
    </div>
     </>
  )
}
