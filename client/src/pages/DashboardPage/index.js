import React, {useRef} from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MenuIcon from '@mui/icons-material/Menu';
// import Btn from '../Btn';
import './dashboard.css';
import SearchForm from '../../components/SearchForm';
import SongCard from '../../components/SongCard';
// import { NavLink } from 'react-router-dom';

const DashboardPage = () => {
     
    return (
        <>
            <div>
                <h2 className='logo'>musica</h2>
            </div>
            <SearchForm />
            <div className='recommend-container'>
            <SongCard  title='Hello' artist='Adele' albumArtUrl='https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png' album='25'/>
            <SongCard  title='Hhbugvhvgvgvvgvggvgvgvgvgvgvgyguguyg' artist='Adele' albumArtUrl='https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png' album='25'/>

            </div>


        
        </>
    );

    
}
export default DashboardPage;
