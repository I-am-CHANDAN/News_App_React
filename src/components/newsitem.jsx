import image from "../assets/news.jpg"

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="new-item d-inline-flex">
            <div className="card m-3 bg-dark text-white" style={{ maxWidth: "300px" }}>
                <img src={src ? src : image} className="card-img-top p-2" style={{ width: "300px", height: "200px" }} alt="loading.." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description ? description.slice(0, 90) : "It`s happened some where around us check out the full description and Readmore."}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem;