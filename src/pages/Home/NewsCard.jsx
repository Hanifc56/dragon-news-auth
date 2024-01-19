import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card  bg-base-100 border">
      <div className="card-body items-center text-start ">
        <div className="p-5">
          <h2 className="card-title">{title}</h2>
        </div>

        <div className="p-5">
          <figure className="">
            <img src={image_url} alt="news" className="rounded-xl w-full" />
          </figure>
        </div>
        <div className="text-start p-5">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="text-[#FF8C47] font-bold">
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
