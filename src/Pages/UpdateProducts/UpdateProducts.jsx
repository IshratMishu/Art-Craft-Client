import { useLoaderData, useNavigate } from 'react-router-dom';
import back1 from '../../assets/images/h1-blog-img1-removebg-preview.png'
import Swal from 'sweetalert2';

const UpdateProducts = () => {
    const navigate = useNavigate();
    const potter = useLoaderData();
    const { _id, item_name, price, rating, image, time, description, customize, stockStatus, subcategory } = potter;

    
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const image = form.image.value;
        const customize = form.customize.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;

        const updatingPottery = { item_name, subcategory, price, rating, time, image, customize, stockStatus, description };

        // send data to the server
        fetch(`http://localhost:5000/updatePottery/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatingPottery)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your item updated successfully',
                        icon: 'success',
                        confirmButtonColor: "#FF497C",
                        confirmButtonText: 'Okay'
                    })
                }
                navigate('/artAndCraftList')
            })
    }



    return (
        <div className="lg:p-24 md:p-14 p-2 space-y-10 md:mt-14 mt-28" style={{ backgroundImage: `url(${back1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top' }}>
            <div className="shadow-md shadow-[#81c784] rounded-xl md:p-10 p-3" >
                <h2 className="text-3xl font-bold text-center text-[#81c784] mb-16">Update Your Item</h2>
                <form className="space-y-5" onSubmit={handleUpdate}>
                    {/* form row 1*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Item Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="item_name" className="grow" placeholder="item_name" defaultValue={item_name} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">SubCategory Name</span>
                            </label>
                            <select className="select input input-bordered" type="text" name="subcategory" defaultValue={subcategory}>
                                <option>Clay-made pottery</option>
                                <option>Stoneware</option>
                                <option>Porcelain</option>
                                <option>Terra Cotta</option>
                                <option>Ceramics & Architectural</option>
                                <option>Home decor pottery</option>
                            </select>
                        </div>
                    </div>

                    {/* form row 2*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold"> Price</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="price" className="grow" placeholder="price" defaultValue={price} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="rating" className="grow" placeholder="rating" defaultValue={rating} />
                            </label>
                        </div>
                    </div>

                    {/* form row 3*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Processing Time</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="time" className="grow" placeholder="processing_time" defaultValue={time} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Image URL</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="image" className="grow" placeholder="image url" defaultValue={image} />
                            </label>
                        </div>
                    </div>
                    {/* form row 4*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Customization</span>
                            </label>
                            <select className="select input input-bordered" type="text" name="customize" defaultValue={customize}>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Stock Status </span>
                            </label>
                            <select className="select input input-bordered" type="text" name="stockStatus" defaultValue={stockStatus}>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </div>
                    </div>
                    {/* form row 5*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Item Description</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="description" className="grow" placeholder="description" defaultValue={description} />
                        </label>
                    </div>
                    <input type="submit" value="Update" className="bg-[#FF497C] btn btn-block py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProducts;