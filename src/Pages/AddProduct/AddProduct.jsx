import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

      const handleAddProduct =(event)=>{
                  event.preventDefault();
                  const form = event.target;
                  const name=form.name.value;
                  const image=form.image.value;
                  const brandName=form.brand_name.value;
                  const type = form.type.value;
                  const price = form.price.value;
                  const shortDescription = form.short_description.value;
                  const rating = form.rating.value;
                  const newProduct={name,image,brandName,type,price,shortDescription,rating,}
                  console.log(newProduct);
                  fetch('https://assignment-10-backend-side-15nojv0iz-shaikats-projects.vercel.app/product',{
                        method: 'POST',
                        headers:{
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify(newProduct)
                  })
                        .then(res=>res.json())
                        .then(data =>{
                              console.log(data);
                              if (data.insertedId) {
                                    Swal.fire({
                                          title: 'success!',
                                          text: 'Product added Successfully',
                                          icon: 'success',
                                          confirmButtonText: 'Cool'
                                    })
                                    form.reset()
                              }
                              else {
                                    Swal.fire({
                                          title: 'error!',
                                          text: 'Product do not added',
                                          icon: 'error',
                                          confirmButtonText: 'Try Agin'
                                    })
                              }
                        })
      }
      return (
            <div className='max-w-6xl mx-auto mt-14 mb-5'>
                  <div className=" bg-base-200 w-1/2 mx-auto">
                        <div className=" ">
                              <div className="card  w-full  shadow-2xl bg-base-100 border border-red-300">
                                    <form onSubmit={handleAddProduct} className="card-body w-full pl-12">
                                          <h2>Add New Product</h2>
                                          <div className='flex gap-8'>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Image</span>
                                                      </label>
                                                      <input type="text" placeholder="image URL" name='image' className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Name</span>
                                                      </label>
                                                      <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                                </div>
                                          </div>
                                          <div className='flex gap-8'>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Brand Name</span>
                                                      </label>
                                                      <input type="text" placeholder="Brand Name" name='brand_name' className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Type</span>
                                                      </label>
                                                      <input type="text" placeholder="type" name='type' className="input input-bordered" required />
                                                </div>
                                          </div>
                                          <div className='flex gap-8'>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Price</span>
                                                      </label>
                                                      <input type="number" placeholder="price" name='price' className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Short description</span>
                                                      </label>
                                                      <input type="text" placeholder="Short description" name='short_description' className="input input-bordered" required />
                                                </div>
                                          </div>
                                          <div className="form-control w-1/2">
                                                <label className="label">
                                                      <span className="label-text">Rating</span>
                                                </label>
                                                <input type="text" placeholder="Rating" name='rating' className="input input-bordered" required />
                                          </div>

                                          <div className="form-control mt-6 w-[480px]">
                                                <button type='submit' className="btn btn-primary">Add Product</button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AddProduct;