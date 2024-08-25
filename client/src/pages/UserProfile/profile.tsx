import React,{useState} from "react";
import './profile.css';

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
        <div className="container">
            <div className="profile-wrapper">
                <h2>User Profile</h2>
                <div className="info">
                    <p><strong>Username:</strong></p>
                    <p><strong>Email:</strong></p>
                    <p><label>First Name:</label></p>
                    <p><label>Last Name:</label></p>
                    <p><label>Bio:</label></p>
                    <p><label>Avatar:</label></p>
                    <div className="button-group">
                        <button>Edit Profile</button>
                        <button>Logout</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}