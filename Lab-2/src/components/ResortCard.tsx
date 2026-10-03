import type {ResortListing} from "../Data/data";
export default function ResortCard({
   //id,
  pic,
  country,
  location,
  rating,
  price,
    }: ResortListing)
{
    const ratingStyle = {color: rating > 4.0 ? "green" : "red"};
    ;
    return (<div className="Express">
      <img src={pic} alt="" width="150px"/>
      <h2>{country}</h2>
      <p style={{fontStyle: "italic" ,color:"grey"}}>{location}</p>
      <p style={ratingStyle}>{rating}★</p>
      <p style={{color: "grey"}}>${price}/night</p>
    </div>
    )
}