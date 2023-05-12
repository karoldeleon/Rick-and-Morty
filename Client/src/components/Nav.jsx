import SearchBar from './SearchBar';


export default function Nav({onSearch,setAccess}) {
    return (
        <div >
        <SearchBar onSearch={onSearch} setAccess={setAccess}/>
        </div>
    )
 }