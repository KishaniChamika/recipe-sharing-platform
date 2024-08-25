import React,{useState} from "react";

interface UserProfile {
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
    bio?: string;
    avatar?: string;
}

export const ProfilePage:React.FC=()=>{
    const [user, setUser] = useState<UserProfile | null>(null);
    const [editMode, setEditMode] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState<File | null>(null);
    
    return(
        <div>Profile</div>
    )
}