import { useParams } from "react-router-dom"

const City = () => {
    const { id } = useParams();
    return (
        <div>
            City Page {id}
        </div>
    )
}

export default City
