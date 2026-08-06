import { CDN_URL } from "../../utils/constants";

const Restaurant = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        locality } = resData?.info;
    return (
        <div className="m-4 p-4 w-[300px] h-[350px] duration-200 hover:scale-90 ease-in hover:backdrop-blur-2xl">
            <img className="resimage w-[250px] h-[200px] py-2 rounded-4xl" src={CDN_URL + cloudinaryImageId}>
            </img>
            <h3 className="font-bold py-2">{name}</h3>
            <h4>🚚 Delivery Time -{resData.info.sla.slaString}</h4>
            <h4>⭐{avgRating} - {costForTwo}</h4>
            <h4>{cuisines.slice(0, 3).join(', ')}</h4>
            <h4>{locality}</h4>
        </div>
    );
}
export const withPromotedLabel = (Restaurant) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <Restaurant {...props} />
            </div>
        );
    };
};


export default Restaurant