import React, {useRef} from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MenuIcon from '@mui/icons-material/Menu';
import Btn from '../Btn';
import './dashboard.css';
import SearchForm from '../../components/SearchForm';
// import { NavLink } from 'react-router-dom';

const DashboardPage = () => {
     
    return (
        <>
            <div className='header'>
                <h2 className='logo'>musica</h2>
            </div>
            <SearchForm />

        
        </>
    );

    
}
export default DashboardPage;
