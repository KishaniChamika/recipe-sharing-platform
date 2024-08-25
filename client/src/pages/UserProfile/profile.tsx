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
                
                    <div>
                        <div className="avatar">
                            
                                <img  alt="Avatar" />
                            
                            
                        </div>
                        <div className="info">
                            <p><strong>Username:&nbsp;&nbsp;&nbsp;</strong> </p>
                            <p><strong>Email:&nbsp;&nbsp;&nbsp;</strong> </p>
                            {editMode ? (
                                <>
                                    <label>First Name:&nbsp;&nbsp; &nbsp;<input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></label>
                                    <label>Last Name:&nbsp;&nbsp;&nbsp; <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /></label>
                                    <label>Bio:&nbsp;&nbsp; &nbsp; <textarea value={bio} onChange={(e) => setBio(e.target.value)} /></label>
                                    <label>Avatar:&nbsp;&nbsp; &nbsp; <input type="file" accept="image/*" /></label>
                                    <button >Save</button>
                                </>
                            ) : (
                                <>
                                    <p><strong>First Name:&nbsp;&nbsp;&nbsp;</strong> </p>
                                    <p><strong>Last Name:&nbsp;&nbsp;&nbsp;</strong> </p>
                                    <p><strong>Bio:&nbsp;&nbsp;&nbsp;</strong> </p>
                                    <div className="button-group">
                                        <button onClick={() => setEditMode(true)}>Edit Profile</button>
                                        <button >Logout</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                
            </div>
        </div>
    )
}