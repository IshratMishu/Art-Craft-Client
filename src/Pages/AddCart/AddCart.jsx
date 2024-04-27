import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const AddCart = () => {
    const { user } = useAuth() || {};
    const handleAddPottery = e => {
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
        const email = user.email;
        const name = user.displayName;

        const newPottery = { item_name, subcategory, price, rating, time, image, customize, stockStatus, description, email, name };
        console.log(newPottery);

        // send data to the server
        fetch('http://localhost:5000/potteries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPottery)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your item added successfully',
                        icon: 'success',
                        confirmButtonColor: "#FF497C",
                        confirmButtonText: 'Okay'
                    })
                }
            })
        form.reset();
    }
    return (
        <div className="lg:p-24 md:p-14 p-2 space-y-10 md:mt-14 mt-28">
            <div className="border-2 border-[#81c784] shadow-md shadow-[#81c784] md:p-10 p-3">
                <h2 className="text-3xl font-bold text-center text-black mb-16">Add Your Ceramics and Pottery Items</h2>
                <form className="space-y-5" onSubmit={handleAddPottery}>
                    {/* form row 1*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Item Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="item_name" className="grow" placeholder="item_name" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">SubCategory Name</span>
                            </label>
                            <select className="select input input-bordered" type="text" name="subcategory">
                                <option disabled selected>Choose One</option>
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
                                <input type="text" name="price" className="grow" placeholder="price" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="rating" className="grow" placeholder="rating" />
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
                                <input type="text" name="time" className="grow" placeholder="processing_time" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Image URL</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="image" className="grow" placeholder="image url" />
                            </label>
                        </div>
                    </div>
                    {/* form row 4*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Customization</span>
                            </label>
                            <select className="select input input-bordered" type="text" name="customize">
                                <option disabled selected>Choose One</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Stock Status </span>
                            </label>
                            <select className="select input input-bordered" type="text" name="stockStatus">
                                <option disabled selected>Choose One</option>
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
                            <input type="text" name="description" className="grow" placeholder="description" />
                        </label>
                    </div>
                    {/* form row 6*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">User Email</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="email" className="grow" placeholder="email" defaultValue={user.email} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">User Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="name" className="grow" placeholder="name" defaultValue={user.displayName} />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add" className="bg-[#FF497C] btn btn-block py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]" />
                </form>
            </div>
        </div>
    );
};

export default AddCart;