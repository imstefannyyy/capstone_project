function NewsCard( { image, title, abstract, link }) {
    let imageSrc = image ? `https://static01.nyt.com/${image}` : "/src/assets/noimage.jpg";
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="card p-0 m-0 m-md-1 m-lg-2">
                <img src={imageSrc} className="card-img-top" style={{ height: "16rem" }} />
                <div className="card-body">
                    <div className="d-flex flex-column justify-content-between" style={{ height: "12rem" }}>
                        <h5 className="card-title overflow-hidden" style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            WebkitLineClamp: 2,
                            height: "4rem",
                        }}>{title}</h5>
                        <p className="card-text text-ellipsis h-50" style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            WebkitLineClamp: 3,
                        }}>{abstract}</p>
                        <a href={link} target="_blank" className="btn btn-primary text-start" rel="noopener noreferrer">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;
