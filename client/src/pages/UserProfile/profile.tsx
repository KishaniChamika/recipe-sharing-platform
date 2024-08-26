import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profile.css';

interface UserProfile {
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
    bio?: string;
    avatar?: string;
}

export const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [editMode, setEditMode] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [bio, setBio] = useState('');
    const [avatar, setAvatar] = useState<File | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.get('http://localhost:3000/api/user', {
                
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    
                });
                setUser(response.data.user);
                setFirstname(response.data.user.firstname || '');
                setLastname(response.data.user.lastname || '');
                setBio(response.data.user.bio || '');
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setAvatar(e.target.files[0]);
        }
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            const formData = new FormData();
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('bio', bio);
            if (avatar) {
                formData.append('avatar', avatar);
            }

            const response = await axios.put('http://localhost:3000/api/user', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setUser(response.data.user);
            setEditMode(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');  // Navigate to the login page
    };

    return (
        <div className="prof-container">
            <div className="profile-wrapper">
                <h2>User Profile</h2>
                {user && (
                    <div>
                        <div className="avatar">
                            {user.avatar ? (
                                <img src={`http://localhost:3000/${user.avatar}`} alt="Avatar" />
                            ) : (
                                <span>No Avatar</span>
                            )}
                        </div>
                        <div className="info">
                            <p><strong>Username:&nbsp;&nbsp;&nbsp;</strong> {user.username}</p>
                            <p><strong>Email:&nbsp;&nbsp;&nbsp;</strong> {user.email}</p>
                            {editMode ? (
                                <>
                                    <label>First Name:&nbsp;&nbsp; &nbsp;<input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></label>
                                    <label>Last Name:&nbsp;&nbsp;&nbsp; <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /></label>
                                    <label>Bio:&nbsp;&nbsp; &nbsp; <textarea value={bio} onChange={(e) => setBio(e.target.value)} /></label>
                                    <label>Avatar:&nbsp;&nbsp; &nbsp; <input type="file" accept="image/*" onChange={handleAvatarChange} /></label>
                                    <div className="button-group">
                                    <button onClick={handleSave}>Save</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p><strong>First Name:&nbsp;&nbsp;&nbsp;</strong> {user.firstname}</p>
                                    <p><strong>Last Name:&nbsp;&nbsp;&nbsp;</strong> {user.lastname}</p>
                                    <p><strong>Bio:&nbsp;&nbsp;&nbsp;</strong> {user.bio}</p>
                                    <div className="button-group">
                                        <button onClick={() => setEditMode(true)}>Edit Profile</button>
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
