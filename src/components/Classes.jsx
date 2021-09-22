import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import Navbar from './Navbar';

function RoomsContainer({context}){
    const{loading,sortedRooms,rooms} = context;
    if(loading)
    {
        return <Loading/>;
    }
    return(
        <>
            <Navbar></Navbar>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms = {sortedRooms}/>
        </>
    );

}
export default withRoomConsumer(RoomsContainer)
