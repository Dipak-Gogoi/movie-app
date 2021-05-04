import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import DnsIcon from '@material-ui/icons/Dns';
import TheatersIcon from '@material-ui/icons/Theaters';
import MovieIcon from '@material-ui/icons/Movie';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import LiveTvIcon from '@material-ui/icons/LiveTv';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <input type="checkbox" id="check" />
                <label htmlFor="check" >
                    <MenuIcon className="checkbtn" />
                </label>
                <h1>MOVIBAZAR</h1>
                <div className="sidebar_list">
                    <p className="sidebar_list_one_head">Menu</p>
                    <div className="sidebar_list_one">
                        <NavLink exact activeClassName="active" to="/" activeStyle={{ fontWeight: "bold", color: "white" }}><span className="icon"><HomeIcon className="icons" /> Movies </span></NavLink>
                        <NavLink activeClassName="active" to="/series" activeStyle={{ fontWeight: "bold", color: "white" }}><span className="icon"><TvIcon className="icons" /> Series </span></NavLink>
                        <NavLink activeClassName="active" to="/mylist" activeStyle={{ fontWeight: "bold", color: "white" }}><span className="icon"><DnsIcon className="icons" /> My List </span></NavLink>
                    </div>
                    <p className="sidebar_list_two_head">Category</p>
                    <div className="sidebar_list_two">
                        <Link to="/"><span className="icon"><TheatersIcon className="icons" /> All Flims </span></Link>
                        <Link to="/"><span className="icon"><FeaturedVideoIcon className="icons" /> Features </span></Link>
                        <Link to="/"><span className="icon"><MovieIcon className="icons" /> Documents </span></Link>
                        <Link to="/"><span className="icon"><LocalMoviesIcon className="icons" /> Shorts </span></Link>
                        <Link to="/"><span className="icon"><TvIcon className="icons" /> TV Show </span></Link>
                        <Link to="/"><span className="icon"><LiveTvIcon className="icons" />Commercials </span></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;