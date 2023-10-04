import {useQuery} from 'react-router-dom'
import { QUERY_USER } from '../utils/queries'


const Profile = () => {
    const {loading, data} = useQuery(QUERY_USER)
    


    return (
       
    )


}




export default Profile