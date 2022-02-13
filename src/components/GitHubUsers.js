import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import GitHubUsersList from './GitHubUsersList';

export default function GitHubUsers() {
    const [gitUsers, setGitUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getGitUser = async () => {
        try {
            const response = await axios.get('https://api.github.com/users');
            setGitUsers(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getGitUser();
    }, []);

    if (loading) {
        return <Loading />;
    }
    return <GitHubUsersList gitUsers={gitUsers} />;
}
