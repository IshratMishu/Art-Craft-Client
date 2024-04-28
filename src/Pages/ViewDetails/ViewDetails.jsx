import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const { id } = useParams();
    const [pottery, setPottery] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleDetail/${id}`)
            .then(res => res.json())
            .then(data => {
                setPottery(data);
            })
    }, [id])

    return (
        <div className="mt-28">
            <div className="bg-base-100 shadow-xl">
                <div className="flex flex-col lg:flex-row p-5 md:p-10">
                    <img className="w-[450px] md:mx-auto lg:mx-0" src={pottery.image} alt="Album" />
                    <div className="p-10 space-y-5">
                        <h2 className="card-title font-bold text-2xl">{pottery.item_name}</h2>
                        <p className="text-lg">{pottery.price}</p>
                        <p> <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star w-3 h-3" />
                            <input type="radio" name="rating-1" className="mask mask-star w-3 h-3" />
                            <input type="radio" name="rating-1" className="mask mask-star w-3 h-3" />
                            <input type="radio" name="rating-1" className="mask mask-star w-3 h-3" checked />
                            <input type="radio" name="rating-1" className="mask mask-star w-3 h-3" />
                        </div>  {pottery.rating}</p>
                        <p><span className="text-lg md:text-xl font-medium">Description:</span> {pottery.description}</p>

                    </div>
                </div>
                <hr />
                <h1 className="text-center font-bold text-2xl mt-5">More Info</h1>
                <div className="px-5 md:px-20 pb-10">
                    <div className="overflow-x-auto mt-5 ">

                        <table className="table">
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Sub Category:</td>
                                    <td>{pottery.subcategory}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Processing time:</td>
                                    <td>{pottery.time}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>customizable</td>
                                    <td>{pottery.customize}</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <td>Stock Status</td>
                                    <td>{pottery.stockStatus}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ViewDetails;