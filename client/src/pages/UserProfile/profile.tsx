import React from "react";

interface UserProfile {
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
    bio?: string;
    avatar?: string;
}

export const ProfilePage:React.FC=()=>{
    return(
        <div>Profile</div>
    )
}