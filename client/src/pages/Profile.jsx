import {useQuery} from '@apollo/client'
import {Navigate, useParams} from 'react-router-dom'
import { QUERY_USER } from '../utils/queries'


const Profile = () => {
    const {loading, data} = useQuery(QUERY_USER)
    const {profileId: }


    return (
       
    )


}




export default Profile