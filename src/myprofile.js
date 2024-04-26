import React, { useState, useEffect } from "react";
import Axios from "axios";
import { getSession } from './main';
//import './myprofile.css';

const MyProfile = () => {
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        const fetchProfileInfo = async () => {
            try {
                const response = await Axios.post("https://server-alpha-henna.vercel.app/myprofile/info", { emailid: getSession("sid") });
                setProfileData(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setLoading(false);
            }
        };
        fetchProfileInfo();
    }, []);

    const handleAgreementChange = () => {
        setAgreed(!agreed);
    };

    const handleSubmit = () => {
        if (agreed) {
            // Submit action, e.g., save data, redirect, etc.
            console.log("Details submitted!");
        } else {
            alert("Please agree to the details before submitting.");
        }
    };

    return (
        <div className="full-height">
            <h3>User Profile</h3>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    
                    <div className="tablestyle">
                        <table>
                            <tbody>
                                <TableRow label="First Name" value={profileData.firstname} />
                                <TableRow label="Last Name" value={profileData.lastname} />
                                <TableRow label="Contact No." value={profileData.contactno} />
                                <TableRow label="Email Id" value={profileData.emailid} />
                                {/* Add more table rows here */}
                            </tbody>
                        </table>
                        <div className="agreement-checkbox">
                            <label>
                                <input type="checkbox" checked={agreed} onChange={handleAgreementChange} />
                                I agree to the above details
                            </label>
                        </div>
                        <div className="submit-button">
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const TableRow = ({ label, value }) => {
    return (
        <tr>
            <td className='firstcolumn'>{label}</td>
            <td>{value}</td>
        </tr>
    );
};

export default MyProfile;
