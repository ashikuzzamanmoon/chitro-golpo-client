

const InstructorCard = ({ instructor }) => {
    // console.log(instructor);
    const { name, img, email } = instructor;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={img}  className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div className="card-actions">
                        <button className="btn btn-info">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;